(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-purchase-product-detail"],{"0824":function(t,e,n){"use strict";n.r(e);var a=n("3222"),i=n("19d1");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("6759");var s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"be8b5a04",null,!1,a["a"],void 0);e["default"]=l.exports},"19d1":function(t,e,n){"use strict";n.r(e);var a=n("9497"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},3222:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={myDrawer:n("5e03").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("el-container",[n("el-menu",{staticClass:"el-menu-vertical-demo asos",attrs:{"default-active":"1-5-1",collapse:t.isCollapse},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}}},[n("div",{staticClass:"userLo"},[t._v(t._s(t.name))]),n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{attrs:{index:"4-0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{attrs:{index:"4-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1),n("el-container",{staticClass:"conent"},[n("el-header",{style:{backgroundColor:t.hColr}},[n("div",{staticClass:"headerTop",style:{backgroundColor:t.topColor}},[n("div",{class:{colorb:t.isblock},staticStyle:{display:"flex","align-items":"center"}},[n("i",{staticClass:"el-icon-s-grid changeStatu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}}),n("i",{staticClass:"el-icon-s-grid changeStatus1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer.apply(void 0,arguments)}}})]),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[n("el-avatar",{staticClass:" el-icon--right",staticStyle:{width:"65rpx",height:"65rpx"},attrs:{src:t.circleUrl}})],1),n("el-dropdown-menu",{staticClass:"atvatr",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticStyle:{"border-bottom":"2rpx solid #DCDFE6"}},[t._v(t._s(t.username))]),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangepass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newloginPassword")))])],1)],1),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangeEwalletspass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newEwallectPassword")))])],1)],1),n("el-row",[n("el-dropdown-item",{staticStyle:{"border-top":"2rpx solid #DCDFE6"}},[n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOff.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-switch-button"}),n("el-link",{attrs:{href:"#",type:"danger"}},[t._v(t._s(t.$t("menu.logoff")))])],1)])],1)],1)],1),n("el-row",[n("i",{staticClass:"el-icon-setting setting",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawerleft.apply(void 0,arguments)}}})])],1)])]),n("el-drawer",{staticClass:"drawerright",attrs:{visible:t.drawerVisibletwo,title:t.$t("home.Settings"),size:t.drawerSize},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.drawerVisibletwo=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDrawerClose.apply(void 0,arguments)}}},[n("p",{staticStyle:{"text-align":"center"}},[n("b",[t._v(t._s(t.$t("home.Selectlanguage")))])]),n("el-radio-group",{on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLangChange.apply(void 0,arguments)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"en"}},[n("b",[t._v(t._s(t.$t("locale.en")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hans"}},[n("b",[t._v(t._s(t.$t("locale.zhHans")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hant"}},[n("b",[t._v(t._s(t.$t("locale.zhHant")))])])],1)])],1),n("div",{staticClass:"ableta"},[n("my-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerVisible,expression:"drawerVisible"}],on:{viewIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)},handleClose:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}})],1),n("el-main",{style:{backgroundColor:t.baColr}},[n("product-detail",{attrs:{todatail:t.todatail}})],1),n("el-footer",{style:{backgroundColor:t.footbg}},[n("div",{staticClass:"footer"},[t._v(t._s(t.footesr))])])],1)],1)],1)},o=[]},"334d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'*[data-v-6ca3fd37]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-6ca3fd37]{\n\t/* 样式规则 */height:100vh;background-color:#fff;width:100%;z-index:9999}.overlay[data-v-6ca3fd37]{position:fixed; /* 声明为固定定位 */top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5); /* 半透明黑色背景 */z-index:999 /* 设置层级关系，使其在其他元素上方 */}.my-drawer[data-v-6ca3fd37]{position:relative; /* 声明为相对定位 */z-index:1000 /* 设置层级关系，使其在遮盖层上方 */}.my-drawer[data-v-6ca3fd37]::before{content:""; /* 使用伪元素来实现高亮效果 */position:absolute; /* 声明为绝对定位 */top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5); /* 半透明白色背景 */z-index:-1 /* 设置层级关系，使其在内容下方 */}',""]),t.exports=e},"4a5c":function(t,e,n){"use strict";n.r(e);var a=n("a59f"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"5a6e":function(t,e,n){"use strict";n.r(e);var a=n("5acd"),i=n("4a5c");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e29d");var s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"24c796d7",null,!1,a["a"],void 0);e["default"]=l.exports},"5acd":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"font-size":"32rpx",color:"#79666B",display:"flex","justify-content":"center"}},[n("b",[t._v(t._s(t.$t("menu.productshopping")))])])]),n("el-form",{style:{marginLeft:t.fromleft},attrs:{"label-position":t.labelPosition,"label-width":"140px"}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticClass:"selectAddress"},[n("div",{staticStyle:{"line-height":"80rpx",color:"#79666B"}},[n("b",[t._v(t._s(t.$t("product.Shippingaddress"))+"：")])]),n("el-select",{attrs:{placeholder:t.$t("product.selectaddress"),clearable:!0},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.realname,value:t.id}})})),1)],1),n("div",[n("el-button",{attrs:{size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanlderesrt.apply(void 0,arguments)}}},[t._v(t._s(t.$t("product.Returnlist")))])],1)]),n("div",{staticStyle:{"line-height":"80rpx",color:"#79666B","font-size":"30rpx","margin-top":"30rpx"}},[n("b",[t._v(t._s(t.$t("product.Purchasingusers"))+"："+t._s(t.nickname))])])]),t.idStatus?n("el-table",{staticStyle:{width:"100%","margin-top":"50rpx"},attrs:{data:t.tableData,"show-summary":!0,"summary-method":t.getSummaries}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"goodssn",label:t.$t("product.Ordernumber"),align:"center"}}),n("el-table-column",{attrs:{prop:"title",label:t.$t("product.Matchingname"),align:"center"}}),n("el-table-column",{attrs:{prop:"total",label:t.$t("shopping.inventory"),align:"center"}}),n("el-table-column",{attrs:{prop:"buynum",label:t.$t("product.Quantitypurchased"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input-number",{attrs:{size:"small",min:1},model:{value:e.row.buynum,callback:function(n){t.$set(e.row,"buynum",n)},expression:"scope.row.buynum"}})]}}],null,!1,3434177122)}),n("el-table-column",{attrs:{prop:"price",label:t.$t("product.Price")+"  MYR",align:"center"}})],1):n("div",[n("div",{staticStyle:{"font-size":"28rpx","margin-bottom":"30rpx","border-top":"1rpx solid #d1d1d1","border-bottom":"1rpx solid #d1d1d1",padding:"20rpx 0rpx"}},[t._v(t._s(t.$t("menu.productshopping")))]),t._l(t.tableData,(function(e){return[n("el-card",{staticClass:"text item",attrs:{shadow:"never"}},[n("div",{staticClass:"tablediv"},[n("div",[t._v(t._s(e.goodssn))]),n("div",[t._v(t._s(e.title))]),n("div",[t._v(t._s(e.total))]),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticStyle:{color:"red"}},[n("span",{staticStyle:{"font-size":"23rpx"}},[t._v("MYR")]),t._v(t._s(e.price))]),n("div",[n("el-input-number",{attrs:{size:"mini",min:1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNum.apply(void 0,arguments)}},model:{value:e.buynum,callback:function(n){t.$set(e,"buynum",n)},expression:"data.buynum"}})],1)])])])]}))],2),n("div",{staticClass:"sumbit",staticStyle:{"font-size":"26rpx",color:"#5B626B"}},[n("strong",[t._v(t._s(t.$t("product.total"))+" "+t._s(t.sumPrice))])]),n("div",{staticClass:"sumbit"},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldePurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("product.Submitorder")))])],1)],1)],1)},i=[]},"5e03":function(t,e,n){"use strict";n.r(e);var a=n("97de"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e9a1");var s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"6ca3fd37",null,!1,a["a"],void 0);e["default"]=l.exports},6759:function(t,e,n){"use strict";var a=n("e5d1"),i=n.n(a);i.a},"745d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},close:function(){this.$emit("handleClose",!1)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};e.default=a},"7fcc":function(t,e,n){"use strict";n.r(e);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},8951:function(t,e,n){var a=n("ea57");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("47c8e95f",a,!0,{sourceMap:!1,shadowMode:!1})},9497:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),o=a(n("1da1")),s=a(n("5a6e")),l={components:{ProductDetail:s.default},data:function(){return{footesr:uni.getStorageSync("footer"),name:uni.getStorageSync("name"),isCollapse:!1,disable:!0,drawerVisible:!1,drawerVisibletwo:!1,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",drawerSize:"60%",screenWidth:0,index:"1",classp:!0,isblock:!1,baColr:"#F2F2F2",hColr:"#FFFFFF",footbg:"#FAFAFA",topColor:"#FFFFFF",drawbg:"#FFFFFF",nodeid:"",todatail:"",username:"",option1:!0,option2:!1,width:"30%",radio:uni.getLocale()}},mounted:function(t){uni.setNavigationBarTitle({title:uni.getStorageSync("name")}),this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},onLoad:function(t){this.todatail=t.ids},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleClose:function(t){this.drawerVisible=t},handleLangChange:function(t){uni.setLocale(t),this.$i18n.locale=t,"en"==t?uni.setStorageSync("textlang",2):"zh-Hans"==t?uni.setStorageSync("textlang",0):uni.setStorageSync("textlang",1),this.drawerVisibletwo=!1},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},hanldeChangepass:function(){uni.navigateTo({url:"/pages/login-password/login-password"})},hanldeChangeEwalletspass:function(){uni.navigateTo({url:"/pages/wallet-password/wallet-password"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleCustomButton:function(){this.$print(this.$refs.print)},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})},login:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n,a,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(e){var a=e.status,i=e.result,o=i.avatar,s=i.nickname;i.adstatus;n.username=s,100==a&&(n.$message({message:t.$t("home.loginstatus"),center:!0}),uni.navigateTo({url:"/pages/userLogin/userLogin"})),n.circleUrl=o})).catch((function(t){console.log(t)}));case 3:a=uni.getStorageSync("tokenArray"),o=a.userinfo,{userid:o};case 5:case"end":return e.stop()}}),e)})))()},getdatail:function(t){t.id;var e=t.index;this.todatail=t,this.index=e},logOff:function(){this.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout").then((function(t){})),uni.clearStorageSync(),uni.navigateTo({url:"/pages/userLogin/userLogin"})},changeStatus:function(){this.isCollapse=!this.isCollapse,this.disable=!this.disable,this.classp=!this.classp},showDrawer:function(){this.drawerVisible=!this.drawerVisible},toggleFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},showDrawerleft:function(){this.drawerVisibletwo=!this.drawerVisibletwo},handleDrawerClose:function(){this.isblock=!1},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%"))},handleOptionChange:function(t){"option1"===t?this.option2=!this.option1:"option2"===t&&(this.option1=!this.option2),1==this.option1?(this.baColr="#F2F2F2",this.hColr="#fff",this.footbg="#FAFAFA",this.topColor="#fff",this.drawbg="#fff"):(this.baColr="#1F2431",this.hColr="#7A6FBE",this.footbg="#323A4E",this.topColor="#7A6FBE",this.drawbg="#2A3142")},handleSelect:function(t){this.index=t,this.drawerVisible=!1}}};e.default=l},"97de":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1)],1)])},i=[]},a59f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b"),n("a9e3"),n("d81d"),n("ddb0"),n("acd8");var a={name:"product-detail",props:{todatail:{type:String,default:""}},data:function(){return{idStatus:!0,inputwith:"65%",currentPage1:5,labelPosition:"right",fromleft:"40rpx",tableData:[],options:[],sumPrice:0,values:"",nickname:uni.getStorageSync("username")}},mounted:function(){this.initialize(),this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{changeNum:function(){var t=0;this.tableData.forEach((function(e){t+=e.buynum*Number(e.price)})),this.sumPrice=t.toFixed(2)},hanldePurchase:function(){var t=this,e=t.tableData.map((function(t){return{id:t.id,buynum:t.buynum}})),n={totalprice:t.sumPrice,goods:e,addressid:t.values};t.$axios.post("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.create",n).then((function(e){var n=e.status,a=e.result.orderid;1==n?(t.$message({message:t.$t("product.submissionsuccessful")+"!",type:"success"}),uni.navigateTo({url:"/pages/generateOrder/generateOrder?orderid="+a})):t.$message.error(t.$t("product.Submissionfailed")+"!")})).catch((function(t){console.log(t)}))},getSummaries:function(t){var e=t.columns,n=(t.data,[]),a=this;return e.forEach((function(t,e){if(0!==e){if(5==e){var i=0;return a.tableData.forEach((function(t){i+=t.buynum*parseFloat(t.price)})),a.sumPrice=i.toFixed(2),void(n[e]=i.toFixed(2)+" MYR")}}else n[e]=a.$t("product.totalh")})),n},hanlderesrt:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},initialize:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.confirm&ids="+t.todatail).then((function(e){var n=e.result,a=n.addresslist,i=n.list;a.forEach((function(e){1==e.isdefault&&(t.values=e.id)})),t.options=a,t.tableData=i,t.changeNum()})).catch((function(t){console.log(t)}))},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.labelPosition="top",this.inputwith="100%",this.fromleft="0rpx",this.idStatus=!1):(this.labelPosition="right",this.inputwith="65%",this.fromleft="40rpx",this.idStatus=!0)},handleResize:function(){console.log(this.idStatus);var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,t<=990?(this.fromleft="0rpx",this.labelPosition="top",this.inputwith="100%",this.idStatus=!1):(this.fromleft="40rpx",this.labelPosition="right",this.inputwith="65%",this.idStatus=!0))}}};e.default=a},cbc0:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-be8b5a04]{\n\t\t/* position: fixed; */width:100%;height:100%;overflow:hidden}[data-v-be8b5a04] table{width:auto!important}[data-v-be8b5a04] .el-table__empty-block{width:auto!important}@page{margin-bottom:20;margin-top:20}\n\t/* .perpage {page-break-after:always;} */\n\t/* /deep/#print p span{\n\t\toverflow-x: hidden !important;\n\t\tmax-width: 100% !important;\n\t\twhite-space: normal !important;\n\t} */.colorb[data-v-be8b5a04]{background-color:#7f7f7f}.placeholder[data-v-be8b5a04]{width:%?440?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.newplaceholder[data-v-be8b5a04]{width:%?128?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.fullsc[data-v-be8b5a04],\n\t.setting[data-v-be8b5a04]{font-size:%?50?%;\n\t\t/* margin-right: 20rpx; */color:#000\n\t\t/* margin-top: 20rpx; */}.el-dropdown-link[data-v-be8b5a04]{cursor:pointer;color:#409eff}.setting[data-v-be8b5a04]{margin-left:%?20?%;display:inline-block;-webkit-animation:rotation-data-v-be8b5a04 2s infinite linear;animation:rotation-data-v-be8b5a04 2s infinite linear}.drawerright[data-v-be8b5a04]{font-weight:1000}@-webkit-keyframes rotation-data-v-be8b5a04{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-data-v-be8b5a04{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.el-menu-vertical-demo[data-v-be8b5a04]:not(.el-menu--collapse){width:%?440?%;min-height:%?800?%}.userLogo[data-v-be8b5a04]{margin-left:%?10?%;padding:%?30?%;width:%?100?%;height:%?100?%}.userLo[data-v-be8b5a04]{padding:%?22?%;width:90%;height:%?80?%;margin-left:%?20?%;margin-top:%?18?%}.el-switch[data-v-be8b5a04]{margin-left:%?25?%}.el-row span[data-v-be8b5a04]{display:inline-block;margin-top:%?20?%;margin-left:%?20?%}.changeStatu[data-v-be8b5a04],\n\t.changeStatuw[data-v-be8b5a04]{font-size:%?45?%;\n\t\t/* margin-top: 30rpx; */cursor:pointer}@media screen and (max-width:1400px) and (min-width:990px){.userLo[data-v-be8b5a04]{width:73%}}@media screen and (max-width:990px){.el-header[data-v-be8b5a04]{height:%?120?%!important;width:100%!important;position:fixed;top:0}.el-main[data-v-be8b5a04]{height:85vh!important;margin:%?120?% %?0?%}.el-footer[data-v-be8b5a04]{bottom:0;position:fixed;width:100%!important}\n/* \n\t\t.homepage {\n\t\t\twidth: 100% !important;\n\t\t} */.changeStatu[data-v-be8b5a04]{display:none}.changeStatuw[data-v-be8b5a04]{display:block!important}.asos[data-v-be8b5a04],\n\t\t.fullsc[data-v-be8b5a04],\n\t\t.placeholder[data-v-be8b5a04]{display:none}.changeStatus1[data-v-be8b5a04]{display:block!important;font-size:%?50?%;\n\t\t\t/* margin-top: 30rpx; */cursor:pointer;width:100%}.smalllogo[data-v-be8b5a04]{width:%?55?%;height:%?55?%}.atvatr[data-v-be8b5a04]{width:84%;left:%?0?%}.ableta[data-v-be8b5a04]{position:fixed;width:%?440?%;top:%?100?%;margin-top:%?20?%;z-index:99}.newplaceholder[data-v-be8b5a04]{width:%?0?%;height:100vh;visibility:hidden\n\t\t\t/* 或者使用 opacity: 0; */}.footer[data-v-be8b5a04]{font-size:%?20?%}}\n\t/* .homepage {\n\t\twidth: 80%;\n\t\theight: 100vh;\n\t} */.changeStatus1[data-v-be8b5a04],\n\t.changeStatuw[data-v-be8b5a04]{display:none}.el-main[data-v-be8b5a04]{height:87vh;\n\t\t/* position: absolute; */\n\t\t/* top: 100rpx; */\n\t\t/* mar */\n\t\t/* margin:120rpx 0rpx; */z-index:1\n\t\t/* width: 100%; */}.el-menu[data-v-be8b5a04]{\n\t\t/* position: fixed; */\n\t\t/* right: 400rpx; */}.headerTop[data-v-be8b5a04]{display:flex;justify-content:space-between;height:%?120?%;background-color:#fff}.el-header[data-v-be8b5a04]{height:%?120?%;\n\t\t/* position: fixed; */\n\t\t/* top:0; */\n\t\t/* left: 400rpx; */z-index:999\n\t\t/* width: 90vw; */}.el-footer[data-v-be8b5a04]{\n\t\t/* position: fixed; */\n\t\t/* bottom: 0; */\n\t\t/* left: 0; */height:%?120?%;text-align:center;z-index:999\n\t\t/* width: 88%; */}.footer[data-v-be8b5a04]{height:%?120?%;line-height:%?120?%;\n\t\t/* text-align: center; */font-size:%?26?%;color:#5b626b}\n\t/* 设置滚动条的轨道样式 */[data-v-be8b5a04]::-webkit-scrollbar{width:%?8?%\n\t\t/* 滚动条宽度 */}\n\t/* 设置滚动条的滑块样式 */[data-v-be8b5a04]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t\t/* 滑块背景颜色 */border-radius:4px\n\t\t/* 滑块圆角 */}\n\t/* 设置滚动条的滑道样式 */[data-v-be8b5a04]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t\t/* 滑道背景颜色 */border-radius:4px\n\t\t/* 滑道圆角 */}",""]),t.exports=e},e29d:function(t,e,n){"use strict";var a=n("8951"),i=n.n(a);i.a},e5d1:function(t,e,n){var a=n("cbc0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5a8b37fc",a,!0,{sourceMap:!1,shadowMode:!1})},e9a1:function(t,e,n){"use strict";var a=n("ef52"),i=n.n(a);i.a},ea57:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".tablediv div[data-v-24c796d7]{margin-top:%?5?%}.text[data-v-24c796d7]{font-size:14px}.item[data-v-24c796d7]{margin-bottom:18px}.equal-width-column[data-v-24c796d7]{width:100%}.sumbit[data-v-24c796d7]{margin-top:%?20?%;display:flex;justify-content:center}.selectAddress[data-v-24c796d7]{display:flex;font-size:%?30?%}@media screen and (max-width:990px){.selectAddress[data-v-24c796d7]{display:grid}}",""]),t.exports=e},ef52:function(t,e,n){var a=n("334d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("132f72a9",a,!0,{sourceMap:!1,shadowMode:!1})}}]);