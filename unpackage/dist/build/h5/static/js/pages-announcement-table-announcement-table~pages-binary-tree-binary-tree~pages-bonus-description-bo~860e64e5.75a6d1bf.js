(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-announcement-table-announcement-table~pages-binary-tree-binary-tree~pages-bonus-description-bo~860e64e5"],{2909:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e)||(0,i.default)(e)||(0,o.default)(e)||(0,r.default)()};var a=s(n("6005")),i=s(n("db90")),o=s(n("06c5")),r=s(n("3427"));function s(e){return e&&e.__esModule?e:{default:e}}},"31eb":function(e,t,n){"use strict";n.r(t);var a=n("fa05"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"32e3":function(e,t,n){var a=n("75ba");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("2679cde1",a,!0,{sourceMap:!1,shadowMode:!1})},"334d":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'*[data-v-6ca3fd37]{padding:%?0?%;margin:%?0?%}.my-drawer[data-v-6ca3fd37]{\n\t/* 样式规则 */height:100vh;background-color:#fff;width:100%;z-index:9999}.overlay[data-v-6ca3fd37]{position:fixed; /* 声明为固定定位 */top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5); /* 半透明黑色背景 */z-index:999 /* 设置层级关系，使其在其他元素上方 */}.my-drawer[data-v-6ca3fd37]{position:relative; /* 声明为相对定位 */z-index:1000 /* 设置层级关系，使其在遮盖层上方 */}.my-drawer[data-v-6ca3fd37]::before{content:""; /* 使用伪元素来实现高亮效果 */position:absolute; /* 声明为绝对定位 */top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5); /* 半透明白色背景 */z-index:-1 /* 设置层级关系，使其在内容下方 */}',""]),e.exports=t},3427:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("d9e2"),n("d401")},"37eb":function(e,t,n){"use strict";n.r(t);var a=n("8886"),i=n("bc00");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("7871");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"aa4f8714",null,!1,a["a"],void 0);t["default"]=s.exports},5091:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.canIUseCanvas2d=function(){return!1},t.compareVersion=o,t.convertTouchesToArray=function(e){if(Array.isArray(e))return e;if("object"===(0,i.default)(e)&&null!==e)return Object.values(e);return e},t.devicePixelRatio=void 0,t.getRect=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="boundingClientRect",a=t.context,i=t.type,o=void 0===i?n:i;return new Promise((function(t,i){var r=uni.createSelectorQuery().in(a).select(e),s=function(e){e?t(e):i()};o==n?r[o](s).exec():r[o]({node:!0,size:!0,rect:!0},s).exec()}))},t.sleep=function(e){return new Promise((function(t){setTimeout((function(){t(!0)}),e)}))},t.wrapTouch=function(e){for(var t=0;t<e.touches.length;++t){var n=e.touches[t];n.offsetX=n.x,n.offsetY=n.y}return e};var i=a(n("53ca"));function o(e,t){e=e.split("."),t=t.split(".");var n=Math.max(e.length,t.length);while(e.length<n)e.push("0");while(t.length<n)t.push("0");for(var a=0;a<n;a++){var i=parseInt(e[a],10),o=parseInt(t[a],10);if(i>o)return 1;if(i<o)return-1}return 0}n("14d9"),n("e25e"),n("07ac"),n("d3b7"),n("ac1f");uni.getSystemInfoSync();var r=uni.getSystemInfoSync().pixelRatio;t.devicePixelRatio=r},"5e03":function(e,t,n){"use strict";n.r(t);var a=n("97de"),i=n("7fcc");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e9a1");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"6ca3fd37",null,!1,a["a"],void 0);t["default"]=s.exports},6005:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(Array.isArray(e))return(0,a.default)(e)};var a=function(e){return e&&e.__esModule?e:{default:e}}(n("6b75"))},"745d":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isCollapse:!1}},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},close:function(){this.$emit("handleClose",!1)},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},handlepurchasehistory:function(){uni.navigateTo({url:"/pages/wallet-records/wallet-records"})},handleperson:function(){uni.navigateTo({url:"/pages/personalPage/personalPage"})},handlewithdraw:function(){uni.navigateTo({url:"/pages/withdraw-money/withdraw-money"})},handlewithdrawStatus:function(){uni.navigateTo({url:"/pages/withdrawal-status/withdrawal-status"})},handlebonus:function(){uni.navigateTo({url:"/pages/bonus-description/bonus-description"})},handlekycgo:function(){uni.navigateTo({url:"/pages/know-yourCustomer/know-yourCustomer"})},handlebinarytree:function(){uni.navigateTo({url:"/pages/binary-tree/binary-tree"})},handleannucement:function(){uni.navigateTo({url:"/pages/announcement-table/announcement-table"})},handleProduct:function(){uni.navigateTo({url:"/pages/product-purchase/product-purchase"})},handlepurchase:function(){uni.navigateTo({url:"/pages/purchase-history/purchase-history"})}}};t.default=a},"75ba":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".lime-echart[data-v-aa4f8714]{position:relative;\nwidth:100%;height:100%;\n}.lime-echart__canvas[data-v-aa4f8714]{\nwidth:100%;height:100%;\n}\n.lime-echart__mask[data-v-aa4f8714]{position:absolute;width:100%;height:100%;left:0;top:0;z-index:1}\n",""]),e.exports=t},7871:function(e,t,n){"use strict";var a=n("32e3"),i=n.n(a);i.a},"7fcc":function(e,t,n){"use strict";n.r(t);var a=n("745d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},8886:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canvasId?n("v-uni-view",{ref:"limeEchart",staticClass:"lime-echart",style:e.customStyle,attrs:{"aria-label":e.ariaLabel}},[e.use2dCanvas?n("v-uni-canvas",{staticClass:"lime-echart__canvas",style:e.canvasStyle,attrs:{type:"2d",id:e.canvasId,"disable-scroll":e.isDisableScroll},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStart.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchMove.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEnd.apply(void 0,arguments)}}}):n("v-uni-canvas",{staticClass:"lime-echart__canvas",style:e.canvasStyle,attrs:{width:e.nodeWidth,height:e.nodeHeight,"canvas-id":e.canvasId,id:e.canvasId,"disable-scroll":e.isDisableScroll},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStart.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchMove.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEnd.apply(void 0,arguments)}}}),e.isPC?n("v-uni-view",{staticClass:"lime-echart__mask",on:{mousedown:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStart.apply(void 0,arguments)},mousemove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchMove.apply(void 0,arguments)},mouseup:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEnd.apply(void 0,arguments)},touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStart.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchMove.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEnd.apply(void 0,arguments)}}}):e._e(),e.isOffscreenCanvas?n("v-uni-canvas",{style:e.offscreenStyle,attrs:{"canvas-id":e.offscreenCanvasId}}):e._e()],1):e._e()},i=[]},"95c3":function(e,t,n){"use strict";var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.Canvas=void 0,t.dispatch=function(e,t){var n=t.x,a=t.y,i=t.wheelDelta;this.dispatch(e,{zrX:n,zrY:a,zrDelta:i,preventDefault:function(){},stopPropagation:function(){}})},t.setCanvasCreator=function(e,t){var n=t.canvas,a=t.node;if(e&&!e.registerPreprocessor)return console.warn("echarts 版本不对或未传入echarts，vue3请使用esm格式");e.registerPreprocessor((function(e){e&&e.series&&(e.series.length>0?e.series.forEach((function(e){e.progressive=0})):"object"===(0,o.default)(e.series)&&(e.series.progressive=0))})),e.setPlatformAPI&&e.setPlatformAPI({loadImage:n.setChart?function(e,t,n){var i=null;return a&&a.createImage?(i=a.createImage(),i.onload=t.bind(i),i.onerror=n.bind(i),i.src=e,i):(i=new l,i.onload=t.bind(i),i.onerror=n.bind(i),i.src=e,i)}:null,createCanvas:function(){var e="createOffscreenCanvas";return uni.canIUse(e)&&uni[e]?uni[e]({type:"2d"}):n}})},n("14d9"),n("d3b7"),n("159b"),n("a434"),n("7a82"),n("fb6a"),n("e25e"),n("ac1f"),n("466d");var i=a(n("2909")),o=a(n("53ca")),r=a(n("d4ec")),s=a(n("bee2")),c={},u=function(){function e(){(0,r.default)(this,e),this.__events={}}return(0,s.default)(e,[{key:"on",value:function(e,t){if(e&&t){var n=this.__events[e]||[];n.push(t),this.__events[e]=n}}},{key:"emit",value:function(e,t){var n=this;if(e.constructor===Object&&(t=e,e=t&&t.type),e){var a=this.__events[e];a&&a.length&&a.forEach((function(e){e.call(n,t)}))}}},{key:"off",value:function(e,t){var n=this.__events,a=n[e];if(a&&a.length)if(t)for(var i=0,o=a.length;i<o;i++)a[i]===t&&(a.splice(i,1),i--);else delete n[e]}}]),e}(),l=function(){function e(){(0,r.default)(this,e),this.currentSrc=null,this.naturalHeight=0,this.naturalWidth=0,this.width=0,this.height=0,this.tagName="IMG"}return(0,s.default)(e,[{key:"src",get:function(){return this.currentSrc},set:function(e){var t=this;this.currentSrc=e,uni.getImageInfo({src:e,success:function(e){t.naturalWidth=t.width=e.width,t.naturalHeight=t.height=e.height,t.onload()},fail:function(){t.onerror()}})}}]),e}(),h=function(){function e(t,n,a){(0,r.default)(this,e),this.tagName="canvas",this.com=n,this.canvasId=a,this.ctx=t}return(0,s.default)(e,[{key:"width",get:function(){return this.com.offscreenWidth||0},set:function(e){this.com.offscreenWidth=e}},{key:"height",get:function(){return this.com.offscreenHeight||0},set:function(e){this.com.offscreenHeight=e}},{key:"getContext",value:function(e){return this.ctx}},{key:"getImageData",value:function(){var e=this;return new Promise((function(t,n){e.com.$nextTick((function(){uni.canvasGetImageData({x:0,y:0,width:e.com.offscreenWidth,height:e.com.offscreenHeight,canvasId:e.canvasId,success:function(e){t(e)},fail:function(e){n(e)}},e.com)}))}))}}]),e}(),d=function(){function e(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,r.default)(this,e),c[n.canvasId]={ctx:t},this.canvasId=n.canvasId,this.chart=null,this.isNew=a,this.tagName="canvas",this.canvasNode=i,this.com=n,a||this._initStyle(t),this._initEvent(),this._ee=new u}return(0,s.default)(e,[{key:"getContext",value:function(e){if("2d"===e)return this.ctx}},{key:"setAttribute",value:function(e,t){"aria-label"===e&&(this.com["ariaLabel"]=t)}},{key:"setChart",value:function(e){this.chart=e}},{key:"createOffscreenCanvas",value:function(e){if(!this.children){this.com.isOffscreenCanvas=!0,this.com.offscreenWidth=e.width||300,this.com.offscreenHeight=e.height||300;var t=this.com,n=this.com.offscreenCanvasId,a=uni.createCanvasContext(n,this.com);this._initStyle(a),this.children=new h(a,t,n)}return this.children}},{key:"appendChild",value:function(e){console.log("child",e)}},{key:"dispatchEvent",value:function(e,t){return"object"==(0,o.default)(e)?this._ee.emit(e.type,e):this._ee.emit(e,t),!0}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"addEventListener",value:function(e,t){this._ee.on(e,t)}},{key:"removeEventListener",value:function(e,t){this._ee.off(e,t)}},{key:"_initCanvas",value:function(e,t){}},{key:"_initStyle",value:function(e,t){if(["fillStyle","strokeStyle","fontSize","globalAlpha","opacity","textAlign","textBaseline","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit"].forEach((function(t){Object.defineProperty(e,t,{set:function(n){if("opacity"!==t){if("fillStyle"!==t&&"strokeStyle"!==t||"none"!==n&&null!==n){if("object"==(0,o.default)(n))return void((n.hasOwnProperty("colorStop")||n.hasOwnProperty("colors"))&&e["set"+t.charAt(0).toUpperCase()+t.slice(1)](n));e["set"+t.charAt(0).toUpperCase()+t.slice(1)](n)}}else e.setGlobalAlpha(n)}})})),this.isNew||t||(e.uniDrawImage=e.drawImage,e.drawImage=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n[0]=n[0].src,e.uniDrawImage.apply(e,n)}),e.createRadialGradient||(e.createRadialGradient=function(){return e.createCircularGradient.apply(e,(0,i.default)(Array.prototype.slice.call(arguments).slice(-3)))}),e.strokeText||(e.strokeText=function(){e.fillText.apply(e,arguments)}),!e.measureText){var n=function(e){for(var t=0,n=0;n<e.length;n++)e.charCodeAt(n)>0&&e.charCodeAt(n)<128?t++:t+=2;return t};e.measureText=function(t,a){var i,o=(null===e||void 0===e||null===(i=e.state)||void 0===i?void 0:i.fontSize)||12;a&&(o=parseInt(a.match(/([\d\.]+)px/)[1])),o/=2;var r=o>=16,s=r?1.3:1;return{width:n(t)*o*s}}}}},{key:"_initEvent",value:function(e){var t=this;this.event={};[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}].forEach((function(e){t.event[e.wxName]=function(n){var a=n.touches[0];t.chart.getZr().handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?a.clientX:a.x,zrY:"tap"===e.wxName?a.clientY:a.y})}}))}},{key:"width",get:function(){return this.canvasNode.width||0},set:function(e){this.canvasNode.width=e}},{key:"height",get:function(){return this.canvasNode.height||0},set:function(e){this.canvasNode.height=e}},{key:"ctx",get:function(){return c[this.canvasId]["ctx"]||null}},{key:"chart",get:function(){return c[this.canvasId]["chart"]||null},set:function(e){c[this.canvasId]["chart"]=e}}]),e}();t.Canvas=d},"97de":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"overlay",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}),n("div",{staticClass:"my-drawer"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-5-1",collapse:e.isCollapse}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleperson.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("menu.home")))])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("menu.ewallets")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlepurchasehistory.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.ewallethistory")))]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlewithdraw.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.ewalletwithdrawals")))]),n("el-menu-item",{attrs:{index:"2-3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlewithdrawStatus.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.ewalletwithdrawalstatus")))]),n("el-menu-item",{attrs:{index:"2-4"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlebonus.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.bonuseshelp")))]),n("el-menu-item",{attrs:{index:"2-5"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlekycgo.apply(void 0,arguments)}}},[e._v("KYC")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-fold"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("menu.shopping")))])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleshoppingAddress.apply(void 0,arguments)}}},[e._v(e._s(e.$t("home.address")))]),n("el-menu-item",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleshopping.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.allCommodities")))]),n("el-menu-item",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlepurchase.apply(void 0,arguments)}}},[e._v(e._s(e.$t("menu.shoppinghistory")))])],1)],2),n("el-menu-item",{attrs:{index:"6"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlebinarytree.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("menu.architecturediagram")))])]),n("el-menu-item",{attrs:{index:"10"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleannucement.apply(void 0,arguments)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("menu.announcementtable")))])])],1)],1)])},i=[]},"983a":function(e,t,n){"use strict";n.r(t);var a=n("f1e6"),i=n("31eb");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=s.exports},bc00:function(e,t,n){"use strict";n.r(t);var a=n("c009"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},c009:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("c7eb")),o=a(n("53ca")),r=a(n("1da1"));n("a9e3"),n("99af"),n("ac1f"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("caad");var s=n("95c3"),c=n("5091"),u={name:"lime-echart",props:{customStyle:String,isDisableScroll:Boolean,isClickable:{type:Boolean,default:!0},enableHover:Boolean,beforeDelay:{type:Number,default:30}},data:function(){return{use2dCanvas:!1,ariaLabel:"图表",width:null,height:null,nodeWidth:null,nodeHeight:null,config:{},inited:!1,finished:!1,file:"",platform:"",isPC:!1,isDown:!1,isOffscreenCanvas:!1,offscreenWidth:0,offscreenHeight:0}},computed:{canvasId:function(){return"lime-echart".concat(this._&&this._.uid||this._uid)},offscreenCanvasId:function(){return"".concat(this.canvasId,"_offscreen")},offscreenStyle:function(){return"width:".concat(this.offscreenWidth,"px;height: ").concat(this.offscreenHeight,"px; position: fixed; left: 99999px; background: red")},canvasStyle:function(){return this.width&&this.height?"width:"+this.width+"px;height:"+this.height+"px":""}},beforeDestroy:function(){this.clear(),this.dispose(),this.isPC&&document.removeEventListener("mousewheel",this.mousewheel)},created:function(){"ontouchstart"in window||(this.isPC=!0,document.addEventListener("mousewheel",this.mousewheel)),this.use2dCanvas="2d"===this.type&&(0,c.canIUseCanvas2d)()},mounted:function(){var e=this;this.$nextTick((function(){e.$emit("finished")}))},methods:{setChart:function(e){this.chart?"function"===typeof e&&this.chart&&e(this.chart):console.warn("组件还未初始化，请先使用 init")},setOption:function(){var e;this.chart&&this.chart.setOption?(e=this.chart).setOption.apply(e,arguments):console.warn("组件还未初始化，请先使用 init")},showLoading:function(){var e;this.chart&&(e=this.chart).showLoading.apply(e,arguments)},hideLoading:function(){this.chart&&this.chart.hideLoading()},clear:function(){this.chart&&this.chart.clear()},dispose:function(){this.chart&&this.chart.dispose()},resize:function(e){var t=this;e&&e.width&&e.height?(this.height=e.height,this.width=e.width,this.chart&&this.chart.resize(e)):this.$nextTick((function(){uni.createSelectorQuery().in(t).select(".lime-echart").boundingClientRect().exec((function(e){if(e){var n=e[0],a=n.width,i=n.height;t.width=a=a||300,t.height=i=i||300,t.chart.resize({width:a,height:i})}}))}))},canvasToTempFilePath:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.use2dCanvas,a=this.canvasId;return new Promise((function(i,o){var r=Object.assign({canvasId:a,success:i,fail:o},t);n&&(delete r.canvasId,r.canvas=e.canvasNode),uni.canvasToTempFilePath(r,e)}))},init:function(e){var t=arguments,n=this;return(0,r.default)((0,i.default)().mark((function a(){var r,u,l,h,d,f,v;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r=t.length,u=new Array(r>1?r-1:0),l=1;l<r;l++)u[l-1]=t[l];if(!(t&&t.length<1)){a.next=4;break}return console.error("缺少参数：init(echarts, theme?:string, opts?: object, callback?: function)"),a.abrupt("return");case 4:if(h=null,d={},Array.from(t).forEach((function(e){"function"===typeof e&&(f=e),["string"].includes((0,o.default)(e))&&(h=e),"object"===(0,o.default)(e)&&(d=e)})),!n.beforeDelay){a.next=9;break}return a.next=9,(0,c.sleep)(n.beforeDelay);case 9:return a.next=11,n.getContext();case 11:if(v=a.sent,(0,s.setCanvasCreator)(e,v),n.chart=e.init(v.canvas,h,Object.assign({},v,d)),"function"!==typeof f){a.next=18;break}f(n.chart),a.next=19;break;case 18:return a.abrupt("return",n.chart);case 19:case"end":return a.stop()}}),a)})))()},getContext:function(){var e=this;return(0,c.getRect)("#".concat(this.canvasId),{context:this,type:this.use2dCanvas?"fields":"boundingClientRect"}).then((function(t){if(t){var n,a=c.devicePixelRatio,i=t.width,o=t.height,r=t.node;if(e.width=i=i||300,e.height=o=o||300,r){var u=r.getContext("2d");n=new s.Canvas(u,e,!0,r),e.canvasNode=r}else{a=e.isPC?c.devicePixelRatio:1,e.rect=t,e.nodeWidth=i*a,e.nodeHeight=o*a;var l=uni.createCanvasContext(e.canvasId,e);n=new s.Canvas(l,e,!1)}return{canvas:n,width:i,height:o,devicePixelRatio:a,node:r}}return{}}))},getRelative:function(e,t){var n=e.clientX,a=e.clientY;return n&&a||!t||!t[0]||(n=t[0].clientX,a=t[0].clientY),{x:n-this.rect.left,y:a-this.rect.top,wheelDelta:e.wheelDelta||0}},getTouch:function(e,t){var n=t&&t[0]||{},a=n.x;return a?t[0]:this.getRelative(e,t)},touchStart:function(e){var t=this;this.isDown=!0;var n=function(){var n=(0,c.convertTouchesToArray)(e.touches);if(t.chart){var a=t.getTouch(e,n);t.startX=a.x,t.startY=a.y,t.startT=new Date;var i=t.chart.getZr().handler;s.dispatch.call(i,"mousedown",a),s.dispatch.call(i,"mousemove",a),i.processGesture((0,c.wrapTouch)(e),"start"),clearTimeout(t.endTimer)}};this.isPC?(0,c.getRect)("#".concat(this.canvasId),{context:this}).then((function(e){t.rect=e,n()})):n()},touchMove:function(e){this.isPC&&this.enableHover&&!this.isDown&&(this.isDown=!0);var t=(0,c.convertTouchesToArray)(e.touches);if(this.chart&&this.isDown){var n=this.chart.getZr().handler;s.dispatch.call(n,"mousemove",this.getTouch(e,t)),n.processGesture((0,c.wrapTouch)(e),"change")}},touchEnd:function(e){if(this.isDown=!1,this.chart){var t=(0,c.convertTouchesToArray)(e.changedTouches),n=t&&t[0]||{},a=n.x,i=(a?t[0]:this.getRelative(e,t))||{},o=this.chart.getZr().handler,r=Math.abs(i.x-this.startX)<10&&new Date-this.startT<200;s.dispatch.call(o,"mouseup",i),o.processGesture((0,c.wrapTouch)(e),"end"),r?s.dispatch.call(o,"click",i):this.endTimer=setTimeout((function(){s.dispatch.call(o,"mousemove",{x:999999999,y:999999999}),s.dispatch.call(o,"mouseup",{x:999999999,y:999999999})}),50)}},mousewheel:function(e){this.chart&&s.dispatch.call(this.chart.getZr().handler,"mousewheel",this.getTouch(e))}}};t.default=u},db90:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630")},e9a1:function(e,t,n){"use strict";var a=n("ef52"),i=n.n(a);i.a},ef52:function(e,t,n){var a=n("334d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("132f72a9",a,!0,{sourceMap:!1,shadowMode:!1})},f1e6:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={lEchart:n("37eb").default},i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",[t("el-card",{staticClass:"box-card"},[this.treeStatus?t("l-echart",{ref:"chart",staticStyle:{height:"78vh",width:"100%"}}):t("el-empty",{attrs:{description:this.$t("tree.notpurchaseballs")}})],1)],1)},o=[]},fa05:function(e,t,n){"use strict";n("7a82");var a=n("dbce").default,i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("37eb")),r=a(n("a0e9")),s={components:{LEchart:o.default},data:function(){return{treeStatus:!0}},mounted:function(){this.gets()},methods:{gets:function(){var e=this,t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes").then((function(n){n.status;var a=n.result.mlevel;uni.setStorageSync("mlevel",a),e.$refs.chart.init(r,(function(e){var n=uni.getStorageSync("data"),a=uni.getStorageSync("mlevel");void 0==n[0]&&(t.treeStatus=!1);var i={series:[{type:"tree",initialTreeDepth:2,name:n[0].name,data:[n[0]],symbol:function(e,t){if(""!=t.data.name)for(var n in a)if(n==t.data.level)return"image://"+a[n].colorimg},emphasis:{focus:"descendant"},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750,top:"8%",left:"2%",bottom:"50%",right:"2%",symbolSize:[30,30],edgeShape:"polyline",lineStyle:{curveness:0,width:1},orient:"TB",label:{normal:{position:"top",formatter:function(e){var t=e.name;return t}}}}]};e.setOption(i),e.on("click",(function(e){if(""==e.name){var t=e.treeAncestors;if(""!=t[t.length-2].userid){e.data.id;uni.navigateTo({url:"/pages/reseller-registration/reseller-registration?nodeid="+e.data.id})}}}))}))})).catch((function(e){console.log(e)}))},getss:function(){}}};t.default=s}}]);