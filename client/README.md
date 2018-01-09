# showroom

> Build up a platform with practical innovation that customers could refer to, which is related to their industry / LOB, to drive the innovations of their own business with SAP together.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Update History (dev: Andy)

...

v01.00.00

- Offline version

## Update History (dev: Webster)

2018.01.08

- 现在，Solution 的 Visited 数值从数据视图 `view_app_visit` 获取（action.js: getAllSolutions: appVisitList）
- 现在，每次进入或刷新 Solution 页面都会增加访问计数（Solution.vue: Saved to app_community_visit）
- [NEW] 设置浏览器标签标题
- 更合适的默认头像（avatar.jpg）

2018.01.05

- [NEW] Pages/404.vue
- 添加 404 页面的 Router 逻辑
- [FIX] 当且仅当处于 Home 页面时，点击头部轮播图区域执行跳转
- Footer.vue: javascript:void(0)

2018.01.04

- 现在，点击 Home 的轮播图区域（标题和说明文字）可以跳转至相应的页面

2018.01.03

- Contact Us 按钮链接至邮件
- Footer 区域内部分链接完善
- 现在，若用户没有最近浏览记录，则首页不显示 Recently Viewed
- [NEW] 分享到 Twitter 和 facebook 的功能 

2018.01.02

- Home 中的 loadRecommendedSol() 暂由 loadRecommendedForU() 接管
- 针对 Home 中的 loadRecommendedForU() 生成的对象数组进行去重 

2017.12.27

- 完成 Project 页面的 AJAX 绑定，其中由于通过 `view_industry_app_*` 表只能获取重复的分类，因此在前端进行了去重：`Project.vue: loadCategory()`
- 完成 Home 页面的 AJAX 绑定，其中 Header 内的轮播项数据是从全部 App 中随机生成两项，该逻辑作为临时方案

2017.12.26

- [FIX] 修复当用户选完行业偏好后跳转 Home 页面时又跳回 Interest 页面的问题 
- 移除 Router Hook Function

2017.12.25

- [FIX] 修复由 Home 跳转至 Interest 时无法显示行业列表的问题
- [FIX] 修复由 Interest 跳至 Home 时 Recently Viewed 轮播未初始化的问题

2017.12.22

- Interest.vue 不再从 localStorage 取出 interestList，而仅由 AJAX 获取并置入 vuex 状态：`userInterestList`；点击 `Interest.vue` 的 Next 
按钮将保存用户所选 industry 至 `user_industry` 表
- Home.vue 目前从状态读取 `userInterestList` 而非 localStorage

2017.12.21

- 暂时基本完成 Project.vue 中 Solutions by Industry 部分的 AJAX 数据绑定，因为其它部分和图片的绑定需等待数据库的完善

2017.12.19

- README.md 中的更新历史以日期区分，而非版本号
- [NEW] utils.js: `getLang`
- [NEW] constants.js: `DATA_URI`
- 完成 Interest.vue 的 AJAX 数据绑定，及 `.tagContainer` 内的样式调整以解决放入大量标签而导致的显示错误
- [NEW] 基础的 AJAX 加载动画和过渡

<strike>0.2.5

- 完成 project 页面的模板化
- [NEW] common.less: `.fa-icon`

0.1.7

- 依据 2017.11.28 @Andy 邮件中的要求，初步完成 project / category / solution 三个页面 main 标签内的编写
- [NEW] 引入 Vue-Awesome，并以按需方式加载图标
- [NEW] flex.less
- [NEW] common.less: `.sap-btn` & `.sap-dividing-line`
- images 文件夹内的图片来自于共享文件夹内的 Showroom_Photo 文件夹，这些图片应仅供本地使用，因部分与设计稿不符、部分文件过大未压缩</strike>

## Update History (dev: Kerry)

2018.01.05

- [NEW] CommunityList: 针对主题的回复
