import { EMAIL_PATERN } from './errors-messages';
const validateEmail = email => String(email).toLowerCase().match(EMAIL_PATERN);

export default validateEmail;
