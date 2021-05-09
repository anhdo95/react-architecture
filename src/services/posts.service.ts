import httpClient from './http-client';

export function getPosts(): Promise<any[]> {
  return httpClient
    .get('https://hn.algolia.com/api/v1/search?tags=story')
    .then(({ data }) => data.hits);
}
