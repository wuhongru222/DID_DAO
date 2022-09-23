import axios from "axios";

import Vue from "vue";

import $router from "../router";
import cookie from "js-cookie";
export const domain = "192.168.2.110:5555/";

//export const baseUrl = `https://${domain}/Upload/`;

const request = axios.create({
  baseURL: `http://${domain}/`,
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = "Bearer " + cookie.get("token") || "";
    if (cookie.get("token")) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const status = error.response?.status; // 响应状态码
    if (status === 400) {
      Vue.$toast.clear();
      Vue.$toast.error("客户端请求异常");
    } else if (status === 429) {
      //console.log(status)
      Vue.$toast.clear();
    } else if (status >= 500) {
      Vue.$toast.clear();
      Vue.$toast.error(status + " 服务器异常，请退出重新登录！");
      $router.replace({
        name: "error",
      });
    }
    return Promise.reject(error);
  }
);

export default request;
