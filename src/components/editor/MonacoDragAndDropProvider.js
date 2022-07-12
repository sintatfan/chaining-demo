import { editor, Range, Selection } from 'monaco-editor';
const { ContentWidgetPositionPreference } = editor;

/*
    Insert text snippet
    Source: https://github.com/microsoft/monaco-editor/issues/1050#issuecomment-499046146
 */
export const insertTextAtPos = (instance, text, coords = [0, 0], placeCursor = false) => {
    const range = new Range(coords[0], coords[1], coords[0], coords[1]);
    if (placeCursor) {
        const selection = new Selection(coords[0], coords[1], coords[0], coords[1]);
        instance.executeEdits('insert', [{ range, text, forceMoveMarkers: true }], [selection]);
        instance.focus();
    }
    else {
        instance.executeEdits('insert', [{ range, text, forceMoveMarkers: true }]);
    }
    instance.pushUndoStop();
};

/*
    Monaco drag and drop provider
    Source: https://gist.github.com/andrienko/a754de7e615fa01435a526c8b6d238cd
 */
export class MonacoDragNDropProvider {
    constructor(onDrop, getInstance, dropClassName = 'drop') {
        this.onDrop = (e) => {
            this.onDropHandler && this.onDropHandler(e, this.dragTarget, this.getInstance());
            this.removeMouseDownWidget();
        };
        this.onDragOver = (e) => {
            const instance = this.getInstance();
            instance && this.displayMouseDropPosition(instance, instance.getTargetAtClientPoint(e.clientX, e.clientY));
            e.preventDefault();
        };
        this.removeMouseDownWidget = () => {
            const instance = this.getInstance();
            if (instance && this.mouseDropWidget && this.domNode) {
                instance.removeContentWidget(this.mouseDropWidget);
                this.mouseDropWidget = null;
            }
        };
        this.props = {
            onDragOver: this.onDragOver,
            onDropCapture: this.onDrop,
            onDragLeaveCapture: this.removeMouseDownWidget
        };
        this.domNode = null;
        this.mouseDropWidget = null;
        this.buildMouseDropWidget = () => {
            if (!this.domNode) {
                this.domNode = document.createElement('div');
                this.domNode.className = this.dropClassName;
                this.domNode.style.pointerEvents = 'none';
                this.domNode.style.borderLeft = '2px solid #ccc';
                this.domNode.innerHTML = '&nbsp;';
            }
            return {
                getId: () => 'drag',
                getDomNode: () => this.domNode,
                getPosition: () => ({
                    position: this.dragTarget?.position,
                    preference: [ContentWidgetPositionPreference.EXACT, ContentWidgetPositionPreference.EXACT]
                })
            };
        };
        this.displayMouseDropPosition = (instance, target) => {
            this.dragTarget = target;
            if (this.mouseDropWidget) {
                instance.layoutContentWidget(this.mouseDropWidget);
            }
            else {
                this.mouseDropWidget = this.buildMouseDropWidget();
                instance.addContentWidget(this.mouseDropWidget);
            }
        };
        this.dropClassName = dropClassName;
        this.onDropHandler = onDrop;
        this.getInstance = getInstance;
    }
}
