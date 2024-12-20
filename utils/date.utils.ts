import { format } from 'date-fns';

export const formatDate = (date: number) => {
  const finalDate = new Date(date * 1000);
  return format(finalDate, 'dd/MM/yyyy');
};
