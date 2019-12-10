<template>
    <div>
        <el-dialog title="登录" width="600px" custom-class="tw-dialog-one" :visible.sync="$store.state.user.isLoginWindow" :modal-append-to-body="false" :close-on-click-modal="false">
            <div class="fn-clear login-main">

                <div class="fn-left login-main-left">
                    <div class="el-icon-close ml-5 mt-5 tc-fff fs-20 tw-link" @click="loginSlose"></div>
                    <div class="logo-white m-center"></div>
                </div>
                <div class="fn-right login-main-right pr-30">
                    <!-- 帐户登录 -->
                    <div v-if="$store.state.user.loginType === 1">
                        <p class="fs-20 fw-bold mt-30 mb-10">帐号密码登录</p>
                        <p class="mb-30">没有帐号？可以去<span class="tc-red tw-link" @click="setLoginType(3)">注册</span></p>
                        <el-form :model="formData">
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.userId" class="tw-input-one" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.password" class="tw-input-one" type="password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <div class="fn-left">
                                    <el-checkbox v-model="formData.automatic">自动登录</el-checkbox>
                                </div>
                                <div class="fn-right">
                                    <span class="tw-link" @click="setLoginType(4)">忘记密码</span>
                                </div>
                            </el-form-item>
                        </el-form>
                        <div class="mt-20 mb-20">
                            <el-button type="primary" class="tw-button-one">立即登录</el-button>
                        </div>
                        <p class="fs-14 tc-red ta-center mb-10 tw-link" @click="setLoginType(2)">手机短信登录</p>
                        <p class="fs-12 tc-999 ta-center">注册/登录即代表同意<span class="tw-link tc-999">《太屋用户使用中心》</span></p>
                    </div>
                    <div v-if="$store.state.user.loginType === 2">
                        <p class="fs-20 fw-bold mt-30 mb-10">短信登录</p>
                        <p class="mb-30">没有帐号？可以去<span class="tc-red tw-link" @click="setLoginType(3)">注册</span></p>
                        <el-form :model="formData">
                            <el-form-item class="tw-form-item">
                                <!-- <input v-input-filter> -->
                                <el-input v-model="formData.userId" v-input-filter:number class="tw-input-one" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.password" class="tw-input-one" placeholder="请输入验证码">
                                    <template slot="append">
                                        <div class="ta-center" style="width:120px;">
                                            <span class="tc-999 pr-10">|</span>
                                            <span class="fs-12 tc-666 tw-link">获取验证码</span>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <div class="fn-left">
                                    <el-checkbox v-model="formData.automatic">自动登录</el-checkbox>
                                </div>
                            </el-form-item>
                        </el-form>
                        <div class="mt-20 mb-20">
                            <el-button type="primary" class="tw-button-one">登录</el-button>
                        </div>
                        <p class="fs-14 tc-red ta-center mb-10 tw-link" @click="setLoginType(1)">帐号密码登录</p>
                        <p class="fs-12 tc-999 ta-center">注册/登录即代表同意<span class="tw-link tc-999">《太屋用户使用中心》</span></p>
                    </div>
                    <!-- 注册------------------------------>
                    <div v-if="$store.state.user.loginType === 3">
                        <p class="fs-20 fw-bold mt-30 mb-10">注册</p>
                        <p class="mb-30">已有帐号？去<span class="tc-red tw-link" @click="setLoginType(2)">登录</span></p>
                        <el-form :model="formData">
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.mobilePhone" v-input-filter:number maxlength="11" class="tw-input-one" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.verifyCode" v-input-filter:number maxlength="6" class="tw-input-one" placeholder="请输入验证码">
                                    <template slot="append">
                                        <div style="width:105px;">
                                            <span class="fs-14 pr-5 tc-333">|</span>
                                            <verify-code class="fs-14 tc-333 tw-link" :mobile-phone="formData.mobilePhone" :type="0"></verify-code>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model.trim="formData.passWord" v-if="isPassWord" v-input-filter:password type="password" placeholder="请输入密码(6-20位、数字)" maxlength="20" class="tw-input-one">
                                    <template slot="append">

                                        <div class="ta-center" style="width:50px;">
                                            <span @click="setIsPassWord()" class="el-icon-taiwu-eye fs-20 tw-link tc-ccc"></span>
                                        </div>
                                    </template>
                                </el-input>
                                <el-input v-model.trim="formData.passWord" v-if="!isPassWord" v-input-filter:password placeholder="请输入密码(6-20位、数字)" maxlength="20" class="tw-input-one">
                                    <template slot="append">
                                        <div class="ta-center" style="width:50px;">
                                            <span @click="setIsPassWord()" class="el-icon-taiwu-eye fs-20 tw-link tc-ccc"></span>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-checkbox v-model="formData.isq">我已阅读并同意<span class="tw-link">《太屋用户使用协议》</span></el-checkbox>
                            </el-form-item>
                        </el-form>
                        <div class="mt-20 mb-20">
                            <el-button type="primary" class="tw-button-one" :icon="isREDisabled?'el-icon-loading':''" @click="registerPost()">立即注册</el-button>
                        </div>
                    </div>
                    <!-- 密码找回 -->
                    <div v-if="$store.state.user.loginType === 4">
                        <p class="fs-20 fw-bold mt-30 mb-10">找回密码</p>
                        <p class="mb-30">请注册查收手机验证码</p>
                        <el-form :model="formData">
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.mobilePhone" v-input-filter:number maxlength="11" class="tw-input-one" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model="formData.verifyCode" v-input-filter:number maxlength="6" class="tw-input-one" placeholder="请输入验证码">
                                    <template slot="append">
                                        <div style="width:105px;">
                                            <span class="fs-14 pr-5 tc-333">|</span>
                                            <verify-code class="fs-14 tc-333 tw-link" :mobile-phone="formData.mobilePhone" :type="0"></verify-code>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item class="tw-form-item">
                                <el-input v-model.trim="formData.passWord" v-if="isPassWord" v-input-filter:password type="password" placeholder="请输入密码(6-20位、数字)" maxlength="20" class="tw-input-one">
                                    <template slot="append">
                                        <div class="ta-center" style="width:50px;">
                                            <span @click="setIsPassWord()" class="el-icon-taiwu-eye fs-20 tw-link tc-ccc"></span>
                                        </div>
                                    </template>
                                </el-input>
                                <el-input v-model.trim="formData.passWord" v-if="!isPassWord" v-input-filter:password placeholder="请输入密码(6-20位、数字)" maxlength="20" class="tw-input-one">
                                    <template slot="append">
                                        <div class="ta-center" style="width:50px;">
                                            <span @click="setIsPassWord()" class="el-icon-taiwu-eye fs-20 tw-link tc-ccc"></span>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div class="mt-20 mb-20">
                            <el-button type="primary" class="tw-button-one" @click="editPassWord()">修改密码</el-button>
                        </div>
                        <p class="fs-14 tc-red ta-center mb-10 tw-link" @click="setLoginType(2)">帐号密码登录</p>
                        <!-- 3S自动返回登录页面 -->
                        <el-dialog :visible.sync="isPassWordSuccess" :close-on-click-modal="false" center width="300px" custom-class="tw-dialog-one" :modal-append-to-body="false" append-to-body>
                            <div class="pt-30 pb-26">
                                <div class="login-success mb-10 m-center"></div>
                                <p class="ta-center pb-5 fs-18">密码修改成功</p>
                                <p class="ta-center pb-16 fs-14 tc-333"><span class="mr-5">3S</span>自定返回登录页面</p>
                                <div class="ta-center">
                                    <el-button @click="isPassWordSuccess = false" type="primary" round>我知道了</el-button>
                                </div>
                            </div>
                        </el-dialog>
                    </div>
                </div>
                <!-- 手机扫码登录 -->
                <div class="login-main-QRCode" :class="QRMode?'login-main-QRCode-open':'login-main-QRCode-close'">
                    <div class="fn-clear">
                        <div class="fn-right">
                            <!-- 切换登录模式 -->
                            <div @click="openRQLogin(false)" v-if="QRMode" class="login-main-userId-button mt-5 mr-5 tw-link"></div>
                            <div @click="openRQLogin(true)" v-if="!QRMode" class="login-main-QRCode-button mt-5 mr-5 tw-link"></div>
                        </div>
                    </div>
                    <p class="fs-20 fw-bold text-center" style="padding:20px 0;">手机扫码登录</p>
                    <div class="bm-center pt-20 pb-30 login-main-QRCode-image">
                        <img src="../../../static/images/login/QRcode.png">
                    </div>
                    <p class="fs-14 tc-999 text-center">太屋APP扫一扫，登录安全又快速</p>
                    <p class="fs-14 tc-999 text-center">太屋APP-首页-右上角</p>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
/**
 * 手机发送验证码功能
 */
import VerifyCode from "./VerifyCode"
export default {
    components: { VerifyCode },
    name: "Login",
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            /**
             * 提交表单
             */
            formData: {
                mobilePhone: "", //手机号
                verifyCode: "", // 验证码
                passWord: "", // 密码
                userId: "",
                password: "",
                automatic: ""
            },
            /**
             * 登录，1：帐户登录，2：手机快捷登录；3：注册：4：找回密码
             */
            loginType: 1,
            /**
             * 二维码登录：true：开启：false：关闭
             */
            QRMode: false,
            /**
             * password是否显示密码
             */
            isPassWord: false,
            /**
             * 注册重复点击
             */
            isREDisabled: false,
            /**
             * 修改密码成功
             */
            isPassWordSuccess: false
        };
    },
    methods: {
        // 登录，注册，密码找回切换
        setLoginType: function (type) {
            this.$store.commit("SET_LOGINTYPE", type)
        },
        // 开启二维码登录
        openRQLogin: function (type) {
            this.QRMode = type;
        },
        // 注册
        registerPost: function () {
            if (this.isREDisabled) {
                return;
            }
            var param = JSON.parse(JSON.stringify(this.formData));
            this.isREDisabled = true;
            this.$http.post("/outnetfront/api/registerAndLogin/registerTw", param).then(res => {
                console.log(res, 'ggggggggggg');
            }).catch(err => {

            })
        },
        /**
         * 是否显示密码
         */
        setIsPassWord() {
            this.isPassWord = !this.isPassWord;
        },
        /**
         * 密码过滤
         */
        changeValue(val) {

            // this.$reg.password(val);
        },
        /**
         * 修改密码
         */
        editPassWord() {
            this.isPassWordSuccess = true;
        },
        /**
         * 关闭
         */
        loginSlose() {
            this.$store.commit("SET_LOGINWINDOWS", false)
        },
    },
    created() {
        // this.$http.post("/outnetfront/api/common/getJwtoken").then(res => { });
        // var param = {
        //     mobilePhone: "13611656006",
        //     operationFlag: 1
        // };
        // this.$http.post("/outnetfront/api/common/sendVerifyCode", param).then(res => {
        //     console.log(res, "123123");
        // });
        // this.$store.commit("SET_LOGINWINDOWS", true);
    }
};
</script>
<style scoped>
.login-main {
    position: relative;
    height: 430px;
    background-image: url("../../../static/images/login/login-bitmap.png");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: auto 100%;
}
.login-main .login-main-left {
    width: 240px;
    height: 405px;
}
.login-main .login-main-right {
    width: 300px;
}

.login-main .logo-white {
    height: 100%;
    margin: 0 auto;
}

.login-main .login-main-QRCode {
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

.login-main .login-main-QRCode .login-main-QRCode-image {
    width: 174px;
}
.login-main .login-main-QRCode .login-main-QRCode-image img {
    width: 100%;
}
.login-main .login-main-QRCode-open {
    width: 360px;
    height: 100%;
}

.login-main .login-main-QRCode-close {
    width: 34px;
    height: 34px;
    overflow: hidden;
}

.login-main-QRCode-button,
.login-main-QRcode-cover,
.login-main-userId-button {
    right: 0;
    top: 0;
    width: 34px;
    height: 34px;
    background-repeat: no-repeat;
    background-size: 100%;
}

.login-main-QRCode-button {
    background-image: url("../../../static/images/login/login-QR.png");
}
.login-main-userId-button {
    background-image: url("../../../static/images/login/login-userId.png");
}
</style>