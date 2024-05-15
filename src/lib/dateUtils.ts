import dayjs from 'dayjs';

export enum TIME_FORMAT {
  FORMAT_12 = 'hh:mm A',
  FORMAT_24 = 'HH:mm:ss',
}

export enum DATE_FORMAT {
  //** @renders Thursday, February 1, 2024 12:13 PM */
  FULL_DATE_TIME = 'dddd, MMMM D, YYYY h:mm A',
  //** @renders February 2024 */
  MMMM_YYYY = 'MMMM YYYY',
  YYYY_MM_DD = 'YYYY-MM-DD',
}

export function formatDateTime(date: Date | string, formatType: DATE_FORMAT): string {
  return dayjs(date).format(formatType);
}
