/**
 * Generates an endpoint URL
 * @param {string} url 
 * @param {string} endpoint 
 * @returns {string}
 */
export default function getEndpoint(url, endpoint) {
    return `${url.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}