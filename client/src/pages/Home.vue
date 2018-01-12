<template>
    <section class="home">
        <p>您好：{{userInfo.name}}</p>
        <p>首页，可分享</p>
        <p @click.prevent="oauth">授权</p>
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import wx from 'weixin-js-sdk'

    import { getJsSdk,getOauth } from '@/service/getData'

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
            this.initWX()
        },

        methods: {
            async initWX(){
                var wxConfig = await getJsSdk({
                    url: window.location.href.split('#')[0]
                })
                console.log(1)
                console.log(wxConfig)
                wx.config({
                    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: wxConfig.appId, // 必填，公众号的唯一标识
                    timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
                    nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
                    signature: wxConfig.signature, // 必填，签名，见附录1
                    jsApiList: wxConfig.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                })
                wx.ready(function () {

			console.log(wx)
                    wx.checkJsApi({
                        jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                        console.log(res)
                        }
                    });
                    wx.onMenuShareTimeline({
                        title: 'hahahaTimeline',
                        desc: 'timelineDesc',
                        link: window.location.href,
                        imgUrl: ''
                    });
                    
                    wx.onMenuShareAppMessage({
                        title: 'hahahaApp',
                        desc: 'appDesc',
                        link: window.location.href,
                        imgUrl: ''
                    });
                })
                    
                wx.error(function (res) {
                    console.log(res)
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                })
            },
            oauth() {
                getOauth()
            }
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
