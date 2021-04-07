/**
 * [Default Description]
 * @author Mortal
 * @date 2021/4/7
 * */
import axios from "axios";

/**
 * axios实例
 * @type {AxiosInstance}
 */
const instance = axios.create({
  // baseURL:"",  //接口域名
  timeout: 5000 //超时时间
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  conf => {
    return conf;
  },
  error => {
    return error;
  }
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// /**
//  *
//  * @param method 请求类型,支持get,post,put,delete
//  * @param url 请求的url
//  * @param data 请求的参数
//  * @returns {Promise<never>|Promise<AxiosResponse<any>>} 返回Promise对象
//  */
// export default (method, url, data = null) => {
//   method = method.toLowerCase();
//   switch (method) {
//     case "get":
//       return instance.get(url, { params: data });
//     case "post":
//       return instance.post(url, data);
//     case "delete":
//       return instance.delete(url, { params: data });
//     case "put":
//       return instance.patch(url, data);
//     default:
//       console.error("未知的请求类型：" + method);
//       return Promise.reject("未知的请求类型：" + method);
//   }
// };

/**
 * 封装axios
 */
export default {
  /**
   * Get请求
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  get: (url, data = null) => {
    return instance.get(url, { params: data });
  },
  /**
   * Post请求
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  post: (url, data = null) => {
    return instance.post(url, data);
  },
  /**
   * Put请求
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  put: (url, data = null) => {
    return instance.put(url, data);
  },
  /**
   * Delete请求
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  delete: (url, data = null) => {
    return instance.delete(url, { params: data });
  }
};
