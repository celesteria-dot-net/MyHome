import format from 'date-fns/format';

const Formatters = {
  dateOnly: 'yyyy/MM/dd',
  dateTime: 'yyyy/MM/dd HH:mm',
} as const;

type Formatters = typeof Formatters[keyof typeof Formatters];

const formatDate = (date: string, formatType: Formatters) =>
  format(new Date(date), formatType);

const formatDateOnly = (date: string): string =>
  formatDate(date, Formatters.dateOnly);
const formatDateTime = (date: string): string =>
  formatDate(date, Formatters.dateTime);

export { formatDateOnly, formatDateTime };
