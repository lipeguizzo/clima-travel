import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { parse, stringify } from 'qs';

function handleAxiosRequest(config: InternalAxiosRequestConfig) {
  return config;
}

function handleAxiosRequestError(error: AxiosError) {
  throw error;
}

function handleAxiosResponse(response: AxiosResponse<unknown, unknown>) {
  return response;
}

async function handleAxiosResponseError(error: AxiosError) {

  if (error?.response?.status === 502 || error?.code === 'ERR_NETWORK') {
    throw new Error('Servidor indisponível!');
  }

    throw error;

}

export const Client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 900000,
  timeoutErrorMessage: 'Aguarde um momento ou tente novamente mais tarde!',
  paramsSerializer: {
    encode: (params) => parse(params),
    serialize: (params) => stringify(params),
  },
});

Client.interceptors.request.use(handleAxiosRequest, handleAxiosRequestError);

Client.interceptors.response.use(handleAxiosResponse, handleAxiosResponseError);