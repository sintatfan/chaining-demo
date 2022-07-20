import previewEllipse from '../../images/keyword_preview/preview_ellipse.svg';
import previewRect from '../../images/keyword_preview/preview_rect.svg';
import previewTriangle from '../../images/keyword_preview/preview_triangle.svg';
import previewLine from '../../images/keyword_preview/preview_line.svg';
import previewFill from '../../images/keyword_preview/preview_fill.svg';
import previewStroke from '../../images/keyword_preview/preview_stroke.svg';
import previewStrokeWeight from '../../images/keyword_preview/preview_stroke_weight.svg';
import previewRotate from '../../images/keyword_preview/preview_rotate.svg';
import previewScale from '../../images/keyword_preview/preview_scale.svg';
import previewTranslate from '../../images/keyword_preview/preview_translate.svg';

export const references = [
    {
        label: 'Shape',
        items: [
            { label: 'ellipse()', image: previewEllipse, code: 'ellipse(width / 2, height / 2, 50, 50);', },
            { label: 'rect()', image: previewRect, code: 'rect(width / 2 - 25, height / 2 - 25, 50, 50);' },
            { label: 'triangle()', image: previewTriangle, code: 'triangle(width / 2, 10, 10, height - 10, width - 10, height - 10);' },
            { label: 'line()', image: previewLine, code: 'line(0, 0, width, height);' },
        ]
    },
    {
        label: 'Color',
        items: [
            { label: 'fill()', image: previewFill, code: 'fill(4,116,121);' },
            { label: 'stroke()', image: previewStroke, code: 'stroke(0,0,0);' },
            { label: 'strokeWeight()', image: previewStrokeWeight, code: 'strokeWeight(3);' },
        ]
    },
    {
        label: 'Transform',
        items: [
            {label: 'rotate()', image: previewRotate, code: 'rotate(45);' },
            {label: 'scale()', image: previewScale, code: 'scale(2);' },
            {label: 'translate()', image: previewTranslate, code: 'translate(20, 20);' },
        ],
    }
];
