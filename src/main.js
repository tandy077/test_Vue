// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue';
import App from './App';
/**
 *【兼容ES6】
 */
import "babel-polyfill";
/**
 * 【公用方法：正则表达、正则校验、时间格式化】
 */
import "./common-js";

/**
 * 【touer】路由
 */
import router from "./router";
/**
 * 【http】请求
 */
import "./axios";
/**
 * 【elementUI】
 */
import "./element-ui";
/**
 * 【store】状态机
 */
import store from "./store";
/**
 * 【高德地图】
 */
import "./VueMap";

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
