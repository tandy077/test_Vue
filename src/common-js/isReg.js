import reg from "./reg.js";
/**
 * 正则校验方法
 */
export default {
    /**
     * @param {string} val // 手机号 
     */
    isPhone: function (val) {
        return reg.phone.test(val);
    },
    /**
     * @param {string} val // 电话
     */
    isTel: function (val) {
        return reg.phone.test(val);
    }
}
