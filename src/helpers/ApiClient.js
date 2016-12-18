import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';

const defaultOptions = {
  credentials: 'same-origin'
};

const client = async (url, schema, options = {}) => {
  const response = await fetch(url, { ...defaultOptions, ...options });
  const json = await response.json();
  if (response.ok) {
    if (schema) {
      return normalize(json, schema);
    }
    return json;
  }

  const error = new Error(json.message);
  error.status = response.status;
  throw error;
};

export default client;

