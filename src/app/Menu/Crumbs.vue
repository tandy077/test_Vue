<template>
    <el-tabs size="mini" v-model="$store.state.menu.menuActive" type="card" @edit="handleTabsEdit" @tab-click="handleClick">
        <el-tab-pane :key="item.key" :closable="!item.notClose" v-for="item in $store.state.menu.menuTab" :label="item.label" :name="item.path">
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name: "Crumbs",
    data() {
        return {};
    },
    methods: {
        handleTabsEdit(item) {
            this.$store.commit("SET_MENU_REMOVE", item);
        },
        handleClick(tab) {
            this.$router.replace(tab.name);
        }
    }
};
</script>

