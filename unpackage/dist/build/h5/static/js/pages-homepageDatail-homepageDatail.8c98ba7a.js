(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-homepageDatail-homepageDatail"],{"0d98":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5e03")),o=a(n("6794")),l={components:{MyDrawer:i.default,HomepageDatail:o.default},data:function(){return{footesr:uni.getStorageSync("footer"),name:uni.getStorageSync("name"),centerDialogVisible:!1,isCollapse:!1,disable:!0,drawerVisible:!1,drawerVisibletwo:!1,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",drawerSize:"60%",screenWidth:0,option1:!0,option2:!1,index:"1",classp:!0,isblock:!1,baColr:"#F2F2F2",hColr:"#FFFFFF",footbg:"#FAFAFA",topColor:"#FFFFFF",drawbg:"#FFFFFF",nodeid:"",todatail:{},maindisable:!1,username:"",width:"30%",tanccontent:"<p>这是一段包含HTML标签的内容</p>",type:0,ids:0,radio:uni.getLocale()}},mounted:function(t){uni.setNavigationBarTitle({title:uni.getStorageSync("name")}),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},onShow:function(){this.login()},onLoad:function(t){this.ids=t.id},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleClose:function(t){this.drawerVisible=t},handleLangChange:function(t){uni.setLocale(t),this.$i18n.locale=t,this.$router.go(0)},handleshoppings:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},hanldeChangepass:function(){uni.navigateTo({url:"/pages/login-password/login-password"})},hanldeChangeEwalletspass:function(){uni.navigateTo({url:"/pages/wallet-password/wallet-password"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleCustomButton:function(){this.$print(this.$refs.print)},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/product-purchase/product-detail"})},newindex:function(t){this.index=t},login:function(){var t=this;this.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(e){e.status;var n=e.result,a=n.avatar,i=n.nickname;n.adstatus;t.$nextTick((function(){t.username=i,t.circleUrl=a}))})).catch((function(t){console.log(t)}))},handlereg:function(t){this.index=t},getdatail:function(t){t.id;var e=t.index;this.todatail=t,this.index=e},getIndex:function(t){var e=t.index,n=t.nodeid;this.index=e,this.nodeid=n},logOff:function(){uni.clearStorageSync(),uni.navigateTo({url:"/pages/userLogin/userLogin"})},changeStatus:function(){this.isCollapse=!this.isCollapse,this.disable=!this.disable,this.classp=!this.classp},showDrawer:function(){this.drawerVisible=!this.drawerVisible},toggleFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},showDrawerleft:function(){this.drawerVisibletwo=!this.drawerVisibletwo},handleDrawerClose:function(){this.isblock=!1},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%"))},handleOptionChange:function(t){"option1"===t?this.option2=!this.option1:"option2"===t&&(this.option1=!this.option2),1==this.option1?(this.baColr="#F2F2F2",this.hColr="#fff",this.footbg="#FAFAFA",this.topColor="#fff",this.drawbg="#fff"):(this.baColr="#1F2431",this.hColr="#7A6FBE",this.footbg="#323A4E",this.topColor="#7A6FBE",this.drawbg="#2A3142")}}};e.default=l},2651:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={myDrawer:n("5e03").default,homepageDatail:n("6794").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("el-container",[n("el-dialog",{staticStyle:{height:"100%"},attrs:{title:"FELEMENT WHATSAPP & TELEGRAM 群主",visible:t.centerDialogVisible,width:t.width},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.centerDialogVisible=e}}},[n("div",{ref:"print",attrs:{id:"print"},domProps:{innerHTML:t._s(t.tanccontent)}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("i",{staticClass:"el-icon-printer",staticStyle:{"margin-right":"35rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCustomButton.apply(void 0,arguments)}}}),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeads.apply(void 0,arguments)}}},[t._v("关闭弹窗不再显示")])],1)]),n("el-menu",{staticClass:"el-menu-vertical-demo asos",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("div",{staticClass:"userLo"},[t._v(t._s(t.name))]),n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{attrs:{index:"4-0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppings.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{attrs:{index:"4-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.productshopping")))]),n("el-menu-item",{attrs:{index:"4-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1),n("el-container",{staticClass:"conent"},[n("el-header",{style:{backgroundColor:t.hColr}},[n("div",{staticClass:"headerTop",style:{backgroundColor:t.topColor}},[n("div",{class:{colorb:t.isblock},staticStyle:{display:"flex"}},[n("i",{staticClass:"el-icon-s-grid changeStatu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}}),n("i",{staticClass:"el-icon-s-grid changeStatus1",staticStyle:{"margin-left":"36rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer.apply(void 0,arguments)}}})]),n("div",{staticStyle:{display:"flex","margin-top":"10rpx"}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[n("el-avatar",{staticClass:" el-icon--right",staticStyle:{"margin-top":"5rpx"},attrs:{src:t.circleUrl}})],1),n("el-dropdown-menu",{staticClass:"atvatr",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticStyle:{"border-bottom":"2rpx solid #DCDFE6"}},[t._v(t._s(t.username))]),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangepass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newloginPassword")))])],1)],1),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangeEwalletspass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newEwallectPassword")))])],1)],1),n("el-row",[n("el-dropdown-item",{staticStyle:{"border-top":"2rpx solid #DCDFE6"}},[n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOff.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-switch-button"}),n("el-link",{attrs:{href:"#",type:"danger"}},[t._v(t._s(t.$t("menu.logoff")))])],1)])],1)],1)],1),n("el-row",[n("i",{staticClass:"el-icon-setting setting",staticStyle:{"margin-right":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawerleft.apply(void 0,arguments)}}})])],1)])]),n("el-drawer",{staticClass:"drawerright",attrs:{visible:t.drawerVisibletwo,title:"Settings",size:t.drawerSize},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.drawerVisibletwo=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDrawerClose.apply(void 0,arguments)}}},[n("p",{staticStyle:{"text-align":"center"}},[n("b",[t._v("Choose Layouts")])]),n("el-radio-group",{on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLangChange.apply(void 0,arguments)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"en"}},[n("b",[t._v(t._s(t.$t("locale.en")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hans"}},[n("b",[t._v(t._s(t.$t("locale.zhHans")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hant"}},[n("b",[t._v(t._s(t.$t("locale.zhHant")))])])],1)])],1),n("div",{staticClass:"ableta"},[n("my-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerVisible,expression:"drawerVisible"}],on:{viewIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)},handleClose:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}})],1),n("el-main",{style:{backgroundColor:t.baColr}},[n("homepage-datail",{attrs:{ids:t.ids}})],1),n("el-footer",{style:{backgroundColor:t.footbg}},[n("div",{staticClass:"footer"},[t._v(t._s(t.footesr))])])],1)],1)],1)},o=[]},"2f95":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'*[data-v-3ee62df8]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-3ee62df8]{\n\t/* 样式规则 */height:100vh;background-color:#fff;width:100%;z-index:9999}.overlay[data-v-3ee62df8]{position:fixed; /* 声明为固定定位 */top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5); /* 半透明黑色背景 */z-index:999 /* 设置层级关系，使其在其他元素上方 */}.my-drawer[data-v-3ee62df8]{position:relative; /* 声明为相对定位 */z-index:1000 /* 设置层级关系，使其在遮盖层上方 */}.my-drawer[data-v-3ee62df8]::before{content:""; /* 使用伪元素来实现高亮效果 */position:absolute; /* 声明为绝对定位 */top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5); /* 半透明白色背景 */z-index:-1 /* 设置层级关系，使其在内容下方 */}',""]),t.exports=e},"35ef":function(t,e,n){"use strict";n.r(e);var a=n("df62"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"4d43":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-c71f3430]{\n\t\t/* position: fixed; */width:100%;height:100%;overflow:hidden}[data-v-c71f3430] table{width:auto!important}[data-v-c71f3430] .el-table__empty-block{width:auto!important}@page{margin-bottom:20;margin-top:20}\n\t/* .perpage {page-break-after:always;} */\n\t/* /deep/#print p span{\n\t\toverflow-x: hidden !important;\n\t\tmax-width: 100% !important;\n\t\twhite-space: normal !important;\n\t} */.colorb[data-v-c71f3430]{background-color:#7f7f7f}.placeholder[data-v-c71f3430]{width:%?440?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.newplaceholder[data-v-c71f3430]{width:%?128?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.fullsc[data-v-c71f3430],\n\t.setting[data-v-c71f3430]{font-size:%?50?%;margin-right:%?20?%;color:#000;margin-top:%?20?%}.el-dropdown-link[data-v-c71f3430]{cursor:pointer;color:#409eff}.setting[data-v-c71f3430]{margin-left:%?20?%;display:inline-block;-webkit-animation:rotation-data-v-c71f3430 2s infinite linear;animation:rotation-data-v-c71f3430 2s infinite linear}.drawerright[data-v-c71f3430]{font-weight:1000}@-webkit-keyframes rotation-data-v-c71f3430{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-data-v-c71f3430{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.el-menu-vertical-demo[data-v-c71f3430]:not(.el-menu--collapse){width:%?440?%;min-height:%?800?%}.userLogo[data-v-c71f3430]{margin-left:%?10?%;padding:%?30?%;width:%?100?%;height:%?100?%}.userLo[data-v-c71f3430]{padding:%?22?%;width:90%;height:%?80?%;margin-left:%?20?%;margin-top:%?18?%}.el-switch[data-v-c71f3430]{margin-left:%?25?%}.el-row span[data-v-c71f3430]{display:inline-block;margin-top:%?20?%;margin-left:%?20?%}.changeStatu[data-v-c71f3430],\n\t.changeStatuw[data-v-c71f3430]{font-size:%?45?%;margin-top:%?30?%;cursor:pointer}@media screen and (max-width:1400px) and (min-width:990px){.userLo[data-v-c71f3430]{width:73%}}@media screen and (max-width:990px){.el-header[data-v-c71f3430]{height:%?120?%!important;width:100%!important;position:fixed;top:0}.el-main[data-v-c71f3430]{height:85vh!important;margin:%?120?% %?0?%}.el-footer[data-v-c71f3430]{bottom:0;position:fixed;width:100%!important}\n/* \n\t\t.homepage {\n\t\t\twidth: 100% !important;\n\t\t} */.changeStatu[data-v-c71f3430]{display:none}.changeStatuw[data-v-c71f3430]{display:block!important}.asos[data-v-c71f3430],\n\t\t.fullsc[data-v-c71f3430],\n\t\t.placeholder[data-v-c71f3430]{display:none}.changeStatus1[data-v-c71f3430]{display:block!important;font-size:%?50?%;margin-top:%?30?%;cursor:pointer;width:100%}.smalllogo[data-v-c71f3430]{width:%?55?%;height:%?55?%}.atvatr[data-v-c71f3430]{width:84%;left:%?0?%}.ableta[data-v-c71f3430]{position:fixed;width:%?440?%;top:%?100?%;margin-top:%?20?%;z-index:99}.newplaceholder[data-v-c71f3430]{width:%?0?%;height:100vh;visibility:hidden\n\t\t\t/* 或者使用 opacity: 0; */}.footer[data-v-c71f3430]{font-size:%?20?%}}\n\t/* .homepage {\n\t\twidth: 80%;\n\t\theight: 100vh;\n\t} */.changeStatus1[data-v-c71f3430],\n\t.changeStatuw[data-v-c71f3430]{display:none}.el-main[data-v-c71f3430]{padding:0;height:87vh;\n\t\t/* position: absolute; */\n\t\t/* top: 100rpx; */\n\t\t/* mar */\n\t\t/* margin:120rpx 0rpx; */z-index:1\n\t\t/* width: 100%; */}.el-menu[data-v-c71f3430]{\n\t\t/* position: fixed; */\n\t\t/* right: 400rpx; */}.headerTop[data-v-c71f3430]{display:flex;justify-content:space-between;height:%?120?%;background-color:#fff}.el-header[data-v-c71f3430]{height:%?120?%;\n\t\t/* position: fixed; */\n\t\t/* top:0; */\n\t\t/* left: 400rpx; */z-index:999\n\t\t/* width: 90vw; */}.el-footer[data-v-c71f3430]{\n\t\t/* position: fixed; */\n\t\t/* bottom: 0; */\n\t\t/* left: 0; */height:%?120?%;text-align:center;z-index:999\n\t\t/* width: 88%; */}.footer[data-v-c71f3430]{height:%?120?%;line-height:%?120?%;\n\t\t/* text-align: center; */font-size:%?26?%;color:#5b626b}\n\t/* 设置滚动条的轨道样式 */[data-v-c71f3430]::-webkit-scrollbar{width:%?8?%\n\t\t/* 滚动条宽度 */}\n\t/* 设置滚动条的滑块样式 */[data-v-c71f3430]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t\t/* 滑块背景颜色 */border-radius:4px\n\t\t/* 滑块圆角 */}\n\t/* 设置滚动条的滑道样式 */[data-v-c71f3430]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t\t/* 滑道背景颜色 */border-radius:4px\n\t\t/* 滑道圆角 */}",""]),t.exports=e},"591e":function(t,e,n){"use strict";var a=n("e177a"),i=n.n(a);i.a},"5c1b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'[data-v-68875c46] .el-carousel__indicator--horizontal .el-carousel__button{width:%?25?%;height:%?25?%;background:transparent;border:1px solid #fff;border-radius:50%;opacity:.5}[data-v-68875c46] .el-carousel__indicator--horizontal.is-active .el-carousel__button{width:%?25?%;height:%?25?%;background:#fff;border-radius:50%;opacity:1}.el-button--danger[data-v-68875c46]{width:86%;margin-top:%?10?%}.time[data-v-68875c46]{font-size:13px;color:#999}.bottom[data-v-68875c46]{margin-top:13px;line-height:12px}.button[data-v-68875c46]{padding:0;float:right}.images[data-v-68875c46]{width:%?200?%!important;height:%?200?%;display:block}.clearfix[data-v-68875c46]:before,\n.clearfix[data-v-68875c46]:after{display:table;content:""}.clearfix[data-v-68875c46]:after{clear:both}  \n/* 外层盒子 */.scroll[data-v-68875c46]{height:30px;overflow:hidden;color:#409eff;font-size:%?30?%\n\t/* width: 300px; */\n\t/* background: rgb(138, 192, 186); */}  \n/* 里面的每一条 */.item[data-v-68875c46]{height:30px;width:100%}  \n/* .el-header{\n\tposition: fixed;\n\ttop: 0;\n\tright: 20%;\n\tleft: 10%;\n\twidth: 100%;\n\tz-index: 999;\n\tbackground-color: #fff;\n} */.announcement-item[data-v-68875c46]{flex-shrink:0;padding:0 10px;height:100%;line-height:50px;background-color:#f5f5f5}.announcement[data-v-68875c46]{height:50px;line-height:50px;text-align:center;background-color:#f5f5f5}.image-container[data-v-68875c46]{display:flex;flex-wrap:wrap}.product-image[data-v-68875c46]{width:200px;height:200px;object-fit:cover;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.product-image[data-v-68875c46]:hover{-webkit-transform:scale(1.2);transform:scale(1.2)\n\t/* 鼠标悬停时放大图片 */}.time[data-v-68875c46]{font-size:13px;color:#999}.bottom[data-v-68875c46]{margin-top:13px;line-height:12px}.button[data-v-68875c46]{padding:0;float:right}.image[data-v-68875c46]{width:40%;display:block}.clearfix[data-v-68875c46]:before,\n.clearfix[data-v-68875c46]:after{display:table;content:""}.clearfix[data-v-68875c46]:after{clear:both}.el-select[data-v-68875c46]{width:%?180?%}.sreach[data-v-68875c46]{width:100%}.el-menu-demo[data-v-68875c46]{width:100%!important}  \n/* 设置滚动条的轨道样式 */[data-v-68875c46]::-webkit-scrollbar{width:8px\n\t/* 滚动条宽度 */}  \n/* 设置滚动条的滑块样式 */[data-v-68875c46]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t/* 滑块背景颜色 */border-radius:4px\n\t/* 滑块圆角 */}  \n/* 设置滚动条的滑道样式 */[data-v-68875c46]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t/* 滑道背景颜色 */border-radius:4px\n\t/* 滑道圆角 */}.input-with-select .el-input-group__prepend[data-v-68875c46]{background-color:#fff}.footer[data-v-68875c46]{height:%?120?%;background-color:#f5f5f5;line-height:%?120?%;text-align:center;font-size:%?26?%;width:100%;color:#5b626b}.header[data-v-68875c46]{width:100%;display:flex;justify-content:space-between;line-height:%?140?%}.el-carousel__item h3[data-v-68875c46]{color:#475669;font-size:14px;opacity:.75;line-height:200px;margin:0}.el-carousel__item[data-v-68875c46]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-68875c46]:nth-child(2n+1){background-color:#d3dce6}.carousel-image[data-v-68875c46]{width:100%;height:100%;object-fit:fill\n\t/* 适应方式，可根据需求选择合适的值，如：contain、cover、fill 等 */}.el-footer[data-v-68875c46]{height:%?120?%;line-height:%?120?%;width:80%;font-size:%?26?%;position:fixed;bottom:0;background-color:#fff!important;color:#5b626b;text-align:center}@media screen and (max-width:990px){.el-button--danger[data-v-68875c46]{width:89%}.homep[data-v-68875c46],.el-footer[data-v-68875c46]{width:100%!important}}.home[data-v-68875c46]{\n\t/* position: relative; */width:100%;display:flex;justify-content:center}.el-menu[data-v-68875c46]{display:flex;justify-content:space-between}.pagination[data-v-68875c46]{display:flex;justify-content:center;margin:%?35?% %?0?%}@media screen and (max-width:990px){[data-v-68875c46] .el-carousel__container{height:%?300?%!important}.el-carousel[data-v-68875c46]{height:%?300?%}.logo img[data-v-68875c46]{width:%?50?%}.sreach[data-v-68875c46]{width:100%!important}.logo[data-v-68875c46]{width:25%!important}.el-select[data-v-68875c46]{width:%?170?%}.el-input-group__append[data-v-68875c46]{width:50%!important}\n\n\t/* .home {\n\t\theight: 100vh;\n\t} */\n\n\t/* .carousel-container,.el-carousel,.el-carousel .el-carousel__container{\n\t\theight: 300rpx !important;\n\t\toverflow: hidden;\n\t} */}',""]),t.exports=e},"5e03":function(t,e,n){"use strict";n.r(e);var a=n("7de3"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b541");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"3ee62df8",null,!1,a["a"],void 0);e["default"]=s.exports},"62c8":function(t,e,n){var a=n("4d43");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("779afa10",a,!0,{sourceMap:!1,shadowMode:!1})},"652f":function(t,e,n){var a=n("2f95");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4d40a8a3",a,!0,{sourceMap:!1,shadowMode:!1})},6794:function(t,e,n){"use strict";n.r(e);var a=n("e686"),i=n("35ef");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("591e");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"68875c46",null,!1,a["a"],void 0);e["default"]=s.exports},"745d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},close:function(){this.$emit("handleClose",!1)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};e.default=a},"7de3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.productshopping")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1)],1)])},i=[]},"7fcc":function(t,e,n){"use strict";n.r(e);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b541:function(t,e,n){"use strict";var a=n("652f"),i=n.n(a);i.a},b85e:function(t,e,n){"use strict";var a=n("62c8"),i=n.n(a);i.a},cbcc:function(t,e,n){"use strict";n.r(e);var a=n("2651"),i=n("d4c8");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b85e");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"c71f3430",null,!1,a["a"],void 0);e["default"]=s.exports},d4c8:function(t,e,n){"use strict";n.r(e);var a=n("0d98"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},df62:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={name:"website-homepage",props:{ids:{type:String,default:""}},data:function(){return{sales:0,prounddatastatus:!1,dialogTableVisible:!1,input3:"",tabbleTap:{},activeIndex:0,carouselmap:{},logo:"",span:8,currentPage:1,pageSize:3,cate:"",counttotal:0,prounddata:"",imgt:"",title:"",total:"",price:"",imgarr:[],content:"",deatilStatus:!0,id:1}},mounted:function(){this.login(),this.getcateList(),this.handelDetail(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{buyNow:function(){uni.navigateTo({url:"/pages/product-purchase/product-detail?ids="+this.id})},login:function(){this.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(t){var e=t.status;100==e&&(self.$message({message:"登录状态已过期！",center:!0}),uni.navigateTo({url:"/pages/userLogin/userLogin"}))})).catch((function(t){console.log(t)}))},handleSure:function(){this.dialogTableVisible=!1},changePhoto:function(t){this.imgt=this.imgarr[t]},resert:function(){uni.navigateBack()},handelDetail:function(t){var e=this;e.homediable=!1,e.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodsdetail&id="+this.ids).then((function(t){console.log(t);var n=t.result,a=n.id,i=n.title,o=n.productprice,l=n.total,s=n.thumb_url,r=n.content,d=n.sales;""==r&&(e.deatilStatus=!1),e.id=a,e.sales=d,e.title=i,e.price=o,e.total=Number(l),e.imgarr=s,e.content=r,e.imgt=s[0]})).catch((function(t){console.log(t)}))},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.span=12,this.diawidth="90%"):(this.span=8,this.diawidth="30%")},getcateList:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner").then((function(e){var n=e.result,a=n.list,i=n.shopmes.logo;t.carouselmap=a,t.logo=i})).catch((function(t){console.log(t)}))},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.span=12,this.diawidth="90%"):(this.span=8,this.diawidth="30%"))}}};e.default=a},e177a:function(t,e,n){var a=n("5c1b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4ac5bda7",a,!0,{sourceMap:!1,shadowMode:!1})},e686:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"homep",staticStyle:{width:"100%"}},[n("el-container",[n("el-main",[n("el-card",{attrs:{shadow:"never"}},[n("el-carousel",{attrs:{height:"200px",autoplay:!1,arrow:"never"}},t._l(t.imgarr,(function(t){return n("el-carousel-item",{key:t},[n("img",{staticClass:"carousel-image",attrs:{src:t,alt:""}})])})),1),n("div",{staticStyle:{"font-size":"30rpx","margin-top":"15rpx"}},[n("b",[t._v(t._s(t.title))])]),n("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"40rpx"}},[n("div",[n("span",{staticStyle:{"font-size":"28rpx","margin-top":"15rpx",color:"#777070"}},[t._v("库存："+t._s(t.total))]),n("el-divider",{attrs:{direction:"vertical"}}),n("span",{staticStyle:{"font-size":"28rpx","margin-top":"15rpx",color:"#777070"}},[t._v("销量："+t._s(t.sales))])],1),n("div",{staticStyle:{color:"red"}},[n("span",{staticStyle:{"font-size":"28rpx"}},[t._v("￥")]),n("b",{staticStyle:{"font-size":"45rpx"}},[t._v(t._s(t.price))])])]),n("div",{staticStyle:{"font-size":"30rpx","margin-top":"15rpx"}},[n("b",[t._v("商品详情")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.deatilStatus,expression:"deatilStatus"}],staticStyle:{"margin-top":"15rpx"},domProps:{innerHTML:t._s(t.content)}}),n("el-empty",{directives:[{name:"show",rawName:"v-show",value:!t.deatilStatus,expression:"!deatilStatus"}],attrs:{description:"暂时数据为空"}})],1),n("el-button",{staticStyle:{position:"fixed",bottom:"140rpx"},attrs:{type:"danger",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyNow.apply(void 0,arguments)}}},[n("b",[t._v("立即购买")])])],1),n("el-footer",[n("div",{staticClass:"footer"},[t._v("Copyright 2023. Felement Sdn Bhd. All Right Reserved.")])])],1)],1)])},i=[]}}]);