(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bonus-description-bonus-description"],{"0463":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("div",{staticClass:"gird-contails"},[a("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("span",[t._v(t._s(t.$t("menu.bonuseshelp")))])])]},proxy:!0}])},[a("div",[a("div",{staticClass:"searchs"},[a("div",{staticClass:"year"},[a("el-select",{attrs:{slot:"prepend",placeholder:t.$t("purse.Pleaseselect"),size:"medium"},slot:"prepend",model:{value:t.fyear,callback:function(e){t.fyear=e},expression:"fyear"}},t._l(t.yearArr,(function(t,e){return a("div",[a("el-option",{attrs:{label:t,value:t}})],1)})),0)],1),a("div",{staticClass:"month"},[a("el-select",{attrs:{slot:"prepend",placeholder:t.$t("purse.Pleaseselect"),size:"medium"},slot:"prepend",model:{value:t.fmouth,callback:function(e){t.fmouth=e},expression:"fmouth"}},t._l(12,(function(t){return a("div",{key:t,staticClass:"text item"},[a("el-option",{attrs:{label:t,value:t}})],1)})),0)],1),a("div",{staticClass:"year"},[a("el-select",{attrs:{slot:"prepend",placeholder:t.$t("purse.Pleaseselect"),size:"medium"},slot:"prepend",model:{value:t.lyear,callback:function(e){t.lyear=e},expression:"lyear"}},t._l(t.yearArr,(function(t,e){return a("div",[a("el-option",{attrs:{label:t,value:t}})],1)})),0)],1),a("div",{staticClass:"month"},[a("el-select",{attrs:{slot:"prepend",placeholder:t.$t("purse.Pleaseselect"),size:"medium"},slot:"prepend",model:{value:t.lmouth,callback:function(e){t.lmouth=e},expression:"lmouth"}},t._l(12,(function(t){return a("div",{key:t,staticClass:"text item"},[a("el-option",{attrs:{label:t,value:t}})],1)})),0)],1),a("div",{staticClass:"sumbit"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}}},[t._v(t._s(t.$t("purse.WithdrawalStatus")))])],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.bonusStatus,expression:"bonusStatus"}]},[a("div",{ref:"print"},[a("div",{staticClass:"bonuscontent"},[a("div",{staticClass:"text item bonusleft"},[a("div",[t._v(t._s(t.$t("purse.Dealernumber"))+" :"),a("span",{staticStyle:{"margin-left":"10rpx",display:"inline-block"}},[t._v(t._s(t.account))])]),a("div",[t._v(t._s(t.$t("purse.Dealername"))+" :"),a("span",{staticStyle:{"margin-left":"10rpx",display:"inline-block"}},[t._v(t._s(t.nickname))])]),a("div",[a("span",{staticStyle:{"margin-left":"24rpx",display:"inline-block"}},[t._v(t._s(t.$t("home.joiningDate"))+" :")]),a("span",{staticStyle:{"margin-left":"10rpx",display:"inline-block"}},[t._v(t._s(t.datatime))])]),a("div",[t._v(t._s(t.$t("purse.DealerPackage"))+" :"),a("span",{staticStyle:{"margin-left":"10rpx",display:"inline-block"}},[t._v(t._s(t.level))])]),a("div",[a("span",{staticStyle:{"margin-left":"78rpx",display:"inline-block"}},[t._v(t._s(t.$t("purse.level"))+" :")]),a("span",{staticStyle:{"margin-left":"10rpx",display:"inline-block"}},[t._v(t._s(t.levelname))])])])]),t.idStatus?a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"ID",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1+(t.currentPage-1)*t.pageSize))]}}],null,!1,3369914376)}),a("el-table-column",{attrs:{prop:"createtimestr",label:t.$t("purse.date"),align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:t.$t("purse.remark"),align:"center"}}),a("el-table-column",{attrs:{prop:"paystatusstr",label:t.$t("purse.Paymentstatus"),align:"center"}}),a("el-table-column",{attrs:{prop:"btypestr",label:t.$t("purse.Rewardtype"),align:"center"}}),a("el-table-column",{attrs:{prop:"price",label:t.$t("purse.bonus"),align:"center"}})],1):a("div",[a("el-card",{staticClass:"text item",attrs:{shadow:"never"}},[a("div",[a("b",[t._v(t._s(t.$t("purse.date")))])]),a("div",[a("b",[t._v(t._s(t.$t("purse.remark")))])]),a("div",[a("b",[t._v(t._s(t.$t("purse.Paymentstatus")))])]),a("div",[a("b",[t._v(t._s(t.$t("purse.Rewardtype")))])]),a("div",[a("b",[t._v(t._s(t.$t("purse.bonus")))])])]),t._l(t.tableData,(function(e){return[a("el-card",{staticClass:"text item",attrs:{shadow:"never"}},[a("div",[t._v(t._s(e.createtimestr))]),a("div",[t._v(t._s(e.remark))]),a("div",[t._v(t._s(e.paystatusstr))]),a("div",[t._v(t._s(e.btypestr))]),a("div",[t._v(t._s(e.price))])])]}))],2)],1),a("div",{staticClass:"pagination",staticStyle:{display:"flex","justify-content":"center","margin-top":"20rpx"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pageSize,"hide-on-single-page":t.paginations,layout:"total, sizes, prev, pager, next",total:t.counttotal},on:{"size-change":function(e){arguments[0]=e=t.$handleEvent(e),t.handleSizeChange.apply(void 0,arguments)},"current-change":function(e){arguments[0]=e=t.$handleEvent(e),t.handleCurrentChange.apply(void 0,arguments)}}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.bonusStatus,expression:"!bonusStatus"}]},[a("el-skeleton",{attrs:{rows:15,animated:!0}})],1),a("div",{staticClass:"prints",staticStyle:{display:"flex","justify-content":"center"}},[a("i",{staticClass:"el-icon-printer",staticStyle:{"margin-top":"30rpx","font-size":"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCustom.apply(void 0,arguments)}}})])])],1)])},i=[]},2189:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".content[data-v-3a603155]{\n\t\t/* position: fixed; */width:100%;height:100%;overflow:hidden}[data-v-3a603155] table{width:auto!important}[data-v-3a603155] .el-table__empty-block{width:auto!important}@page{margin-bottom:20;margin-top:20}\n\t/* .perpage {page-break-after:always;} */\n\t/* /deep/#print p span{\n\t\toverflow-x: hidden !important;\n\t\tmax-width: 100% !important;\n\t\twhite-space: normal !important;\n\t} */.colorb[data-v-3a603155]{background-color:#7f7f7f}.placeholder[data-v-3a603155]{width:%?440?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.newplaceholder[data-v-3a603155]{width:%?128?%;height:100vh;visibility:hidden\n\t\t/* 或者使用 opacity: 0; */}.fullsc[data-v-3a603155],\n\t.setting[data-v-3a603155]{font-size:%?50?%;\n\t\t/* margin-right: 20rpx; */color:#000\n\t\t/* margin-top: 20rpx; */}.el-dropdown-link[data-v-3a603155]{cursor:pointer;color:#409eff}.setting[data-v-3a603155]{margin-left:%?20?%;display:inline-block;-webkit-animation:rotation-data-v-3a603155 2s infinite linear;animation:rotation-data-v-3a603155 2s infinite linear}.drawerright[data-v-3a603155]{font-weight:1000}@-webkit-keyframes rotation-data-v-3a603155{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-data-v-3a603155{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.el-menu-vertical-demo[data-v-3a603155]:not(.el-menu--collapse){width:%?440?%;min-height:%?800?%}.userLogo[data-v-3a603155]{margin-left:%?10?%;padding:%?30?%;width:%?100?%;height:%?100?%}.userLo[data-v-3a603155]{padding:%?22?%;width:90%;height:%?80?%;margin-left:%?20?%;margin-top:%?18?%}.el-switch[data-v-3a603155]{margin-left:%?25?%}.el-row span[data-v-3a603155]{display:inline-block;margin-top:%?20?%;margin-left:%?20?%}.changeStatu[data-v-3a603155],\n\t.changeStatuw[data-v-3a603155]{font-size:%?45?%;\n\t\t/* margin-top: 30rpx; */cursor:pointer}@media screen and (max-width:1400px) and (min-width:990px){.userLo[data-v-3a603155]{width:73%}}@media screen and (max-width:990px){.el-header[data-v-3a603155]{height:%?120?%!important;width:100%!important;position:fixed;top:0}.el-main[data-v-3a603155]{height:85vh!important;margin:%?120?% %?0?%}.el-footer[data-v-3a603155]{bottom:0;position:fixed;width:100%!important}\n/* \n\t\t.homepage {\n\t\t\twidth: 100% !important;\n\t\t} */.changeStatu[data-v-3a603155]{display:none}.changeStatuw[data-v-3a603155]{display:block!important}.asos[data-v-3a603155],\n\t\t.fullsc[data-v-3a603155],\n\t\t.placeholder[data-v-3a603155]{display:none}.changeStatus1[data-v-3a603155]{display:block!important;font-size:%?50?%;\n\t\t\t/* margin-top: 30rpx; */cursor:pointer;width:100%}.smalllogo[data-v-3a603155]{width:%?55?%;height:%?55?%}.atvatr[data-v-3a603155]{width:84%;left:%?0?%}.ableta[data-v-3a603155]{position:fixed;width:%?440?%;top:%?100?%;margin-top:%?20?%;z-index:99}.newplaceholder[data-v-3a603155]{width:%?0?%;height:100vh;visibility:hidden\n\t\t\t/* 或者使用 opacity: 0; */}.footer[data-v-3a603155]{font-size:%?20?%}}\n\t/* .homepage {\n\t\twidth: 80%;\n\t\theight: 100vh;\n\t} */.changeStatus1[data-v-3a603155],\n\t.changeStatuw[data-v-3a603155]{display:none}.el-main[data-v-3a603155]{height:87vh;\n\t\t/* position: absolute; */\n\t\t/* top: 100rpx; */\n\t\t/* mar */\n\t\t/* margin:120rpx 0rpx; */z-index:1\n\t\t/* width: 100%; */}.el-menu[data-v-3a603155]{\n\t\t/* position: fixed; */\n\t\t/* right: 400rpx; */}.headerTop[data-v-3a603155]{display:flex;justify-content:space-between;height:%?120?%;background-color:#fff}.el-header[data-v-3a603155]{height:%?120?%;\n\t\t/* position: fixed; */\n\t\t/* top:0; */\n\t\t/* left: 400rpx; */z-index:999\n\t\t/* width: 90vw; */}.el-footer[data-v-3a603155]{\n\t\t/* position: fixed; */\n\t\t/* bottom: 0; */\n\t\t/* left: 0; */height:%?120?%;text-align:center;z-index:999\n\t\t/* width: 88%; */}.footer[data-v-3a603155]{height:%?120?%;line-height:%?120?%;\n\t\t/* text-align: center; */font-size:%?26?%;color:#5b626b}\n\t/* 设置滚动条的轨道样式 */[data-v-3a603155]::-webkit-scrollbar{width:%?8?%\n\t\t/* 滚动条宽度 */}\n\t/* 设置滚动条的滑块样式 */[data-v-3a603155]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t\t/* 滑块背景颜色 */border-radius:4px\n\t\t/* 滑块圆角 */}\n\t/* 设置滚动条的滑道样式 */[data-v-3a603155]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t\t/* 滑道背景颜色 */border-radius:4px\n\t\t/* 滑道圆角 */}",""]),t.exports=e},"2f4b":function(t,e,a){"use strict";a.r(e);var n=a("7ab6"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"3b8a":function(t,e,a){var n=a("2189");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("58287724",n,!0,{sourceMap:!1,shadowMode:!1})},5374:function(t,e,a){"use strict";var n=a("3b8a"),i=a.n(n);i.a},"5d45":function(t,e,a){var n=a("e749");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("f841963e",n,!0,{sourceMap:!1,shadowMode:!1})},6017:function(t,e,a){"use strict";a.r(e);var n=a("f6ef"),i=a("2f4b");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("5374");var o=a("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"3a603155",null,!1,n["a"],void 0);e["default"]=l.exports},"7ab6":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),s=n(a("1da1")),o=n(a("983a")),l={components:{BinaryTree:o.default},data:function(){return{footesr:uni.getStorageSync("footer"),name:uni.getStorageSync("name"),isCollapse:!1,disable:!0,drawerVisible:!1,drawerVisibletwo:!1,circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",drawerSize:"60%",screenWidth:0,index:"1",classp:!0,option1:!0,option2:!1,isblock:!1,baColr:"#F2F2F2",hColr:"#FFFFFF",footbg:"#FAFAFA",topColor:"#FFFFFF",drawbg:"#FFFFFF",nodeid:"",todatail:{},username:"",width:"30%",radio:uni.getLocale()}},mounted:function(t){uni.setNavigationBarTitle({title:uni.getStorageSync("name")}),this.login(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleClose:function(t){this.drawerVisible=t},handleLangChange:function(t){uni.setLocale(t),this.$i18n.locale=t,this.$router.go(0)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},hanldeChangepass:function(){uni.navigateTo({url:"/pages/login-password/login-password"})},hanldeChangeEwalletspass:function(){uni.navigateTo({url:"/pages/wallet-password/wallet-password"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleCustomButton:function(){this.$print(this.$refs.print)},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})},login:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var a,n,s;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member").then((function(e){var n=e.status,i=e.result,s=i.avatar,o=i.nickname;i.adstatus;a.username=o,100==n&&(a.$message({message:t.$t("home.loginstatus"),center:!0}),uni.navigateTo({url:"/pages/userLogin/userLogin"})),a.circleUrl=s})).catch((function(t){console.log(t)}));case 3:n=uni.getStorageSync("tokenArray"),s=n.userinfo,{userid:s};case 5:case"end":return e.stop()}}),e)})))()},getdatail:function(t){t.id;var e=t.index;this.todatail=t,this.index=e},logOff:function(){this.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout").then((function(t){})),uni.clearStorageSync(),uni.navigateTo({url:"/pages/userLogin/userLogin"})},changeStatus:function(){this.isCollapse=!this.isCollapse,this.disable=!this.disable,this.classp=!this.classp},showDrawer:function(){this.drawerVisible=!this.drawerVisible},toggleFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},showDrawerleft:function(){this.drawerVisibletwo=!this.drawerVisibletwo},handleDrawerClose:function(){this.isblock=!1},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.drawerSize="60%",this.width="90%"):(this.drawerSize="15%",this.width="30%"))},handleOptionChange:function(t){"option1"===t?this.option2=!this.option1:"option2"===t&&(this.option1=!this.option2),1==this.option1?(this.baColr="#F2F2F2",this.hColr="#fff",this.footbg="#FAFAFA",this.topColor="#fff",this.drawbg="#fff"):(this.baColr="#1F2431",this.hColr="#7A6FBE",this.footbg="#323A4E",this.topColor="#7A6FBE",this.drawbg="#2A3142")},handleSelect:function(t){this.index=t,this.drawerVisible=!1}}};e.default=l},"96b4":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i=n(a("ade3")),s={name:"withdrawal-status",data:function(){var t;return t={idStatus:!0,fmouth:"",fyear:"",lmouth:"",lyear:"",yearArr:[],tableData:[],account:"",nickname:"",datatime:"",levelname:"",level:"",counttotal:0},(0,i.default)(t,"tableData",[]),(0,i.default)(t,"currentPage",1),(0,i.default)(t,"pageSize",uni.getStorageSync("pageSize")),(0,i.default)(t,"bonusStatus",!1),(0,i.default)(t,"paginations",!0),t},mounted:function(){this.getMounth(),this.getbonusInfo(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?this.idStatus=!1:this.idStatus=!0},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),this.idStatus=!(t<=990))},getMounth:function(){var t=new Date,e=t.getFullYear();this.yearArr=[e-2,e-1,e];var a=t.getMonth();this.fmouth=a+1,this.fyear=e,this.lmouth=a+1,this.lyear=e},handleCustom:function(){this.$print(this.$refs.print)},getbonusInfo:function(){var t="&syear="+this.fyear+"&smonth="+this.fmouth+"&eyear="+this.lyear+"&emonth="+this.lmouth+"&page="+this.currentPage+"&pagesize="+this.pageSize,e=this;e.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.bonusdesc"+t).then((function(t){console.log(t);var a=t.status;if(1==a){var n=t.result,i=n.list,s=n.total,o=n.membermes,l=o.email,r=o.nickname,d=o.jointime,c=o.bonuslevelmes,u=c.levelname,p=c.level;e.datatime=d,e.nickname=r,e.account=l,e.levelname=u,e.level=p,e.tableData=i,e.counttotal=Number(s),e.bonusStatus=!0}else{var h=t.result.message;e.$message.error(h)}})).catch((function(t){console.log(t)}))},handleSelect:function(){this.getbonusInfo()},handleSizeChange:function(t){uni.setStorageSync("pageSize",t),this.pageSize=t,this.getbonusInfo()},handleCurrentChange:function(t){this.currentPage=t,this.getbonusInfo()}}};e.default=s},"9a7f":function(t,e,a){"use strict";a.r(e);var n=a("96b4"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},b2bd:function(t,e,a){"use strict";var n=a("5d45"),i=a.n(n);i.a},e749:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"[data-v-165a77d0] .el-card__body{padding-top:0!important}.text[data-v-165a77d0]{font-size:14px}.item[data-v-165a77d0]{margin-bottom:18px}[data-v-165a77d0] table{width:auto!important}[data-v-165a77d0] .el-table__empty-block{width:auto!important}.bonusleft div[data-v-165a77d0]{margin-top:%?18?%}.tabletitle[data-v-165a77d0]{font-size:%?26?%;border-bottom:%?1?% solid #e9ecef;display:flex;justify-content:center;margin-top:%?30?%;margin-bottom:%?30?%}.bonustitle[data-v-165a77d0]{display:flex;justify-content:center}.bonuscontent[data-v-165a77d0]{display:flex;justify-content:center;font-size:%?26?%;margin:%?40?% %?0?%}.bonusright span[data-v-165a77d0]{display:inline-block}.bonusright[data-v-165a77d0]{display:flex;justify-content:space-between;border-bottom:%?1?% solid #e9ecef;padding:%?20?%}.month[data-v-165a77d0],\n.year[data-v-165a77d0]{margin-right:%?20?%}.yearmonth[data-v-165a77d0]{display:grid;grid-template-columns:3% 40% 10%\n}.searchs[data-v-165a77d0]{display:flex}@media screen and (max-width:990px){.searchs[data-v-165a77d0]{display:grid}.searchs div[data-v-165a77d0]{margin-top:%?15?%}.prints[data-v-165a77d0]{display:none!important}.yearmonth[data-v-165a77d0]{grid-template-columns:1fr}.yearmonth div[data-v-165a77d0]{margin-top:%?10?%}.bonuscontent[data-v-165a77d0]{display:grid;grid-template-columns:1fr;width:100%}.bonusleft[data-v-165a77d0]{margin-left:%?20?%}}",""]),t.exports=e},f6ef:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={myDrawer:a("5e03").default,bonusDescription:a("fa81").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("el-container",[a("el-menu",{staticClass:"el-menu-vertical-demo asos",attrs:{"default-active":"1-5-1",collapse:t.isCollapse},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}}},[a("div",{staticClass:"userLo"},[t._v(t._s(t.name))]),a("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-fold"}),t.disable?a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))]):t._e()]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),a("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),a("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),a("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),a("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-fold"}),t.disable?a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))]):t._e()]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),a("el-menu-item",{attrs:{index:"4-0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),a("el-menu-item",{attrs:{index:"4-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),a("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),a("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1),a("el-container",{staticClass:"conent"},[a("el-header",{style:{backgroundColor:t.hColr}},[a("div",{staticClass:"headerTop",style:{backgroundColor:t.topColor}},[a("div",{class:{colorb:t.isblock},staticStyle:{display:"flex","align-items":"center"}},[a("i",{staticClass:"el-icon-s-grid changeStatu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}}),a("i",{staticClass:"el-icon-s-grid changeStatus1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer.apply(void 0,arguments)}}})]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("el-avatar",{staticClass:" el-icon--right",staticStyle:{width:"65rpx",height:"65rpx"},attrs:{src:t.circleUrl}})],1),a("el-dropdown-menu",{staticClass:"atvatr",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{"border-bottom":"2rpx solid #DCDFE6"}},[t._v(t._s(t.username))]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangepass.apply(void 0,arguments)}}},[a("el-row",[a("el-dropdown-item",[a("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newloginPassword")))])],1)],1),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hanldeChangeEwalletspass.apply(void 0,arguments)}}},[a("el-row",[a("el-dropdown-item",[a("i",{staticClass:"el-icon-user-solid"}),t._v(t._s(t.$t("menu.newEwallectPassword")))])],1)],1),a("el-row",[a("el-dropdown-item",{staticStyle:{"border-top":"2rpx solid #DCDFE6"}},[a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOff.apply(void 0,arguments)}}},[a("i",{staticClass:"el-icon-switch-button"}),a("el-link",{attrs:{href:"#",type:"danger"}},[t._v(t._s(t.$t("menu.logoff")))])],1)])],1)],1)],1),a("el-row",[a("i",{staticClass:"el-icon-setting setting",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawerleft.apply(void 0,arguments)}}})])],1)])]),a("el-drawer",{staticClass:"drawerright",attrs:{visible:t.drawerVisibletwo,title:t.$t("home.Settings"),size:t.drawerSize},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.drawerVisibletwo=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDrawerClose.apply(void 0,arguments)}}},[a("p",{staticStyle:{"text-align":"center"}},[a("b",[t._v(t._s(t.$t("home.Selectlanguage")))])]),a("el-radio-group",{on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLangChange.apply(void 0,arguments)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[a("el-radio",{attrs:{label:"en"}},[a("b",[t._v(t._s(t.$t("locale.en")))])])],1),a("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[a("el-radio",{attrs:{label:"zh-Hans"}},[a("b",[t._v(t._s(t.$t("locale.zhHans")))])])],1),a("div",{staticStyle:{"margin-left":"40rpx","margin-top":"40rpx"}},[a("el-radio",{attrs:{label:"zh-Hant"}},[a("b",[t._v(t._s(t.$t("locale.zhHant")))])])],1)])],1),a("div",{staticClass:"ableta"},[a("my-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerVisible,expression:"drawerVisible"}],on:{viewIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)},handleClose:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}})],1),a("el-main",{style:{backgroundColor:t.baColr}},[a("bonus-description")],1),a("el-footer",{style:{backgroundColor:t.footbg}},[a("div",{staticClass:"footer"},[t._v(t._s(t.footesr))])])],1)],1)],1)},s=[]},fa81:function(t,e,a){"use strict";a.r(e);var n=a("0463"),i=a("9a7f");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("b2bd");var o=a("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"165a77d0",null,!1,n["a"],void 0);e["default"]=l.exports}}]);