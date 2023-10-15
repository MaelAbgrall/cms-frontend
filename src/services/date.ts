export async function getReadableDate(ISODate: string | null) {
  if (ISODate === null) {
    return null;
  }
  const date = new Date(ISODate);
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return dateTimeFormat.format(date);
}
