import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function humanDateTime(date) {
    return dayjs(date).fromNow();
}

export function fullDateTime(date) {
    return dayjs(date).format('YYYY-MM-DD HH:mm');
}