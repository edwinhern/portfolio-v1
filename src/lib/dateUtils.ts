import dayjs from 'dayjs';

export enum TIME_FORMAT {
  FORMAT_24 = 'HH:mm:ss',
  FORMAT_12 = 'hh:mm A',
}

export enum DATE_FORMAT {
  YYYY_MM_DD = 'YYYY-MM-DD',
  //** @renders February 2024 */
  MMMM_YYYY = 'MMMM YYYY',
  //** @renders Thursday, February 1, 2024 12:13 PM */
  FULL_DATE_TIME = 'dddd, MMMM D, YYYY h:mm A',
}

export function formatDateTime(date: Date | string, formatType: DATE_FORMAT): string {
  return dayjs(date).format(formatType);
}
