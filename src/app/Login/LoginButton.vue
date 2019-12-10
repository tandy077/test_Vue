<template>
    <!-- 登陆、注册、修改密码 -->
    <div>
        <div>
            <span class="tw-link fs-14" @click="openLogin()">登录</span>
            <span class="fs-14">/</span>
            <span class="tw-link fs-14" @click="openRegister()">注册</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "LoginButton",
    data: function () {
        return {};
    },
    methods: {
        /**
         * 打开登录窗口
         */
        openLogin() {
            this.$store.commit("SET_LOGINWINDOWS", true);
            this.$store.commit("SET_LOGINTYPE", 2);
        },
        /**
         * 打开登录并注册
         */
        openRegister() {
            this.$store.commit("SET_LOGINWINDOWS", true);
            this.$store.commit("SET_LOGINTYPE", 3);
        },
    }
};
</script>