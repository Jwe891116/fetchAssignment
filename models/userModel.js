import { API_KEYS, API_URLS } from "../config/constants.js";

export const fetchRandomQuote = () => {
  return fetch(API_URLS.QUOTE_API, {
    headers: { 'X-Api-Key': API_KEYS.QUOTE_API_KEY }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Quote API failed: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data[0])
    .catch(error => {
      console.error('Error fetching quote:', error);
      throw error;
    });
};

export const fetchRandomDogImage = () => {
  return fetch(API_URLS.DOG_API, {
    headers: { 'x-api-key': API_KEYS.DOG_API_KEY }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Dog API failed');
      }
      return response.json();
    })
    .then(data => data[0])
    .catch(error => {
      console.error('Error fetching dog image:', error);
      throw error;
    });
};