<template>
    <div class="iframe_header box-shadow-bottom">
        <div class="wrap fn-clear">
            <div class="fn-right">
                <Menu></Menu>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from "../../app/Menu/Menu.vue";
export default {
    components: { Menu },
    name: "Header",
    data() {
        return {};
    }
};
</script>

