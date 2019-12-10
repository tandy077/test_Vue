<template>
    <div>
        <Submenu :data="doneMenu"></Submenu>
    </div>
</template>
<script>
import Submenu from "./Submenu";
import { mapGetters } from "vuex";
export default {
    name: "Menu",
    components: { Submenu },
    data() {
        return {
            isCollapse: false
        };
    },
    computed: {
        ...mapGetters(["doneMenu"])
    }
};
</script>

