(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdraw-money-withdraw-money"],{"0347":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".el-col[data-v-1601599c]{border-radius:4px;display:flex;margin-top:%?10?%}.el-col span[data-v-1601599c]{display:inline-block;margin-top:%?10?%}.bg-purple-dark[data-v-1601599c]{background:#99a9bf}.bg-purple[data-v-1601599c]{background:#d3dce6}.bg-purple-light[data-v-1601599c]{background:#e5e9f2}.grid-content[data-v-1601599c]{border-radius:4px;min-height:36px}.el-row[data-v-1601599c]{font-size:%?26?%}.el-input[data-v-1601599c]{display:inline-block}@media screen and (max-width:990px){.el-row[data-v-1601599c]{display:grid;grid-template-columns:1fr}}",""]),t.exports=e},"05af":function(t,e,n){t.exports=n.p+"static/img/favicon.c952c964.png"},"10df":function(t,e,n){var a=n("e056");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f83b1498",a,!0,{sourceMap:!1,shadowMode:!1})},1598:function(t,e,n){"use strict";n.r(e);var a=n("a075"),i=n("4038");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("954d");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"25890724",null,!1,a["a"],void 0);e["default"]=r.exports},"22a7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"*[data-v-f5687d02]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-f5687d02]{\n\t/* 样式规则 */width:100%;z-index:9999}",""]),t.exports=e},2910:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),o=a(n("1da1")),l=a(n("d9b7")),r={components:{WithdrawMoney:l.default},data:function(){return{isCollapse:!1,disable:!0,drawerVisible:!1,drawerVisibletwo:!1,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",drawerSize:"60%",screenWidth:0,index:"1",classp:!0,isblock:!1,baColr:"#F2F2F2",hColr:"#FFFFFF",footbg:"#FAFAFA",topColor:"#FFFFFF",drawbg:"#FFFFFF",nodeid:"",todatail:{},username:"",option1:!0,option2:!1,width:"30%"}},mounted:function(t){this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},onShow:function(){this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{hanldeChangepass:function(){uni.navigateTo({url:"/pages/login-password/login-password"})},hanldeChangeEwalletspass:function(){uni.navigateTo({url:"/pages/wallet-password/wallet-password"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleCustomButton:function(){this.$print(this.$refs.print)},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})},login:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n,a,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(t){var e=t.status,a=t.result,i=a.avatar,o=a.nickname;a.adstatus;n.username=o,100==e&&(n.$message({message:"登录状态已过期！",center:!0}),uni.navigateTo({url:"/pages/index/index"})),n.circleUrl=i})).catch((function(t){console.log(t)}));case 3:a=uni.getStorageSync("tokenArray"),o=a.userinfo,{userid:o};case 5:case"end":return e.stop()}}),e)})))()},getdatail:function(t){t.id;var e=t.index;this.todatail=t,this.index=e},logOff:function(){var t=this,e=uni.getStorageSync("userInfo"),n=e.result.userinfo,a={userid:n};this.$axios.post("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout",a).then((function(e){var n=e.status;if(1==n){uni.clearStorageSync();var a=e.result.message;t.$message({message:a,center:!0}),uni.navigateTo({url:"/pages/index/index"})}})).catch((function(t){console.log(t)}))},changeStatus:function(){this.isCollapse=!this.isCollapse,this.disable=!this.disable,this.classp=!this.classp},showDrawer:function(){this.drawerVisible=!this.drawerVisible},toggleFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},showDrawerleft:function(){this.drawerVisibletwo=!this.drawerVisibletwo},handleDrawerClose:function(){this.isblock=!1},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%"))},handleOptionChange:function(t){"option1"===t?this.option2=!this.option1:"option2"===t&&(this.option1=!this.option2),1==this.option1?(this.baColr="#F2F2F2",this.hColr="#fff",this.footbg="#FAFAFA",this.topColor="#fff",this.drawbg="#fff"):(this.baColr="#1F2431",this.hColr="#7A6FBE",this.footbg="#323A4E",this.topColor="#7A6FBE",this.drawbg="#2A3142")},handleSelect:function(t){this.index=t,this.drawerVisible=!1}}};e.default=r},4038:function(t,e,n){"use strict";n.r(e);var a=n("2910"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"5e03":function(t,e,n){"use strict";n.r(e);var a=n("8ec5"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("aa80");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f5687d02",null,!1,a["a"],void 0);e["default"]=r.exports},"745d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};e.default=a},"777c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"withdraw-money",data:function(){return{elleft:5,elright:8,checked:!1,Identitycard:0,AccountHolder:"",eamil:"",idNumber:"",SupportingDocument:"",Swiftcode:"",BankAccountNumber:0,BankBranch:"",BankName:"",mony:0,credit5:"",credit2:""}},mounted:function(){this.getkyc(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{getkyc:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc").then((function(e){console.log(e);var n=e.status,a=e.result,i=a.account_holder,o=a.bank_account_number,l=a.bank_branch,r=a.bank_name,s=a.email,c=a.id_number,d=(a.idcard_imageone,a.idcard_imagetwo,a.idcard_pre),u=a.all_supporting_document,h=a.swift_code,p=a.credit5,f=a.credit2;t.Identitycard=d,t.eamil=s,t.idNumber=c,t.SupportingDocument=u,t.Swiftcode=h,t.BankAccountNumber=o,t.BankBranch=l,t.BankName=r,t.AccountHolder=i,t.credit5=p,t.credit2=f,1!=n&&t.$alert("是否前往认证KYC","认证",{confirmButtonText:"确定",showClose:!1,callback:function(t){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})}})})).catch((function(t){console.log(t)}))},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.elleft=20,this.elright=24):(this.elleft=5,this.elright=8)},handleWithdrawal:function(){var t=this,e=0;e=t.checked?1:0,console.log(e),t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.withdrawalmoney&type="+e+"&money="+t.mony).then((function(e){console.log(e);var n=e.status,a=e.result.message,i=0==n?"error":"success";t.$message({showClose:!0,message:a,type:i}),1==n&&t.$emit("wmindex","2-3")})).catch((function(t){console.log(t)}))},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.elleft=20,this.elright=24):(this.elleft=5,this.elright=8))}}};e.default=a},"7fcc":function(t,e,n){"use strict";n.r(e);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8a7d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("电子钱包取款")])]),n("div",{staticStyle:{"font-size":"26rpx","text-decoration":"underline"}},[t._v("账户摘要")]),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("现金积分余额")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.credit2))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("可转账余额")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.credit5))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Identity card (Front) 身份证前")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.Identitycard))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Account Holder 持卡者名字")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.AccountHolder))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Bank Name 银行名字")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankName))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Bank Branch 银行分行")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankBranch))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Bank Account Number 户口号码")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.BankAccountNumber))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Swift code")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.Swiftcode))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Supporting Document 支持文件")]),n("el-col",{attrs:{span:t.elright}},[t._v("："),n("el-link",{attrs:{href:t.SupportingDocument,type:"primary",target:"_blank"}},[t._v("支持文件")])],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("ID/ Passport Number 身份证号码")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.idNumber))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("Email")]),n("el-col",{attrs:{span:t.elright}},[t._v("："+t._s(t.eamil))])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}},[t._v("转账金额")]),n("el-col",{attrs:{span:t.elright}},[n("span",[t._v("：")]),n("el-input",{attrs:{size:"mini"},model:{value:t.mony,callback:function(e){t.mony=e},expression:"mony"}})],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx"},attrs:{span:t.elright}},[n("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("Save bank infomation\n\t\t\t\t\tabove")])],1)],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx",color:"red"},attrs:{span:t.elright}},[t._v("Any request for cash withdrawal from CP\n\t\t\t\twallet is subjected to an admin fee of USD 1 per transaction")])],1),n("el-row",[n("el-col",{attrs:{span:t.elleft}}),n("el-col",{staticStyle:{"margin-top":"25rpx"},attrs:{span:t.elright}},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleWithdrawal.apply(void 0,arguments)}}},[t._v("提款")])],1)],1)],1)],1)},i=[]},"8ec5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("主页")])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("电子钱包")])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v("电子钱包历史记录")]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v("电子钱包取款")]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v("电子钱包取款状况")]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v("奖金说明")]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("购物")])]),n("el-menu-item-group",[n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v("产品购买")]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v("购买历史记录")])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("架构图")])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("公告表")])])],1)],1)},i=[]},"8ee4":function(t,e,n){t.exports=n.p+"static/img/logo.b27ea650.png"},"954d":function(t,e,n){"use strict";var a=n("10df"),i=n.n(a);i.a},a075:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={myDrawer:n("5e03").default,withdrawMoney:n("d9b7").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("el-container",[a("el-menu",{staticClass:"el-menu-vertical-demo asos",attrs:{collapse:t.isCollapse},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}}},[t.disable?a("v-uni-image",{staticClass:"userLo",attrs:{src:n("8ee4"),alt:""}}):a("v-uni-image",{staticClass:"userLogo",attrs:{src:n("05af")}}),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("主页")])]),a("el-submenu",[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-fold"}),t.disable?a("span",{attrs:{slot:"title"},slot:"title"},[t._v("电子钱包")]):t._e()]),a("el-menu-item-group",[a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v("电子钱包历史记录")]),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v("电子钱包取款")]),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v("电子钱包取款状况")]),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v("奖金说明")]),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-fold"}),t.disable?a("span",{attrs:{slot:"title"},slot:"title"},[t._v("购物")]):t._e()]),a("el-menu-item-group",[a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleProduct.apply(void 0,arguments)}}},[t._v("产品购买")]),a("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v("购买历史记录")])],1)],2),a("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("架构图")])]),a("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("公告表")])])],1),a("el-container",{staticClass:"conent"},[a("el-header",{style:{backgroundColor:t.hColr}},[a("div",{staticClass:"headerTop",style:{backgroundColor:t.topColor}},[a("div",{class:{colorb:t.isblock},staticStyle:{display:"flex"}},[a("i",{staticClass:"el-icon-s-grid changeStatu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"changeStatus1 smalllogo",attrs:{src:n("05af")}}),a("i",{staticClass:"el-icon-s-grid changeStatus1",staticStyle:{"margin-left":"36rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer.apply(void 0,arguments)}}})],1),a("div",{staticStyle:{display:"flex","margin-top":"10rpx"}},[a("i",{staticClass:"el-icon-full-screen fullsc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleFullscreen.apply(void 0,arguments)}}}),a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("el-avatar",{staticClass:" el-icon--right",staticStyle:{"margin-top":"5rpx"},attrs:{src:t.circleUrl}})],1),a("el-dropdown-menu",{staticClass:"atvatr",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{"border-bottom":"2rpx solid #DCDFE6"}},[t._v(t._s(t.username))]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangepass.apply(void 0,arguments)}}},[a("el-row",[a("el-dropdown-item",[a("i",{staticClass:"el-icon-user-solid"}),t._v("更改登录密码")])],1)],1),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangeEwalletspass.apply(void 0,arguments)}}},[a("el-row",[a("el-dropdown-item",[a("i",{staticClass:"el-icon-user-solid"}),t._v("修改电子钱包密码")])],1)],1),a("el-row",[a("el-dropdown-item",{staticStyle:{"border-top":"2rpx solid #DCDFE6"}},[a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOff.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-switch-button"}),a("el-link",{attrs:{href:"#",type:"danger"}},[t._v("登出")])],1)])],1)],1)],1),a("el-row",[a("i",{staticClass:"el-icon-setting setting",staticStyle:{"margin-right":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawerleft.apply(void 0,arguments)}}})])],1)])]),a("el-drawer",{staticClass:"drawerright",attrs:{visible:t.drawerVisibletwo,title:"Settings",size:t.drawerSize},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.drawerVisibletwo=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDrawerClose.apply(void 0,arguments)}}},[a("p",{staticStyle:{"text-align":"center"}},[a("b",[t._v("Choose Layouts")])]),a("el-row",[a("el-switch",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOptionChange("option1")}},model:{value:t.option1,callback:function(e){t.option1=e},expression:"option1"}}),a("span",[t._v("Light\n\t\t\t\t\t\tMode")]),a("br")],1),a("el-row",[a("el-switch",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOptionChange("option2")}},model:{value:t.option2,callback:function(e){t.option2=e},expression:"option2"}}),a("span",[t._v("Dark\n\t\t\t\t\t\tMode")])],1)],1),a("div",{staticClass:"ableta"},[a("my-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerVisible,expression:"drawerVisible"}],on:{viewIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)}}})],1),a("el-main",{style:{backgroundColor:t.baColr}},[a("withdraw-money",{on:{changekyc:function(e){arguments[0]=e=t.$handleEvent(e),t.changekyc.apply(void 0,arguments)},wmindex:function(e){arguments[0]=e=t.$handleEvent(e),t.wmindex.apply(void 0,arguments)}}})],1),a("el-footer",{style:{backgroundColor:t.footbg}},[a("div",{staticClass:"footer"},[t._v("Copyright 2023. Felement Sdn Bhd. All Right Reserved.")])])],1)],1)],1)},o=[]},a569:function(t,e,n){var a=n("22a7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0150182c",a,!0,{sourceMap:!1,shadowMode:!1})},aa80:function(t,e,n){"use strict";var a=n("a569"),i=n.n(a);i.a},b02e:function(t,e,n){"use strict";n.r(e);var a=n("777c"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b2f8:function(t,e,n){"use strict";var a=n("fa30"),i=n.n(a);i.a},d9b7:function(t,e,n){"use strict";n.r(e);var a=n("8a7d"),i=n("b02e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b2f8");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"1601599c",null,!1,a["a"],void 0);e["default"]=r.exports},e056:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-25890724]{\n\t\t/* position: fixed; */width:100%;height:100%;overflow:hidden}[data-v-25890724] table{width:auto!important}[data-v-25890724] .el-table__empty-block{width:auto!important}@page{margin-bottom:20;margin-top:20}\n\t/* .perpage {page-break-after:always;} */\n\t/* /deep/#print p span{\n\t\toverflow-x: hidden !important;\n\t\tmax-width: 100% !important;\n\t\twhite-space: normal !important;\n\t} */.colorb[data-v-25890724]{background-color:#7f7f7f}.placeholder[data-v-25890724]{width:%?400?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.newplaceholder[data-v-25890724]{width:%?128?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.fullsc[data-v-25890724],\n\t.setting[data-v-25890724]{font-size:%?50?%;margin-right:%?20?%;color:#000;margin-top:%?20?%}.el-dropdown-link[data-v-25890724]{cursor:pointer;color:#409eff}.setting[data-v-25890724]{margin-left:%?20?%;display:inline-block;-webkit-animation:rotation-data-v-25890724 2s infinite linear;animation:rotation-data-v-25890724 2s infinite linear}.drawerright[data-v-25890724]{font-weight:1000}@-webkit-keyframes rotation-data-v-25890724{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-data-v-25890724{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.el-menu-vertical-demo[data-v-25890724]:not(.el-menu--collapse){width:%?400?%;min-height:%?800?%}.userLogo[data-v-25890724]{margin-left:%?10?%;padding:%?30?%;width:%?100?%;height:%?100?%}.userLo[data-v-25890724]{padding:%?22?%;width:90%;height:%?80?%;margin-left:%?20?%;margin-top:%?18?%}.el-switch[data-v-25890724]{margin-left:%?25?%}.el-row span[data-v-25890724]{display:inline-block;margin-top:%?20?%;margin-left:%?20?%}.changeStatu[data-v-25890724],\n\t.changeStatuw[data-v-25890724]{font-size:%?45?%;margin-top:%?30?%;cursor:pointer}@media screen and (max-width:1400px) and (min-width:990px){.userLo[data-v-25890724]{width:73%}}@media screen and (max-width:990px){.el-header[data-v-25890724]{height:%?120?%!important;width:100%!important;position:fixed;top:0}.el-main[data-v-25890724]{height:85vh!important;margin:%?120?% %?0?%}.el-footer[data-v-25890724]{bottom:0;position:fixed;width:100%!important}\n/* \n\t\t.homepage {\n\t\t\twidth: 100% !important;\n\t\t} */.changeStatu[data-v-25890724]{display:none}.changeStatuw[data-v-25890724]{display:block!important}.asos[data-v-25890724],\n\t\t.fullsc[data-v-25890724],\n\t\t.placeholder[data-v-25890724]{display:none}.changeStatus1[data-v-25890724]{display:block!important;font-size:%?50?%;margin-top:%?30?%;cursor:pointer;width:100%}.smalllogo[data-v-25890724]{width:%?55?%;height:%?55?%}.atvatr[data-v-25890724]{width:84%;left:%?0?%}.ableta[data-v-25890724]{position:fixed;width:%?400?%;top:%?100?%;margin-top:%?20?%;z-index:99}.newplaceholder[data-v-25890724]{width:%?0?%;height:100vh;visibility:hidden\n\t\t\t/* 或者使用 opacity: 0; */}.footer[data-v-25890724]{font-size:%?20?%}}\n\t/* .homepage {\n\t\twidth: 80%;\n\t\theight: 100vh;\n\t} */.changeStatus1[data-v-25890724],\n\t.changeStatuw[data-v-25890724]{display:none}.el-main[data-v-25890724]{height:87vh;\n\t\t/* position: absolute; */\n\t\t/* top: 100rpx; */\n\t\t/* mar */\n\t\t/* margin:120rpx 0rpx; */z-index:1\n\t\t/* width: 100%; */}.el-menu[data-v-25890724]{\n\t\t/* position: fixed; */\n\t\t/* right: 400rpx; */}.headerTop[data-v-25890724]{display:flex;justify-content:space-between;height:%?120?%;background-color:#fff}.el-header[data-v-25890724]{height:%?120?%;\n\t\t/* position: fixed; */\n\t\t/* top:0; */\n\t\t/* left: 400rpx; */z-index:999\n\t\t/* width: 90vw; */}.el-footer[data-v-25890724]{\n\t\t/* position: fixed; */\n\t\t/* bottom: 0; */\n\t\t/* left: 0; */height:%?120?%;text-align:center;z-index:999\n\t\t/* width: 88%; */}.footer[data-v-25890724]{height:%?120?%;line-height:%?120?%;\n\t\t/* text-align: center; */font-size:%?26?%;color:#5b626b}\n\t/* 设置滚动条的轨道样式 */[data-v-25890724]::-webkit-scrollbar{width:%?8?%\n\t\t/* 滚动条宽度 */}\n\t/* 设置滚动条的滑块样式 */[data-v-25890724]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t\t/* 滑块背景颜色 */border-radius:4px\n\t\t/* 滑块圆角 */}\n\t/* 设置滚动条的滑道样式 */[data-v-25890724]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t\t/* 滑道背景颜色 */border-radius:4px\n\t\t/* 滑道圆角 */}",""]),t.exports=e},fa30:function(t,e,n){var a=n("0347");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("bb1fc7a2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);