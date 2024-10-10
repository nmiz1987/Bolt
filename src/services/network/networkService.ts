import axios from 'axios';
import { baseUrl } from './baseUrl';

declare module 'axios' {
  interface AxiosResponse {
    isSuccess?: boolean;
  }
}

/**
 * This service is used to create a network service with the provided token.
 * You can replace axios with fetch or any other network library.
 * In this design, we are passing the token to the network service through the function.
 * @param token the token to be used in the network service
 * @returns the network service response
 */

export function networkService(token = '') {
  const headers = {
    'Content-Type': 'application/json',
  };

  const network = axios.create({
    baseURL: baseUrl,
    headers,
    // We want to return all the results, even the error, will will handle the result in the code implementation
    validateStatus: () => true,
  });

  network.interceptors.response.use(response => {
    // We add a flag to the response to indicate if the request was successful instead of checking the status code every time
    response.isSuccess = response.status < 400;
    return response;
  });

  if (token) {
    network.interceptors.request.use(function (config) {
      config.headers['Authorization'] = 'Bearer ' + token;
      return config;
    });
  }

  return network;
}
