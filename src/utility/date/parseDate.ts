
export default function parseDate(date: string): string {
    return new Date(date).toLocaleString('en-US', { timeZone: 'UTC' });
}