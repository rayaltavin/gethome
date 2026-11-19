const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

function toUtcTimestamp(date: string): number {
  const match = ISO_DATE.exec(date);
  if (!match) {
    throw new RangeError(`Invalid date "${date}"; expected YYYY-MM-DD.`);
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const parsed = new Date(0);
  parsed.setUTCFullYear(year, month - 1, day);
  parsed.setUTCHours(0, 0, 0, 0);

  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new RangeError(`Invalid calendar date "${date}".`);
  }

  return parsed.getTime();
}

export function calculateElapsedDays(startDate: string, endDate: string): number {
  return Math.round(
    (toUtcTimestamp(endDate) - toUtcTimestamp(startDate)) / DAY_IN_MILLISECONDS,
  );
}
