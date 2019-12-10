import Vue from "Vue";
export default {
    // 登陆 
    POST_LOGIN(state, id, password, code) {
        let param = {
            userId: id,
            password: password,
            code: code,
            token: "123123123"
        }
        state.common("SET_USER_DATA", param);
    },
    // 游客获取TOKEN
    POST_TONWQADF_TOKEN(state, phone) {
        let param = {
            mobilePhone: phone
        }
        Vue.$http.post("/api/tokenIssue/getJwtoken", param).then(res => {
            if (res.success && res.businessCode === "1") {
                // 获取成功
                state.state
            }
        });
    }
}
