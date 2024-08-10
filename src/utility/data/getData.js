// src/data/getData.mjs
import axios from 'axios';

/**
 * Fetches data from the given URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} The fetched data.
 * @throws {Error} If the request fails.
 */
export default async function getData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status code ${error.response?.status || 500}`);
  }
}
