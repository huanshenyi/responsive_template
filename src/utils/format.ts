import { default as dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);

dayjs.locale(`ja`);

export const formatDate = (date: number) => dayjs(date).format('YYYY-MM-DD HH:mm');

export const relativeDate = (date: Date): string => {
  return dayjs(date).fromNow();
};
