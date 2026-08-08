/**
 * utils/constants.js
 * Shared constants used across multiple components.
 * A single place to update URLs or global config.
 */

/** Google Calendar appointment scheduling URL */
export const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1yqo8o5Rx6xThID3r3a48rHlUceXcwnuxYB_jESVun_ben95EXcHRTxiTJKR_wKsjPAwAE4_2i?gv=true';

/** Open the calendar in a popup window */
export function openCalendar() {
  window.open(CALENDAR_URL, '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes');
}

/** Social links */
export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/tamo2005' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/' },
  { label: 'Email',    href: 'mailto:tamagnoroy.roy2005@gmail.com' },
];

/** Resume PDF path */
export const RESUME_PATH = '/assets/Tamagno_Roy.pdf';
