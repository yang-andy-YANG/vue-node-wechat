<template>
    <section class="home">
        <p>您好：{{userInfo.name}}</p>
        <p>首页，可分享</p>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'home',
        components: {
        },

        data() {
            return {
            }
        },

        computed: {
            ...mapState(['userInfo'])
        },

        mounted() {
        },

        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '~@/style/link';
    @import '~@/style/mixin';

    .home {
    }
</style>
