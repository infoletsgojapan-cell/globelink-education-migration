import { CareerVacancy } from '../types';

// We do NOT fabricate fake job vacancies or false salary promises.
// When verified employer recruitments or government-approved drives open, they are listed here.
// When none are verified, the UI renders the required transparent notice and direct counseling contact.
export const VERIFIED_VACANCIES: CareerVacancy[] = [];
