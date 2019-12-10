import actions from "./actions.js";
import mutations from "./mutations.js";
export default {
    state: {
        /**
         * 用户ID
         */
        userId: "",
        /**
         * 用户密码
         */
        password: "",
        /**
         * 用户电话
         */
        phone: "",
        /**
         * 用户类型
         */
        userType: 0,
        /**
         * 用户token
         */
        userToken: "",
        /**
         * 游客token
         */
        TouristToken: "",
        /**
         * 登陆弹窗
         */
        isLoginWindow: false,
        /**
         * 登录 1：帐户登录，2：手机登录：3：注册；4：密码找回
         */
        loginType: 1
    },
    actions,
    mutations
}
