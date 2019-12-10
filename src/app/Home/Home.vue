<template>
    <div>
        <span class="el-icon-taiwu-baobiao">首页</span>
        <el-button type="primary" icon="el-icon-taiwu-baobiao" @click="$router.replace('/login')">登陆</el-button>
        <el-button @click="$router.replace('/logon')">注册</el-button>
        <el-button @click="$router.replace('/')">业务页面</el-button>
        <div class="menu-submenu-item" v-for="item in doneMenu" :key="item.key">
            <router-link class="tw-link tc-brand fs-14" target="_blank" :to="{path:item.path,params:{id:123}}" replace>{{item.label}}</router-link>
        </div>
    </div>
</template>
<script>
import Menu from "../Menu/Menu.vue";
import { mapGetters } from "vuex";
export default {
    name: "Home",
    components: { Menu },
    computed: {
        ...mapGetters(["doneMenu"])
    },
    data: function () {
        return {};
    },
    methods: {
        isRouter() {
            this.$router.to("/isRouter");
        }
    },
    created: function () { }
};
</script>