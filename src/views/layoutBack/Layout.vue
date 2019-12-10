<template>
    <div class="iframe_layout">
        <Header></Header>
        <Container>
            <Main></Main>
        </Container>
    </div>
</template>
<script>
import Header from "./Header.vue";
import Container from "./Container";
import Main from "./Main.vue";
export default {
    components: { Header, Container, Main, Aside },
    name: "Layout",
    data() {
        return {};
    },
    methods: {},
    created() {}
};
</script>

