import Vue from "vue";
/**
 * 全局公用方法
 * 正则表达式、正则校验、时间格式化
 */

// 【reg】 正式表达式
import reg from "./reg.js";
Vue.prototype.$reg = reg;

// 【isReg】 正则校验
import isReg from "./isReg.js";
Vue.prototype.$isReg = isReg;

// 【moment】 时间格式化
import moment from "moment";
Vue.prototype.$moment = moment;

// 【common】 公用方法
import common from "./common.js";
Vue.prototype.$common = common;

// 【input】自定义指令
import "./directive.js";
