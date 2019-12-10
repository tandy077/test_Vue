<template>
    <div class="iframe_main">
        <div class="iframe_main_scroll">
            <div class="iframe_main_content">
                <keep-alive :include="$store.state.menu.included">
                    <router-view></router-view>
                </keep-alive>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
import Footer from "./Footer.vue";
import Crumbs from "../../app/Menu/Crumbs.vue";
export default {
    components: { Crumbs, Footer },
    name: "Main",
    data() {
        return {
            // includedComponents: /home|list/,
        };
    },
    created() {
        // this.$store.state.included;
    }
};
</script>

