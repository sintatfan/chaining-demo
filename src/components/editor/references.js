import previewEllipse from '../../images/keyword_preview/preview_ellipse.svg';
import previewRect from '../../images/keyword_preview/preview_rect.svg';
import previewTriangle from '../../images/keyword_preview/preview_triangle.svg';
import previewLine from '../../images/keyword_preview/preview_line.svg';

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
            { label: 'fill()', image: 'https://via.placeholder.com/160x90', code: 'fill(4,116,121);' },
            { label: 'stroke()', image: 'https://via.placeholder.com/160x90', code: 'stroke(0,0,0);' },
            { label: 'strokeWeight()', image: 'https://via.placeholder.com/160x90', code: 'strokeWeight(3);' },
        ]
    },
    {
        label: 'Transform',
        items: [
            {label: 'rotate()', image: 'https://via.placeholder.com/160x90', code: 'rotate(45);' },
            {label: 'scale()', image: 'https://via.placeholder.com/160x90', code: 'scale(2);' },
            {label: 'translate()', image: 'https://via.placeholder.com/160x90', code: 'translate(20, 20);' },
        ],
    }
];
