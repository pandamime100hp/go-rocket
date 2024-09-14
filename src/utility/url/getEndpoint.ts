/**
 * Generates an endpoint URL
 * @param url - The base URL
 * @param endpoint - The endpoint
 * @returns - An endpoint URL
 */
const getEndpoint: Function = (url: string, endpoint: string) => {
    return `${url.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}

export default getEndpoint
