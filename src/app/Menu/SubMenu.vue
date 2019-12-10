<template>
    <div class="menu-submenu">
        <div class="menu-submenu-item" v-for="item in data" :key="item.key">
            <router-link class="tw-link tc-brand fs-14" :target="item.target" :to="{path:item.path,params:{id:123}}" replace>{{item.label}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Submenu",
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    },
    created() {
        console.log(this.data, "ggggggggg");
    }
};
</script>
<style scoped>
.menu-submenu .menu-submenu-item {
    display: inline-block;
    padding: 0 20px;
}

.menu-submenu .menu-submenu-item .router-link-exact-active {
    color: #e41717;
}
</style>

