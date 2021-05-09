import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import omit from 'lodash/omit';
// import { store } from '@stores';
// import { commonActions } from '@stores/slices/common';

const isDev = process.env.NODE_ENV === 'development';

// function loader() {
//   let requestCount = 0;

//   return function (isLoading: boolean) {
//     if (isLoading) {
//       requestCount++;
//     } else if (requestCount > 0) {
//       requestCount--;
//     }

//     store.dispatch(commonActions.setLoading(!!requestCount));
//   };
// }

// const setLoading = loader();

const instance = axios.create({
  timeout: 20000,
  baseURL: process.env.NEXT_PUBLIC_EGSWING_API_BASE_URL,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();

    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          param.forEach((p, i) => {
            searchParams.append(`${key}[${i}]`, p);
          });
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  },
});

instance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    // if (requestConfig.params?.showLoading !== false) {
    //   setLoading(true);
    // }

    return requestConfig;
  },
  error => {
    // setLoading(false);
    if (isDev) {
      console.error('API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.config.params?.showLoading !== false) {
    //   setLoading(false);
    // }

    // Try to find the access token from response
    if (response.data?.token?.accessToken) {
      instance.defaults.headers = {
        ...instance.defaults.headers,
        Authorization: `Bearer ${response.data.token.accessToken}`,
      };
    }

    return response;
  },
  error => {
    // setLoading(false);
    if (isDev) {
      console.error('API Response Error:', error);
    }
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export default instance;
