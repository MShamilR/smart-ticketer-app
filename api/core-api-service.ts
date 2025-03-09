import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const API_V1 = "v1.0/";
export const API_V2 = "v2.0/";

const apiClient = axios.create({
  baseURL: process.env.BUS_PAY_API,
  timeout: 10000,
});

interface RequestOptions {
  body?: any;
  auth?: boolean;
  headers?: Record<string, string>;
}

/**
 * Creates a request configuration and executes it.
 */
const handleRequest = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  { body = null, auth = false, headers = {} }: RequestOptions = {}
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(body ? { data: body } : {}),
  };

  if (auth) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
  }

  try {
    const response: AxiosResponse = await apiClient(config);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.data.message === "SERVER_ERROR") {
        throw {
          message: "Could not connect to server. Please try again.",
          key: "customError:content.serverError",
        };
      }
      throw error.response.data;
    }
    throw error;
  }
};

/**
 * Converts an object into FormData format.
 */
const createFormData = (obj: Record<string, any>): FormData => {
  const data = new FormData();
  Object.entries(obj).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach((element) => data.append(key, element));
    } else {
      data.append(key, val);
    }
  });
  return data;
};

/**
 * Public API functions
 */
export const api = {
  get: (url: string, options?: RequestOptions) =>
    handleRequest("GET", url, options),
  post: (url: string, options?: RequestOptions) =>
    handleRequest("POST", url, options),
  put: (url: string, options?: RequestOptions) =>
    handleRequest("PUT", url, options),
  delete: (url: string, options?: RequestOptions) =>
    handleRequest("DELETE", url, options),
  formDataPost: (
    url: string,
    { body, auth = false, headers = {} }: RequestOptions = {}
  ) =>
    handleRequest("POST", url, {
      body: createFormData(body),
      auth,
      headers: { "Content-Type": "multipart/form-data", ...headers },
    }),
};
