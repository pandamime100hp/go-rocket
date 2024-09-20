// src/data/getData.mjs
import axios from 'axios';

/**
 * Fetches data from the given URL.
 * @param url - The URL to fetch data from.
 * @returns The fetched data.
 * @throws If the request fails.
 */


export default async function getData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status code ${error.response?.status || 500}: ${error.message}`);
  }
}
