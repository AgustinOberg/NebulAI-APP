import { version } from '../package.json';
import { MB } from './size.constants';
export const APP_VERSION = version;
// TODO: Move to backend or KV storage
export const MAX_FILE_SIZE = 15 * MB;
export const MAX_FILE_SIZE_LABEL = '15 MB';
