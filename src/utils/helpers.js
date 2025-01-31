// import { formatDistance, parseISO } from 'date-fns';
// import { differenceInDays } from 'date-fns/esm';

// // We want to make this function work for both Date objects and strings (which come from Supabase)
// export const subtractDates = (dateStr1, dateStr2) =>
//   differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// export const formatDistanceFromNow = (dateStr) =>
//   formatDistance(parseISO(dateStr), new Date(), {
//     addSuffix: true,
//   })
//     .replace('about ', '')
//     .replace('in', 'In');

// // Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
// export const getToday = function (options = {}) {
//   const today = new Date();

//   // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
//   if (options?.end)
//     // Set to the last second of the day
//     today.setUTCHours(23, 59, 59, 999);
//   else today.setUTCHours(0, 0, 0, 0);
//   return today.toISOString();
// };

// export const formatCurrency = (value) =>
//   new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
//     value
//   );

import { formatDistance, parseISO, differenceInDays } from "date-fns";

export const subtractDates = (date1, date2) => {
  const parsedDate1 = date1 instanceof Date ? date1 : parseISO(date1);
  const parsedDate2 = date2 instanceof Date ? date2 : parseISO(date2);
  return differenceInDays(parsedDate1, parsedDate2);
};

export const formatDistanceFromNow = (date) =>
  formatDistance(parseISO(date), new Date(), { addSuffix: true })
    .replace(/^about /, "")
    .replace(/^in/, "In");

export const getToday = (options = {}) => {
  const today = new Date();
  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999); // Set to end of the day
  } else {
    today.setUTCHours(0, 0, 0, 0); // Set to start of the day
  }
  return today.toISOString();
};

export const formatCurrency = (value, currency = "USD") =>
  new Intl.NumberFormat("en", { style: "currency", currency }).format(value);
