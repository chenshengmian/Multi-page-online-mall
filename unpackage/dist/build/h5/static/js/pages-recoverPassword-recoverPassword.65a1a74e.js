(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recoverPassword-recoverPassword"],{"3a4a":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{"background-color":"#F5F5F5"}},[a("div",{staticClass:"container"},[a("el-card",{staticClass:"box-card",staticStyle:{width:"900rpx"}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[a("div",[e._v(e._s(e.name))])]),a("div",{staticStyle:{"margin-top":"50rpx","font-size":"26rpx",display:"flex","justify-content":"center"}},[a("el-link",{attrs:{type:e.typeStatus1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("en")}}},[a("b",[e._v(e._s(e.$t("locale.en")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{type:e.typeStatus2},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("zh-Hans")}}},[a("b",[e._v(e._s(e.$t("locale.zhHans")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{type:e.typeStatus3},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("zh-Hant")}}},[a("b",[e._v(e._s(e.$t("locale.zhHant")))])])],1),a("div",{staticStyle:{"margin-top":"30rpx"}},[a("el-form",{ref:"ruleForm",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.ruleForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"新密码",prop:"newuserpass"}},[a("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:e.ruleForm.newuserpass,callback:function(t){e.$set(e.ruleForm,"newuserpass",t)},expression:"ruleForm.newuserpass"}})],1),a("el-form-item",{attrs:{label:"重复密码",prop:"userpass"}},[a("el-input",{attrs:{type:"password",placeholder:"重复密码"},model:{value:e.ruleForm.userpass,callback:function(t){e.$set(e.ruleForm,"userpass",t)},expression:"ruleForm.userpass"}})],1),a("el-form-item",{attrs:{label:e.$t("login.eamil"),prop:"eamils",rules:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]}},[a("el-input",{attrs:{placeholder:e.$t("login.eamil")},model:{value:e.ruleForm.eamils,callback:function(t){e.$set(e.ruleForm,"eamils",t)},expression:"ruleForm.eamils"}})],1),a("el-form-item",[a("el-button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleEamil.apply(void 0,arguments)}}},[a("b",[a("i",{staticClass:"el-icon-thumb"}),e._v("验证邮箱")])])],1),a("el-form-item",{attrs:{label:"邮箱验证码",prop:"eamilVerifycode"}},[a("el-input",{model:{value:e.ruleForm.eamilVerifycode,callback:function(t){e.$set(e.ruleForm,"eamilVerifycode",t)},expression:"ruleForm.eamilVerifycode"}})],1),a("el-form-item",{staticStyle:{display:"flex","justify-content":"end"}},[a("el-button",{staticStyle:{"margin-right":"50rpx"},attrs:{type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleresrt.apply(void 0,arguments)}}},[a("b",[e._v(e._s(e.$t("table.raturnhome")))])]),a("el-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm("ruleForm")}}},[e._v("修改密码")])],1)],1)],1)])],1),a("div",{staticClass:"footer"},[e._v(e._s(e.footer))])])},i=[]},"86e2":function(e,t,a){"use strict";var n=a("ac89"),i=a.n(n);i.a},9804:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d9e2"),a("d401");var i=n(a("1d4c")),s=(n(a("8f9f")),n(a("1c57")),{data:function(){var e=this;return{typeStatus1:"info",typeStatus2:"info",typeStatus3:"info",labelPosition:"right",captcha:"",showCaptcha:!1,name:"",footer:"",ruleForm:{verifycode:"",newuserpass:"",userpass:"",eamilVerifycode:"",eamils:""},rogerThat:"",rules:{newuserpass:[{validator:function(t,a,n){""===a?n(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),n())},trigger:"blur"}],userpass:[{validator:function(t,a,n){""===a?n(new Error("请再次输入密码")):a!==e.ruleForm.newuserpass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],eamilVerifycode:[{validator:function(e,t,a){""===t?a(new Error("请输入邮箱验证码")):a()},trigger:"blur"}]}}},mounted:function(){this.change(uni.getLocale()),this.names()},onShow:function(){},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleEamil:function(){var e=this,t={email:e.ruleForm.eamils};e.$axios.post("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.verifyUserexists",t).then((function(t){console.log(t);var a=t.status,n=t.result.message;e.rogerThat=n,1==a?e.$message({message:"邮箱已发送，请不要重复发送!",type:"success"}):e.$message(n)})).catch((function(e){console.log(e)}))},handleresrt:function(){this.ruleForm={},uni.navigateTo({url:"/pages/userLogin/userLogin"})},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},change:function(e){"en"==e?(this.typeStatus1="primary",this.typeStatus2="info",this.typeStatus3="info"):"zh-Hans"==e?(this.typeStatus1="info",this.typeStatus2="primary",this.typeStatus3="info"):(this.typeStatus1="info",this.typeStatus2="info",this.typeStatus3="primary"),uni.setLocale(e),this.$i18n.locale=e},names:function(){var e=this,t=this;t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner").then((function(a){console.log(a);var n=a.result.shopmes,i=n.name,s=n.copyrighttext;uni.setNavigationBarTitle({title:i}),e.footer=s,uni.setStorageSync("footer",s),uni.setStorageSync("name",i),t.name=i})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;t.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.rogerThat),uni.request({url:i.default.https+"/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.handlenewPass",method:"post",data:t.ruleForm,success:function(e){var a=e.data,n=a.status,i=a.result.message;1==n?(t.$message({message:i,type:"success"}),t.ruleForm={},setTimeout((function(){uni.navigateTo({url:"/pages/userLogin/userLogin"})}),1e3)):t.$message(i)},fail:function(e){console.log(e)}})}))}}});t.default=s},a922:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".el-card[data-v-28d85458]{width:%?800?%;position:relative}.container[data-v-28d85458]{display:flex;\n\t/* 使用flex布局 */justify-content:center;\n\t/* 在主轴上水平居中 */align-items:center;\n\t/* 在交叉轴上垂直居中 */height:100vh;\n\t/* margin-top: 240rpx; */\n\t/* 设置容器高度为全屏高度 */background-color:#f5f5f5}.footer[data-v-28d85458]{position:absolute;bottom:%?240?%;font-size:%?24?%;text-align:center;width:100%}@media screen and (max-width:990px){.footer[data-v-28d85458]{bottom:4.5%}.container[data-v-28d85458]{height:90vh}}",""]),e.exports=t},ac89:function(e,t,a){var n=a("a922");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("408b2496",n,!0,{sourceMap:!1,shadowMode:!1})},e93b:function(e,t,a){"use strict";a.r(t);var n=a("9804"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},ec79:function(e,t,a){"use strict";a.r(t);var n=a("3a4a"),i=a("e93b");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("86e2");var r=a("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"28d85458",null,!1,n["a"],void 0);t["default"]=o.exports}}]);