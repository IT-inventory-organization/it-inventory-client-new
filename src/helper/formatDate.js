export function formatDate(date) {
  if (!date) return null;
  const [month, day, year] = date.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}
export function formatDateIsoToEn (date) {
  // date input should YYYY-MM-DD
  if (!date) return null

  const [year, month, day] = date.toString().split('-')
  return `${day}-${month}-${year}`
}
