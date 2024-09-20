/**
 * Generates an endpoint URL
 * @param url - The base URL
 * @param endpoint - The endpoint
 * @returns - An endpoint URL
 */
export default function getEndpoint(url: string, endpoint: string): string {
    return `${url.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}
