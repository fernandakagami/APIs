<script>
import Header from "../components/Owner/HeaderPage.vue"
import Footer from "../components/Owner/FooterPage.vue";

export default {
    components: {
        Header,
        Footer
    },
}
</script>

<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>