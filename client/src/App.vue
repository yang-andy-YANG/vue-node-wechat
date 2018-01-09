<template>
    <div id="app">
        <vo-header></vo-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <vo-footer></vo-footer>
    </div>
</template>

<script>
    import voHeader from '@/components/Header'
    import voFooter from '@/components/Footer'
    import 'nprogress/nprogress.css'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            voHeader,
            voFooter
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '~@/style/common';

    #app {
    }
    body #nprogress .spinner {
        top: 50%;
        right: 50%;
    }
</style>
