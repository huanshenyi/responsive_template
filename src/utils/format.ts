import { default as dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);

dayjs.locale(`ja`);

export const formatDate = (date: number) => dayjs(date).format('YYYY-MM-DD HH:mm');
export const formatDay = (date: string) => dayjs(date).format('YYYY-MM-DD');
export const formatTime = (date: string) => dayjs(date).format('HH:mm');
export const getAfterHalfHour = (date: string) => dayjs(date).add(30, 'm').format('HH:mm');
export const formatISOTime = (date: string) => dayjs(date).toISOString();

export const relativeDate = (date: Date): string => {
  return dayjs(date).fromNow();
};
