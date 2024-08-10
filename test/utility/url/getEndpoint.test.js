import getEndpoint from '../../src/url/getEndpoint.mjs'

const expectedUrl = 'https://api.example.com/users';

test('getEndpoint generates a correct endpoint URL', () => {
    const url = 'https://api.example.com';
    const endpoint = 'users';
  
    const result = getEndpoint(url, endpoint);
  
    expect(result).toBe(expectedUrl);
});
  
test('getEndpoint handles trailing slashes in base URL', () => {
    const url = 'https://api.example.com/';
    const endpoint = 'users';

    const result = getEndpoint(url, endpoint);

    expect(result).toBe(expectedUrl);
});

test('getEndpoint handles leading slashes in endpoint', () => {
    const url = 'https://api.example.com';
    const endpoint = '/users';

    const result = getEndpoint(url, endpoint);

    expect(result).toBe(expectedUrl);
});

test('getEndpoint handles both trailing and leading slashes', () => {
    const url = 'https://api.example.com/';
    const endpoint = '/users';

    const result = getEndpoint(url, endpoint);

    expect(result).toBe(expectedUrl);
});

test('getEndpoint handles multiple trailing and leading slashes', () => {
    const url = 'https://api.example.com///';
    const endpoint = '///users';

    const result = getEndpoint(url, endpoint);

    expect(result).toBe(expectedUrl);
});