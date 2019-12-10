<template>
    <!-- 二手房、租房，布局 -->
    <div class="iframe_layout">
        <Header></Header>
        <Container>
            <!-- 工具展示 -->
            <!-- Router 主体 -->
            <Main></Main>
        </Container>
        <!-- 登陆、注册 -->
        <login></login>
    </div>
</template>
<script>
import Header from "./Header.vue";
import Container from "./Container";
import Main from "./Main.vue";
import Login from "../../app/Login/Login";
export default {
    components: { Header, Container, Main, Login },
    name: "Layout",
    data() {
        return {};
    },
    methods: {},
    created() {}
};
</script>

