import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime);
dayjs.locale('pt-br')

export function tempoDesdePost(dataDoPost: string | Date): string {
  return dayjs(dataDoPost).fromNow();
}