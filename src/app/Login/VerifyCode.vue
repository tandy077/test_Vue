<template>
    <!-- 获取验证码 -->
    <span>
        <span v-if="countDown_ss === 0" @click="getVerifyCode()">获取验证码</span>
        <span v-if="countDown_ss !== 0" class="fs-13">重新发送{{countDown_ss}}S</span>
    </span>
</template>
<script>
export default {
    props: {
        mobilePhone: {
            type: String,
            default: ""
        },
        type: {
            type: Number,
            default: ""
        }
    },
    name: "VerifyCode",
    data() {
        return {
            countDown: null,
            countDown_ss: 0
        }
    },
    methods: {
        getVerifyCode() {
            var param = {
                mobilePhone: this.mobilePhone,
                operationFlag: this.type
            }
            /**
             * 倒时间
             */
            this.countDown_ss = 50;
            this.countDown = this.$common.countDown(50, ss => {
                this.countDown_ss = ss;
            });
            this.$http.post("/outnetfront/api/common/sendVerifyCode", param).then(res => {
                clearInterval(this.countDown);
            })
        }
    },
    created() {

    }
}
</script>