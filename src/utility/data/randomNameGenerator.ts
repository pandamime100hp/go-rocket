export function generateRandomName(): string {
    const prefixes = ['Xan', 'Vel', 'Zor', 'Kor', 'Gar', 'Thal', 'Yar', 'Mer', 'Sol', 'Vor', 'Del', 'Xor', 'Tor'];
    const middles = ['', 'tu', 'ra', 'lan', 'ma', 'tor', 'la', 'me', 'zar', 'vin', 'ris', 'ar', 'us', 'ion', 'ia', 'ax', 'or', 'en', 'es', 'al', 'ta'];
    const suffixes = ['', 'on', 'ar', 'us', 'ion', 'ia', 'ax', 'or', 'en', 'es', 'al', 'ta'];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return prefix + middle + suffix;
}