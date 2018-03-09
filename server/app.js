var express = require('express');
var app = express();
var crypto = require('crypto');
const path = require('path')
var bodyParser = require('body-parser');
var request = require('request')

var WechatAPI = require('wechat-api');
 


var wechat = require('wechat');
var config = {
  token: 'HelloMachSystems110108017151363',
  appid: 'wx15a5766f2ca5d2ec',
  encodingAESKey: '2MwsIU8scIzANNKOux6Sd61E6C2VymIkxYKOd8FRGrL',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

const wechat_jssdk = require('wechat-jssdk');
const wechatConfig = {
  //set your oauth redirect url, defaults to localhost
  "wechatRedirectUrl": "http://yourdomain.com/wechat/oauth-callback",
  //"wechatToken": "wechat_token", //not necessary required
  "appId": "wx15a5766f2ca5d2ec",
  "appSecret": "8bf0d7c6607349b1e386715b0a232382",
}
const wx = new wechat_jssdk(wechatConfig);

var api = new WechatAPI(wechatConfig.appId, wechatConfig.appSecret);

var token,ticket


app.use(express.static(path.join(__dirname, '../client/dist')))

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


app.get('/api/getUser', function (req, res) {
  var userInfo = {
    id: 'id',
    name: req.query.userName,
    token: '123321'
  }
  res.send(JSON.stringify(userInfo));
});

app.use(express.query());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//公众号功能，签名检查
app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
  console.log(message)
}));

app.post('/api/getJsSdk', function(req, res) {

  // function access_token() {
  // var token_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + wechatConfig.appId + '&secret=' + wechatConfig.appSecret
  // var self = this;
  // request(token_url, function(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //      token = JSON.parse(body).access_token;
  //      console.log(1)
  //      console.log(body)
  //      get_jsapi_ticket() 
  //   }
  // })
  var param = {
    debug: true,
    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'],
    url: req.body.url
   };
   api.getJsConfig(param, function(e,result){
    console.log(1)
     console.log(e)
     console.log(2)
     console.log(result)
     res.json(result);
   });
})

// function get_jsapi_ticket() {
//   var jsapi_ticket_url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi';
//   request(jsapi_ticket_url, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       ticket = JSON.parse(body).ticket;
//       console.log(2)
//       console.log(ticket)
//     }
//   })
// }
//   // console.log(req.body)
//   var access_token = access_token()
//   // console.log(access_token)
//   // var ticket = get_jsapi_ticket(get_jsapi_ticket)
//   // console.log(ticket)
//   wx.jssdk.getSignature(req.body.url).then(function(signatureDate) {
//     signatureDate.appid = wechatConfig.appId
//     console.log(signatureDate)
//     res.json(signatureDate);
//   });
// });

app.get('/api/oauth', function (req, res) {
  //得到code，获取用户信息  
  wx.oauth.getUserInfo(req.query.code)
          .then(function(userProfile) {
            console.log(userProfile)
            res.render("demo", {
              wechatInfo: userProfile
            });
          });
});




var server = app.listen( process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
