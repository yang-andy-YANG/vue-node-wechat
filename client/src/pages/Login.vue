<template>
    <section class="login">
        <h1>登录：</h1>
        <input type="text" name="userName" v-model.trim="userName" />
        <input type="password" name="password" v-model.trim="password" />
        <a class="link link-block" @click.prevent="login">登录</a>
        <p v-if="errorMsg">{{errorMsg}}</p>
    </section>
</template>

<script>

    import {mapState,mapActions} from 'vuex'

    export default {
        name: 'login',
        data() {
            return {
                userName:'',
                password:'',
                errorMsg: ''
            }
        },

        computed: mapState(['userInfo']),

        mounted() {
        },

        methods: {
            ...mapActions(['getUserInfo']),
            login(){                
                this.getUserInfo({
                    params: {
                        userName: this.userName,
                        password: this.password
                    }
                }).then(()=>{
                    if(this.userInfo.token) {
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$router.push({
                            path: redirect
                        })
                    }
                    else {
                        this.errorMsg = '登录失败'
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '~@/style/link';
    @import '~@/style/mixin';
    @import '~@/style/flex.less';

    .login {
        .link.link-block {
            color: #000;
        }
    }
</style>
