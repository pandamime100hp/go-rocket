
export default function parseDate(date: string): string {
    return new Date(date).toLocaleString('en-IE', { timeZone: 'UTC' });
}