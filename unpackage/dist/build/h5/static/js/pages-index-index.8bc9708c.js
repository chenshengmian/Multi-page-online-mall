(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"39e8":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("504c")),o={components:{WebsiteHomepage:n.default},data:function(){return{}},mounted:function(){},methods:{}};e.default=o},"3cec":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"home"},[a("el-container",[a("el-header",[a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[a("img",{staticStyle:{width:"100rpx",height:"100rpx","border-radius":"50%"},attrs:{src:t.logo,alt:""}})]),a("div",{staticClass:"sreach"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:t.input3,callback:function(e){t.input3=e},expression:"input3"}},[a("el-button",{staticClass:"imgsreach",attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)])]),a("div",[a("el-main",[a("el-card",[a("el-tabs",{attrs:{stretch:!0},on:{"tab-click":function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[t._l(t.tabbleTap,(function(t){return[a("el-tab-pane",{attrs:{label:t.name,name:t.id}})]}))],2),a("div",{staticClass:"carousel-container"},[a("el-carousel",{attrs:{interval:3e3,arrow:"always"}},t._l(t.carouselmap,(function(t){return a("el-carousel-item",{staticStyle:{width:"100%",height:"100%"}},[a("img",{staticClass:"carousel-image",attrs:{src:t.thumb,alt:""}})])})),1)],1),a("el-dialog",{attrs:{title:t.adtitle,visible:t.dialogTableVisible,modal:!1,width:t.diawidth},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.dialogTableVisible=e}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.have,expression:"have"}],staticClass:"images",attrs:{src:t.adimage}}),a("div",{staticStyle:{padding:"14px"}},[a("span",{domProps:{innerHTML:t._s(t.adcontont)}}),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),a("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSure.apply(void 0,arguments)}}},[t._v("确定")])],1)])]),a("div",{staticClass:"scrolling-container",staticStyle:{"background-color":"#E8F3FE",margin:"20rpx 0rpx",height:"80rpx"}},[a("vue-seamless-scroll",{staticClass:"scroll",attrs:{data:t.subtitles,"class-option":t.defaultOption}},t._l(t.subtitles,(function(e){return a("div",{staticClass:"item",staticStyle:{cursor:"pointer","line-height":"80rpx"}},[a("div",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handeladDetail(e.id)}}},[t._v(t._s(e.title))])])})),0)],1),a("el-empty",{directives:[{name:"show",rawName:"v-show",value:t.prounddatastatus,expression:"prounddatastatus"}],attrs:{"image-size":200}}),a("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.prounddatastatus,expression:"!prounddatastatus"}]},t._l(t.prounddata,(function(e){return a("el-col",{attrs:{span:t.span}},[a("el-card",{attrs:{"body-style":{padding:"20px"}}},[a("img",{staticClass:"image",attrs:{src:e.thumb}}),a("div",{staticStyle:{padding:"14px"}},[a("span",[t._v(t._s(e.title))]),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"},[t._v("MYR "+t._s(e.marketprice))]),a("el-button",{staticClass:"button",attrs:{type:"text"},nativeOn:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handelDetail(e.id)}}},[t._v("购买")])],1)])])],1)})),1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.prounddatastatus,expression:"!prounddatastatus"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[3,6,9,12],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next",total:t.counttotal},on:{"size-change":function(e){arguments[0]=e=t.$handleEvent(e),t.handleSizeChange.apply(void 0,arguments)},"current-change":function(e){arguments[0]=e=t.$handleEvent(e),t.handleCurrentChange.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)],1)},n=[]},4973:function(t,e,a){var i=a("7501");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e2bd0402",i,!0,{sourceMap:!1,shadowMode:!1})},"504c":function(t,e,a){"use strict";a.r(e);var i=a("3cec"),n=a("fc43");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("6185");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"17bff0e8",null,!1,i["a"],void 0);e["default"]=r.exports},5654:function(t,e,a){"use strict";var i=a("c9e4"),n=a.n(i);n.a},6185:function(t,e,a){"use strict";var i=a("4973"),n=a.n(i);n.a},"685d":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={name:"website-homepage",data:function(){return{prounddatastatus:!1,dialogTableVisible:!1,input3:"",tabbleTap:{},activeIndex:0,carouselmap:{},logo:"",span:8,currentPage:1,pageSize:3,cate:"",counttotal:0,prounddata:"",homediable:!0,imgt:"",title:"",total:"",price:"",imgarr:[],subtitles:[],defaultOption:{step:.4,limitMoveNum:2,hoverStop:!0,direction:0,openWatch:!0,singleHeight:30,singleWidth:0,waitTime:1500},adtitle:"",adimage:"",adcontont:"",currentDate:"",have:!0,diawidth:"30%",loading:!0,content:""}},computed:{defaultOption1:function(){return{step:.4,limitMoveNum:this.subtitles.length,hoverStop:!0,direction:0,openWatch:!0,singleHeight:0,singleWidth:0,waitTime:1500}}},mounted:function(){this.getcateList(),this.getScreenWidth(),window.addEventListener("resize",this.handleResize),this.getproundlist()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleSure:function(){this.dialogTableVisible=!1},handeladDetail:function(t){var e=this;e.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticedetail&id="+t).then((function(t){var a=t.status,i=t.result,n=i.detail,o=i.createtime,s=i.title,r=i.thumb;1==a?(e.dialogTableVisible=!0,e.adtitle=s,""==r?e.have=!1:(e.have=!0,e.adimage=r),e.adcontont=n,e.currentDate=o):e.$message.error("查看详情失败")})).catch((function(t){console.log(t)}))},handlelogo:function(){uni.navigateTo({url:"/pages/userLogin/userLogin"})},changePhoto:function(t){console.log(t);this.imgt=this.imgarr[t]},resert:function(){this.homediable=!0},handelDetail:function(t){uni.navigateTo({url:"/pages/homepageDatail/homepageDatail?id="+t})},getcateList:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodscate&pagesize=100&page=1").then((function(e){var a=e.result.list;t.tabbleTap=a})).catch((function(t){console.log(t)})),t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner").then((function(e){var a=e.result,i=a.list,n=a.shopmes.logo;t.carouselmap=i,t.logo=n})).catch((function(t){console.log(t)})),t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page=1&pagesize=10").then((function(e){var a=e.status,i=e.result.list;if(1==i.length){var n;n=[i[0],i[0]],t.subtitles=n}else t.subtitles=i;1==a&&(t.loading=!1)})).catch((function(t){console.log(t)}))},handleSelect:function(t,e){this.cate=this.activeIndex,this.getproundlist()},handleSizeChange:function(t){this.pageSize=t,this.getproundlist()},handleCurrentChange:function(t){this.currentPage=t,this.getproundlist()},getproundlist:function(){var t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodslist&page="+t.currentPage+"&pagesize="+t.pageSize+"&cate="+t.cate).then((function(e){console.log(e);e.status;var a=e.result,i=a.list,n=a.total;t.prounddata=i,t.counttotal=Number(n),0==Number(n)?t.prounddatastatus=!0:t.prounddatastatus=!1})).catch((function(t){console.log(t)}))},getScreenWidth:function(){this.screenWidth=window.innerWidth,this.screenWidth<=990?(this.span=24,this.diawidth="90%"):(this.span=8,this.diawidth="30%")},handleResize:function(){var t=window.innerWidth;t!==this.screenWidth&&(this.screenWidth=t,console.log(t),t<=990?(this.span=24,this.diawidth="90%"):(this.span=8,this.diawidth="30%"))}}};e.default=i},7501:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.time[data-v-17bff0e8]{font-size:13px;color:#999}.bottom[data-v-17bff0e8]{margin-top:13px;line-height:12px}.button[data-v-17bff0e8]{padding:0;float:right}.images[data-v-17bff0e8]{width:%?200?%!important;height:%?200?%;display:block}.clearfix[data-v-17bff0e8]:before,\n.clearfix[data-v-17bff0e8]:after{display:table;content:""}.clearfix[data-v-17bff0e8]:after{clear:both}\n\n/* 外层盒子 */.scroll[data-v-17bff0e8]{height:30px;overflow:hidden;color:#409eff;font-size:%?30?%\n\t/* width: 300px; */\n\t/* background: rgb(138, 192, 186); */}\n\n/* 里面的每一条 */.item[data-v-17bff0e8]{height:30px;width:100%}\n\n/* .el-header{\n\tposition: fixed;\n\ttop: 0;\n\tright: 20%;\n\tleft: 10%;\n\twidth: 100%;\n\tz-index: 999;\n\tbackground-color: #fff;\n} */.announcement-item[data-v-17bff0e8]{flex-shrink:0;padding:0 10px;height:100%;line-height:50px;background-color:#f5f5f5}.announcement[data-v-17bff0e8]{height:50px;line-height:50px;text-align:center;background-color:#f5f5f5}.image-container[data-v-17bff0e8]{display:flex;flex-wrap:wrap}.product-image[data-v-17bff0e8]{width:200px;height:200px;object-fit:cover;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.product-image[data-v-17bff0e8]:hover{-webkit-transform:scale(1.2);transform:scale(1.2)\n\t/* 鼠标悬停时放大图片 */}.time[data-v-17bff0e8]{font-size:13px;color:#999}.bottom[data-v-17bff0e8]{margin-top:13px;line-height:12px}.button[data-v-17bff0e8]{padding:0;float:right}.image[data-v-17bff0e8]{width:40%;display:block}.clearfix[data-v-17bff0e8]:before,\n.clearfix[data-v-17bff0e8]:after{display:table;content:""}.clearfix[data-v-17bff0e8]:after{clear:both}.el-select[data-v-17bff0e8]{width:%?180?%}.sreach[data-v-17bff0e8]{width:50%}.el-menu-demo[data-v-17bff0e8]{width:100%!important}\n\n/* 设置滚动条的轨道样式 */[data-v-17bff0e8]::-webkit-scrollbar{width:8px\n\t/* 滚动条宽度 */}\n\n/* 设置滚动条的滑块样式 */[data-v-17bff0e8]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t/* 滑块背景颜色 */border-radius:4px\n\t/* 滑块圆角 */}\n\n/* 设置滚动条的滑道样式 */[data-v-17bff0e8]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t/* 滑道背景颜色 */border-radius:4px\n\t/* 滑道圆角 */}.input-with-select .el-input-group__prepend[data-v-17bff0e8]{background-color:#fff}.footer[data-v-17bff0e8]{height:%?120?%;background-color:#f5f5f5;line-height:%?120?%;text-align:center;font-size:%?26?%;width:100%;color:#5b626b}.header[data-v-17bff0e8]{width:100%;display:flex;justify-content:space-between;line-height:%?140?%}.el-carousel__item h3[data-v-17bff0e8]{color:#475669;font-size:14px;opacity:.75;line-height:200px;margin:0}.el-carousel__item[data-v-17bff0e8]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-17bff0e8]:nth-child(2n+1){background-color:#d3dce6}.carousel-image[data-v-17bff0e8]{width:100%;height:100%;object-fit:fill\n\t/* 适应方式，可根据需求选择合适的值，如：contain、cover、fill 等 */}.el-menu[data-v-17bff0e8]{display:flex;justify-content:space-between}.pagination[data-v-17bff0e8]{display:flex;justify-content:center;margin:%?35?% %?0?%}@media screen and (max-width:990px){[data-v-17bff0e8] .el-carousel__container{height:%?300?%}.el-carousel[data-v-17bff0e8]{height:%?300?%}\n\t\n\t/* .el-main{\n\t\theight: 100vh;\n\t} */.logo img[data-v-17bff0e8]{width:%?50?%}.sreach[data-v-17bff0e8]{width:86%!important}\n\n\n\t/* .logo {\n\t\twidth: 25% !important;\n\t} */.el-select[data-v-17bff0e8]{width:%?170?%}.el-input-group__append[data-v-17bff0e8]{width:50%!important}\n\n\t/* .home {\n\t\theight: 100vh;\n\t} */\n\n\t/* .carousel-container,.el-carousel,.el-carousel .el-carousel__container{\n\t\theight: 300rpx !important;\n\t\toverflow: hidden;\n\t} */}',""]),t.exports=e},9413:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={websiteHomepage:a("504c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content",staticStyle:{"background-color":"#F5F5F5"}},[a("div",{staticStyle:{display:"flex","justify-content":"center",width:"100%"}},[a("div",{staticClass:"homepage"},[a("website-homepage",{on:{getstatus:function(e){arguments[0]=e=t.$handleEvent(e),t.getstatus.apply(void 0,arguments)}}})],1)]),a("el-footer",[a("div",{staticClass:"footer"},[t._v("Copyright 2023. Felement Sdn Bhd. All Right Reserved.")])])],1)},o=[]},a4e0:function(t,e,a){"use strict";a.r(e);var i=a("39e8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b766:function(t,e,a){"use strict";a.r(e);var i=a("9413"),n=a("a4e0");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5654");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3edaffa5",null,!1,i["a"],void 0);e["default"]=r.exports},ba7c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".el-footer[data-v-3edaffa5]{height:%?120?%;line-height:%?120?%;width:100%;font-size:%?26?%;position:fixed;bottom:0;background-color:#fff!important;color:#5b626b;text-align:center}@media screen and (max-width:990px){.homepage[data-v-3edaffa5]{width:100%!important}}.homepage[data-v-3edaffa5]{width:80%}\n\n/* 设置滚动条的轨道样式 */[data-v-3edaffa5]::-webkit-scrollbar{width:8px\n\t/* 滚动条宽度 */}\n\n/* 设置滚动条的滑块样式 */[data-v-3edaffa5]::-webkit-scrollbar-thumb{background-color:#409eff;\n\t/* 滑块背景颜色 */border-radius:4px\n\t/* 滑块圆角 */}\n\n/* 设置滚动条的滑道样式 */[data-v-3edaffa5]::-webkit-scrollbar-track{background-color:#f1f1f1;\n\t/* 滑道背景颜色 */border-radius:4px\n\t/* 滑道圆角 */}",""]),t.exports=e},c9e4:function(t,e,a){var i=a("ba7c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2ae41122",i,!0,{sourceMap:!1,shadowMode:!1})},fc43:function(t,e,a){"use strict";a.r(e);var i=a("685d"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);