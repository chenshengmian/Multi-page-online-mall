(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdraw-money-withdraw-money"],{1598:function(t,e,n){"use strict";n.r(e);var a=n("6274"),i=n("4038");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("c696");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"9c8345ba",null,!1,a["a"],void 0);e["default"]=s.exports},2910:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),o=a(n("1da1")),l=a(n("d9b7")),s={components:{WithdrawMoney:l.default},data:function(){return{footesr:uni.getStorageSync("footer"),name:uni.getStorageSync("name"),isCollapse:!1,disable:!0,drawerVisible:!1,drawerVisibletwo:!1,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",drawerSize:"60%",screenWidth:0,classp:!0,isblock:!1,baColr:"#F2F2F2",hColr:"#FFFFFF",footbg:"#FAFAFA",topColor:"#FFFFFF",drawbg:"#FFFFFF",nodeid:"",todatail:{},username:"",option1:!0,option2:!1,width:"30%",radio:uni.getLocale()}},mounted:function(t){uni.setNavigationBarTitle({title:uni.getStorageSync("name")}),this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleClose:function(t){this.drawerVisible=t},handleLangChange:function(t){uni.setLocale(t),this.$i18n.locale=t,this.$router.go(0)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},hanldeChangepass:function(){uni.navigateTo({url:"/pages/login-password/login-password"})},hanldeChangeEwalletspass:function(){uni.navigateTo({url:"/pages/wallet-password/wallet-password"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleCustomButton:function(){this.$print(this.$refs.print)},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})},login:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n,a,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(t){var e=t.status,a=t.result,i=a.avatar,o=a.nickname;a.adstatus;n.username=o,100==e&&(n.$message({message:"登录状态已过期！",center:!0}),uni.navigateTo({url:"/pages/userLogin/userLogin"})),n.circleUrl=i})).catch((function(t){console.log(t)}));case 3:a=uni.getStorageSync("tokenArray"),o=a.userinfo,{userid:o};case 5:case"end":return e.stop()}}),e)})))()},logOff:function(){uni.clearStorageSync(),uni.navigateTo({url:"/pages/userLogin/userLogin"})},changeStatus:function(){this.isCollapse=!this.isCollapse,this.disable=!this.disable,this.classp=!this.classp},showDrawer:function(){this.drawerVisible=!this.drawerVisible},toggleFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},showDrawerleft:function(){this.drawerVisibletwo=!this.drawerVisibletwo},handleDrawerClose:function(){this.isblock=!1},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%"))},handleOptionChange:function(t){"option1"===t?this.option2=!this.option1:"option2"===t&&(this.option1=!this.option2),1==this.option1?(this.baColr="#F2F2F2",this.hColr="#fff",this.footbg="#FAFAFA",this.topColor="#fff",this.drawbg="#fff"):(this.baColr="#1F2431",this.hColr="#7A6FBE",this.footbg="#323A4E",this.topColor="#7A6FBE",this.drawbg="#2A3142")}}};e.default=s},"2f95":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'*[data-v-3ee62df8]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-3ee62df8]{\n\t/* 样式规则 */height:100vh;background-color:#fff;width:100%;z-index:9999}.overlay[data-v-3ee62df8]{position:fixed; /* 声明为固定定位 */top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5); /* 半透明黑色背景 */z-index:999 /* 设置层级关系，使其在其他元素上方 */}.my-drawer[data-v-3ee62df8]{position:relative; /* 声明为相对定位 */z-index:1000 /* 设置层级关系，使其在遮盖层上方 */}.my-drawer[data-v-3ee62df8]::before{content:""; /* 使用伪元素来实现高亮效果 */position:absolute; /* 声明为绝对定位 */top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5); /* 半透明白色背景 */z-index:-1 /* 设置层级关系，使其在内容下方 */}',""]),t.exports=e},"39fd":function(t,e,n){var a=n("a95f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("06c520a2",a,!0,{sourceMap:!1,shadowMode:!1})},4038:function(t,e,n){"use strict";n.r(e);var a=n("2910"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"5e03":function(t,e,n){"use strict";n.r(e);var a=n("7de3"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b541");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"3ee62df8",null,!1,a["a"],void 0);e["default"]=s.exports},6274:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={myDrawer:n("5e03").default,withdrawMoney:n("d9b7").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("el-container",[n("el-menu",{staticClass:"el-menu-vertical-demo asos",attrs:{collapse:t.isCollapse},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}}},[n("div",{staticClass:"userLo"},[t._v(t._s(t.name))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),t.disable?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))]):t._e()]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.productshopping")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1),n("el-container",{staticClass:"conent"},[n("el-header",{style:{backgroundColor:t.hColr}},[n("div",{staticClass:"headerTop",style:{backgroundColor:t.topColor}},[n("div",{class:{colorb:t.isblock},staticStyle:{display:"flex"}},[n("i",{staticClass:"el-icon-s-grid changeStatu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}}),n("i",{staticClass:"el-icon-s-grid changeStatus1",staticStyle:{"margin-left":"36rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer.apply(void 0,arguments)}}})]),n("div",{staticStyle:{display:"flex","margin-top":"10rpx"}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[n("el-avatar",{staticClass:" el-icon--right",staticStyle:{"margin-top":"5rpx"},attrs:{src:t.circleUrl}})],1),n("el-dropdown-menu",{staticClass:"atvatr",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticStyle:{"border-bottom":"2rpx solid #DCDFE6"}},[t._v(t._s(t.username))]),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangepass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newloginPassword")))])],1)],1),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangeEwalletspass.apply(void 0,arguments)}}},[n("el-row",[n("el-dropdown-item",[n("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newEwallectPassword")))])],1)],1),n("el-row",[n("el-dropdown-item",{staticStyle:{"border-top":"2rpx solid #DCDFE6"}},[n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOff.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-switch-button"}),n("el-link",{attrs:{href:"#",type:"danger"}},[t._v(t._s(t.$t("menu.logoff")))])],1)])],1)],1)],1),n("el-row",[n("i",{staticClass:"el-icon-setting setting",staticStyle:{"margin-right":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawerleft.apply(void 0,arguments)}}})])],1)])]),n("el-drawer",{staticClass:"drawerright",attrs:{visible:t.drawerVisibletwo,title:"Settings",size:t.drawerSize},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.drawerVisibletwo=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDrawerClose.apply(void 0,arguments)}}},[n("p",{staticStyle:{"text-align":"center"}},[n("b",[t._v("Choose Layouts")])]),n("el-radio-group",{on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLangChange.apply(void 0,arguments)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"en"}},[n("b",[t._v(t._s(t.$t("locale.en")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hans"}},[n("b",[t._v(t._s(t.$t("locale.zhHans")))])])],1),n("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[n("el-radio",{attrs:{label:"zh-Hant"}},[n("b",[t._v(t._s(t.$t("locale.zhHant")))])])],1)])],1),n("div",{staticClass:"ableta"},[n("my-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerVisible,expression:"drawerVisible"}],on:{viewIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)},handleClose:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}})],1),n("el-main",{style:{backgroundColor:t.baColr}},[n("withdraw-money")],1),n("el-footer",{style:{backgroundColor:t.footbg}},[n("div",{staticClass:"footer"},[t._v(t._s(t.footesr))])])],1)],1)],1)},o=[]},"652f":function(t,e,n){var a=n("2f95");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4d40a8a3",a,!0,{sourceMap:!1,shadowMode:!1})},"745d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},close:function(){this.$emit("handleClose",!1)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};e.default=a},"777c":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),o=a(n("1da1")),l={name:"withdraw-money",data:function(){return{elleft:5,elright:8,checked:!1,Identitycard:0,AccountHolder:"",eamil:"",idNumber:"",SupportingDocument:"",Swiftcode:"",BankAccountNumber:0,BankBranch:"",BankName:"",mony:0,credit5:"",credit2:""}},mounted:function(){this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleChangebank:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},login:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(e){var a=e.status;100==a?(n.$message({message:"登录状态已过期！",center:!0}),uni.navigateTo({url:"/pages/userLogin/userLogin"})):t.getkyc()})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getkyc:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc").then((function(t){console.log(t);var e=t.status,a=t.result,i=a.account_holder,o=a.bank_account_number,l=a.bank_branch,s=a.bank_name,r=a.email,d=a.id_number,c=(a.idcard_imageone,a.idcard_imagetwo,a.idcard_pre),u=a.all_supporting_document,h=a.swift_code,p=a.credit5,f=a.credit2;n.Identitycard=c,n.eamil=r,n.idNumber=d,n.SupportingDocument=u,n.Swiftcode=h,n.BankAccountNumber=o,n.BankBranch=l,n.BankName=s,n.AccountHolder=i,n.credit5=p,n.credit2=f,1!=e&&n.$alert("是否前往认证KYC","认证",{confirmButtonText:"确定",showClose:!1,callback:function(t){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})}})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.elleft=20,this.elright=24):(this.elleft=5,this.elright=8)},handleWithdrawal:function(){var t=this,e=0;e=t.checked?1:0,console.log(e),t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.withdrawalmoney&type="+e+"&money="+t.mony).then((function(e){console.log(e);var n=e.status,a=e.result.message,i=0==n?"error":"success";t.$message({showClose:!0,message:a,type:i}),1==n&&t.$emit("wmindex","2-3")})).catch((function(t){console.log(t)}))},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.elleft=20,this.elright=24):(this.elleft=5,this.elright=8))}}};e.default=l},"7de3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.productshopping")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1)],1)])},i=[]},"7ed4":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("menu.ewalletwithdrawals")))])]),n("div",{staticStyle:{"font-size":"26rpx","text-decoration":"underline"}},[t._v(t._s(t.$t("withdrawal.accountSummary")))]),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.cashPointsBalance")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.credit2))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.transferableBalance")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.credit5))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.identityCard")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.Identitycard))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.accountHolder")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.AccountHolder))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.bankName")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankName))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.bankBranch")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankBranch))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.bankAccountNumber")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankAccountNumber))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Swift code")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.Swiftcode))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.supportingDocument")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："),n("el-link",{attrs:{href:t.SupportingDocument,type:"primary",target:"_blank"}},[t._v(t._s(t.$t("withdrawal.supportingDocument")))])],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.idCard")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.idNumber))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("login.eamil")))]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.eamil))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v(t._s(t.$t("withdrawal.transferAmount")))]),n("el-col",{attrs:{span:t.elright}},[n("span",[t._v("：")]),n("el-input",{attrs:{size:"mini"},model:{value:t.mony,callback:function(e){t.mony=e},expression:"mony"}})],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx"},attrs:{span:t.elright}},[n("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(t._s(t.$t("withdrawal.agreement")))])],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx",color:"red"},attrs:{span:t.elright}},[t._v(t._s(t.$t("withdrawal.statement")))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx"},attrs:{span:t.elright}},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleWithdrawal.apply(void 0,arguments)}}},[t._v(t._s(t.$t("withdrawal.withdrawals")))]),n("el-button",{attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChangebank.apply(void 0,arguments)}}},[t._v(t._s(t.$t("withdrawal.newBankInfo")))])],1)],1)],1)],1)},i=[]},"7fcc":function(t,e,n){"use strict";n.r(e);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a95f:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".el-col[data-v-518dbc80]{border-radius:4px;display:flex;margin-top:%?10?%}.el-col span[data-v-518dbc80]{display:inline-block;margin-top:%?10?%}.bg-purple-dark[data-v-518dbc80]{background:#99a9bf}.bg-purple[data-v-518dbc80]{background:#d3dce6}.bg-purple-light[data-v-518dbc80]{background:#e5e9f2}.grid-content[data-v-518dbc80]{border-radius:4px;min-height:36px}.el-row[data-v-518dbc80]{font-size:%?26?%}.el-input[data-v-518dbc80]{display:inline-block}@media screen and (max-width:990px){.el-row[data-v-518dbc80]{display:flex;justify-content:space-between}}",""]),t.exports=e},b02e:function(t,e,n){"use strict";n.r(e);var a=n("777c"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b541:function(t,e,n){"use strict";var a=n("652f"),i=n.n(a);i.a},c696:function(t,e,n){"use strict";var a=n("c6964"),i=n.n(a);i.a},c6964:function(t,e,n){var a=n("faa3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ccf64b28",a,!0,{sourceMap:!1,shadowMode:!1})},d9b7:function(t,e,n){"use strict";n.r(e);var a=n("7ed4"),i=n("b02e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("fa59");var l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"518dbc80",null,!1,a["a"],void 0);e["default"]=s.exports},fa59:function(t,e,n){"use strict";var a=n("39fd"),i=n.n(a);i.a},faa3:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-9c8345ba]{\n\t\t/* position: fixed; */width:100%;height:100%;overflow:hidden}[data-v-9c8345ba] table{width:auto!important}[data-v-9c8345ba] .el-table__empty-block{width:auto!important}@page{margin-bottom:20;margin-top:20}\n\t/* .perpage {page-break-after:always;} */\n\t/* /deep/#print p span{\n\t\toverflow-x: hidden !important;\n\t\tmax-width: 100% !important;\n\t\twhite-space: normal !important;\n\t} */.colorb[data-v-9c8345ba]{background-color:#7f7f7f}.placeholder[data-v-9c8345ba]{width:%?440?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.newplaceholder[data-v-9c8345ba]{width:%?128?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.fullsc[data-v-9c8345ba],\n\t.setting[data-v-9c8345ba]{font-size:%?50?%;margin-right:%?20?%;color:#000;margin-top:%?20?%}.el-dropdown-link[data-v-9c8345ba]{cursor:pointer;color:#409eff}.setting[data-v-9c8345ba]{margin-left:%?20?%;display:inline-block;-webkit-animation:rotation-data-v-9c8345ba 2s infinite linear;animation:rotation-data-v-9c8345ba 2s infinite linear}.drawerright[data-v-9c8345ba]{font-weight:1000}@-webkit-keyframes rotation-data-v-9c8345ba{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-data-v-9c8345ba{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.el-menu-vertical-demo[data-v-9c8345ba]:not(.el-menu--collapse){width:%?440?%;min-height:%?800?%}.userLogo[data-v-9c8345ba]{margin-left:%?10?%;padding:%?30?%;width:%?100?%;height:%?100?%}.userLo[data-v-9c8345ba]{padding:%?22?%;width:90%;height:%?80?%;margin-left:%?20?%;margin-top:%?18?%}.el-switch[data-v-9c8345ba]{margin-left:%?25?%}.el-row span[data-v-9c8345ba]{display:inline-block;margin-top:%?20?%;margin-left:%?20?%}.changeStatu[data-v-9c8345ba],\n\t.changeStatuw[data-v-9c8345ba]{font-size:%?45?%;margin-top:%?30?%;cursor:pointer}@media screen and (max-width:1400px) and (min-width:990px){.userLo[data-v-9c8345ba]{width:73%}}@media screen and (max-width:990px){.el-header[data-v-9c8345ba]{height:%?120?%!important;width:100%!important;position:fixed;top:0}.el-main[data-v-9c8345ba]{height:85vh!important;margin:%?120?% %?0?%}.el-footer[data-v-9c8345ba]{bottom:0;position:fixed;width:100%!important}\n/* \n\t\t.homepage {\n\t\t\twidth: 100% !important;\n\t\t} */.changeStatu[data-v-9c8345ba]{display:none}.changeStatuw[data-v-9c8345ba]{display:block!important}.asos[data-v-9c8345ba],\n\t\t.fullsc[data-v-9c8345ba],\n\t\t.placeholder[data-v-9c8345ba]{display:none}.changeStatus1[data-v-9c8345ba]{display:block!important;font-size:%?50?%;margin-top:%?30?%;cursor:pointer;width:100%}.smalllogo[data-v-9c8345ba]{width:%?55?%;height:%?55?%}.atvatr[data-v-9c8345ba]{width:84%;left:%?0?%}.ableta[data-v-9c8345ba]{position:fixed;width:%?440?%;top:%?100?%;margin-top:%?20?%;z-index:99}.newplaceholder[data-v-9c8345ba]{width:%?0?%;height:100vh;visibility:hidden\n\t\t\t/* 或者使用 opacity: 0; */}.footer[data-v-9c8345ba]{font-size:%?20?%}}\n\t/* .homepage {\n\t\twidth: 80%;\n\t\theight: 100vh;\n\t} */.changeStatus1[data-v-9c8345ba],\n\t.changeStatuw[data-v-9c8345ba]{display:none}.el-main[data-v-9c8345ba]{height:87vh;\n\t\t/* position: absolute; */\n\t\t/* top: 100rpx; */\n\t\t/* mar */\n\t\t/* margin:120rpx 0rpx; */z-index:1\n\t\t/* width: 100%; */}.el-menu[data-v-9c8345ba]{\n\t\t/* position: fixed; */\n\t\t/* right: 400rpx; */}.headerTop[data-v-9c8345ba]{display:flex;justify-content:space-between;height:%?120?%;background-color:#fff}.el-header[data-v-9c8345ba]{height:%?120?%;\n\t\t/* position: fixed; */\n\t\t/* top:0; */\n\t\t/* left: 400rpx; */z-index:999\n\t\t/* width: 90vw; */}.el-footer[data-v-9c8345ba]{\n\t\t/* position: fixed; */\n\t\t/* bottom: 0; */\n\t\t/* left: 0; */height:%?120?%;text-align:center;z-index:999\n\t\t/* width: 88%; */}.footer[data-v-9c8345ba]{height:%?120?%;line-height:%?120?%;\n\t\t/* text-align: center; */font-size:%?26?%;color:#5b626b}\n\t/* 设置滚动条的轨道样式 */[data-v-9c8345ba]::-webkit-scrollbar{width:%?8?%\n\t\t/* 滚动条宽度 */}\n\t/* 设置滚动条的滑块样式 */[data-v-9c8345ba]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t\t/* 滑块背景颜色 */border-radius:4px\n\t\t/* 滑块圆角 */}\n\t/* 设置滚动条的滑道样式 */[data-v-9c8345ba]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t\t/* 滑道背景颜色 */border-radius:4px\n\t\t/* 滑道圆角 */}",""]),t.exports=e}}]);