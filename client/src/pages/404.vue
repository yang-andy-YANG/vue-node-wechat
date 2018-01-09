<template>
    <div class="main-404">
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
        components: {},

        mounted() {
            document.body.style.overflow = 'hidden'
        },

        beforeRouteLeave: (to, from, next) => {
            document.body.style.overflow = 'auto'
            next()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .main-404 {
        background-color: #000;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        color: #fff;
        padding-top: 150px;
        margin-bottom: 10vh;
        text-align: center;
        h1 {
            font-size: 12em;
        }
        h2 {
            font-size: 2.5em;
        }
    }
</style>
