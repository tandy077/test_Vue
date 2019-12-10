import Vue from "vue";
import axios from "axios";
import store from "../store";

/**
 * axios 基础设置
 */
axios.defaults.baseURL = "http://devnginx.twrsp.com"
axios.defaults.timeout = 5000; // 超时时间


var token = "";
/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
    // token 获取
    config.headers.flag = 3;
    // config.companyflag = 2;
    if (token) {
        config.headers.token = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

/**
 * 响应拦截
 */
axios.interceptors.response.use(response => {
    var res = JSON.parse(JSON.stringify(response.data));
    if (res.success && res.businessCode) {
        return res;
    } else {
        console.log(res.msg);
    }

}, error => {
    return Promise.reject(error);
});

Vue.prototype.$http = axios;
