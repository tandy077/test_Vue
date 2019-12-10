<template>
    <div class="iframe_header box-shadow-bottom">
        <div class="wrap disabled-selection fn-clear" style="line-height: 60px;">
            <div class="fn-left">
                <div class="logo" style="height:60px"></div>
            </div>
            <div class="fn-left" style="padding-left:20px;">
                <Location></Location>
            </div>
            <div class="fn-right fn-clear" style="line-height: 60px;">
                <div class="fn-left">
                    <Menu></Menu>
                </div>
                <div class="fn-left" style="padding-left:30px;">
                    <login-button></login-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from "@/app/Menu/Menu.vue";
import LoginButton from "@/app/Login/LoginButton.vue";
import Location from "@/app/Location/Location.vue";
export default {
    components: { Menu, LoginButton, Location },
    name: "Header",
    data() {
        return {
            sss: ""
        };
    }
};
</script>

