(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-announcement-table-announcement-table~pages-personalPage-personalPage"],{3029:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),o=a(n("1da1"));n("a9e3");var s={data:function(){return{tableData:[],andiable:!0,id:0,title:"",time:"",detail:"",img:"",counttotal:0,currentPage:1,pageSize:uni.getStorageSync("pageSize"),size:"",adstatusa:!1}},mounted:function(){this.getannoumn()},methods:{resert:function(){this.andiable=!0},handleSizeChange:function(t){uni.setStorageSync("pageSize",t),this.pageSize=t,this.getannoumn()},handleCurrentChange:function(t){this.currentPage=t,this.getannoumn()},getannoumn:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page="+t.currentPage+"&pagesize=10").then((function(e){var n=e.status,a=e.result,i=a.list,o=a.total;t.tableData=i,t.counttotal=Number(o),0==Number(o)||0==n?t.paginations=!1:t.paginations=!0,t.adstatusa=!0})).catch((function(t){console.log(t)}))},gotodetail:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function n(){var a;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,n.next=3,a.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticedetail&id="+t.id).then((function(t){console.log(t);var e=t.result,n=e.id,i=e.title,o=e.detail,s=e.thumb,l=e.createtime;a.id=n,a.title=i,a.detail=o,a.img=s,a.time=l})).catch((function(t){console.log(t)}));case 3:a.andiable=!1;case 4:case"end":return n.stop()}}),n)})))()}}};e.default=s},"334d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'*[data-v-6ca3fd37]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-6ca3fd37]{\n\t/* 样式规则 */height:100vh;background-color:#fff;width:100%;z-index:9999}.overlay[data-v-6ca3fd37]{position:fixed; /* 声明为固定定位 */top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5); /* 半透明黑色背景 */z-index:999 /* 设置层级关系，使其在其他元素上方 */}.my-drawer[data-v-6ca3fd37]{position:relative; /* 声明为相对定位 */z-index:1000 /* 设置层级关系，使其在遮盖层上方 */}.my-drawer[data-v-6ca3fd37]::before{content:""; /* 使用伪元素来实现高亮效果 */position:absolute; /* 声明为绝对定位 */top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5); /* 半透明白色背景 */z-index:-1 /* 设置层级关系，使其在内容下方 */}',""]),t.exports=e},"552e":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[t.andiable?n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.adstatusa,expression:"adstatusa"}]},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:!0},on:{"row-click":function(e){arguments[0]=e=t.$handleEvent(e),t.gotodetail.apply(void 0,arguments)}}},[n("el-table-column",{attrs:{prop:"title",label:t.$t("home.title"),align:"center"}}),n("el-table-column",{attrs:{prop:"createtime",label:t.$t("home.updatetime"),align:"center"}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.adstatusa,expression:"!adstatusa"}]},[n("el-skeleton",{attrs:{rows:20,animated:!0}})],1)]):n("div",[n("el-main",{staticStyle:{padding:"0"}},[n("el-card",{attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"card-header"},[n("span",[n("b",[t._v(t._s(t.$t("table.announcement")))])]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.resert.apply(void 0,arguments)}}},[t._v(t._s(t.$t("table.raturnhome")))])],1)]},proxy:!0}])},[n("div",{staticClass:"announcement",staticStyle:{"font-size":"28rpx"}},[n("div",{staticStyle:{"margin-right":"30rpx"}},[n("b",[t._v(t._s(t.$t("table.announcementtitle"))+":")])]),n("div",[t._v(t._s(t.title))])]),n("div",{staticClass:"announcement",staticStyle:{"font-size":"28rpx","margin-top":"20rpx"}},[n("div",{staticStyle:{"margin-right":"30rpx"}},[n("b",[t._v(t._s(t.$t("table.announcementtime"))+":")])]),n("div",[t._v(t._s(t.time))])]),n("div",{staticClass:"announcement",staticStyle:{"font-size":"28rpx","margin-top":"20rpx"}},[n("div",{staticStyle:{"margin-right":"30rpx"}},[n("b",[t._v(t._s(t.$t("table.announcementcontent"))+":")])]),n("div",{domProps:{innerHTML:t._s(t.detail)}})])])],1)],1)])},i=[]},"5e03":function(t,e,n){"use strict";n.r(e);var a=n("97de"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e9a1");var s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"6ca3fd37",null,!1,a["a"],void 0);e["default"]=l.exports},"71a2":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".announcement[data-v-09f79d87]{display:flex}@media screen and (max-width:990px){.announcement[data-v-09f79d87]{display:grid}}[data-v-09f79d87] .el-descriptions__table{width:100%!important}.text[data-v-09f79d87]{font-size:%?28?%}.item[data-v-09f79d87]{margin-bottom:%?36?%}.pagination[data-v-09f79d87]{display:flex;justify-content:center;margin-top:%?20?%}",""]),t.exports=e},"745d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},close:function(){this.$emit("handleClose",!1)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};e.default=a},"7fcc":function(t,e,n){"use strict";n.r(e);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"854b":function(t,e,n){"use strict";n.r(e);var a=n("3029"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"97de":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:t.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.ewallets")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchasehistory.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdraw.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlewithdrawStatus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebonus.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlekycgo.apply(void 0,arguments)}}},[t._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.shopping")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshoppingAddress.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.address")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleshopping.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlepurchase.apply(void 0,arguments)}}},[t._v(t._s(t.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("menu.announcementtable")))])])],1)],1)])},i=[]},bd1b:function(t,e,n){var a=n("71a2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5be508ec",a,!0,{sourceMap:!1,shadowMode:!1})},bf49:function(t,e,n){"use strict";var a=n("bd1b"),i=n.n(a);i.a},e9a1:function(t,e,n){"use strict";var a=n("ef52"),i=n.n(a);i.a},ef52:function(t,e,n){var a=n("334d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("132f72a9",a,!0,{sourceMap:!1,shadowMode:!1})},fef9:function(t,e,n){"use strict";n.r(e);var a=n("552e"),i=n("854b");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("bf49");var s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"09f79d87",null,!1,a["a"],void 0);e["default"]=l.exports}}]);