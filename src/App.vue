<template>
    <Header :fixed="fixed"/>

    <Loader v-if="loader" />

    <router-view v-else/>

    <Footer />
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"

export default {
    name: 'App',
    data: () => ({
        loader: true,
        fixed: false
    }),
    mounted() {
        this.loader = false

        window.addEventListener('scroll', () => this.fixed = window.scrollY > 0)
    },
    components: {Loader, Header, Footer}
}
</script>

<style lang="scss">
@import "scss/index";
</style>
