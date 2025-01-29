export function getDateString(date: Date): string {
  return date.toLocaleDateString(undefined, {
    localeMatcher: "best fit",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
