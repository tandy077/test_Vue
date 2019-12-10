import common from "@/common-js/common";
export default {
    /**
     * 设置token
     * @param {} state 
     * @param {*} data 
     */
    // 设置游客token
    SET_TOURIST_DATA(state, data) {
        if (!common.isEmpty(data)) {
            return
        }
        state.TouristToken = data;
    },
    // 设置用户信息
    SET_USER_DATA(state, data) {
        state.userId = data.userId;
        state.password = data.password;
        state.phone = data.userId;
        state.userType = 1; // 为用户
        state.userToken = data.userToken;
        // 设置用户本地缓存
        localStorage.setItem("TW_USER_LOCAL", state);
    },
    // 设置数据
    SET_DATA(state, data) {
        state.data = data;
    },
    // 设置本地缓存
    SET_LOCAL_DATA(state, data) {
        state.data = data;
    },
    // 登陆窗 true；开启：false：关闭
    SET_LOGINWINDOWS(state, data) {
        if (!common.isBoo(data)) {
            return;
        }
        state.isLoginWindow = data;
    },
    /**
     * 登陆密式
     */
    SET_LOGINTYPE(state, data) {
        if (!common.isNum(data) || data === 0 || !state.isLoginWindow) {
            return;
        }
        state.loginType = data;
    },

}
