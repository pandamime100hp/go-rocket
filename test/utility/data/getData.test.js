import { test, expect, beforeEach } from '@jest/globals';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getData from '../../src/data/getData.mjs';

// Initialize mock adapter
const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

test('getData returns data when given a valid URL', async () => {
  const mockData = { id: 1, title: 'Test Todo' };
  mock.onGet('https://jsonplaceholder.typicode.com/todos/1').reply(200, mockData);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const data = await getData(url);

  expect(data).toBeDefined();
  expect(data).toEqual(mockData);
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title', 'Test Todo');
});

test('getData throws an error when given an invalid URL', async () => {
  mock.onGet('https://jsonplaceholder.typicode.com/invalid').reply(500);

  const url = 'https://jsonplaceholder.typicode.com/invalid';
  await expect(getData(url)).rejects.toThrow('Request failed with status code 500');
});
