(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recoverPassword-recoverPassword"],{"2daf":function(e,t,a){"use strict";a.r(t);var i=a("d571"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"8d1a":function(e,t,a){"use strict";a.r(t);var i=a("a11c"),n=a("2daf");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("b400");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"083aaa90",null,!1,i["a"],void 0);t["default"]=o.exports},a11c:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{"background-color":"#F5F5F5"}},[a("div",{staticClass:"container"},[a("el-card",{staticClass:"box-card",staticStyle:{width:"900rpx",position:"relative",overflow:"visible"}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center",position:"absolute",transform:"translateY(-78%)",right:"2px"}},[a("v-uni-image",{staticStyle:{width:"100px",height:"100px","border-radius":"50%"},attrs:{src:e.url}})],1),a("div",{staticStyle:{"margin-top":"100rpx","font-size":"26rpx",display:"flex","justify-content":"center"}},[a("el-link",{attrs:{type:e.typeStatus1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("en")}}},[a("b",[e._v(e._s(e.$t("locale.en")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{type:e.typeStatus2},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("zh-Hans")}}},[a("b",[e._v(e._s(e.$t("locale.zhHans")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("el-link",{attrs:{type:e.typeStatus3},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change("zh-Hant")}}},[a("b",[e._v(e._s(e.$t("locale.zhHant")))])])],1),a("div",{staticStyle:{"margin-top":"30rpx"}},[a("el-form",{ref:"ruleForm",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.ruleForm,rules:e.rules}},[a("el-form-item",{attrs:{label:e.$t("home.Newpasswords"),prop:"newuserpass"}},[a("el-input",{attrs:{type:"password",placeholder:e.$t("home.Newpasswords")},model:{value:e.ruleForm.newuserpass,callback:function(t){e.$set(e.ruleForm,"newuserpass",t)},expression:"ruleForm.newuserpass"}})],1),a("el-form-item",{attrs:{label:e.$t("home.Repeatthepassword"),prop:"userpass"}},[a("el-input",{attrs:{type:"password",placeholder:e.$t("home.Repeatthepassword")},model:{value:e.ruleForm.userpass,callback:function(t){e.$set(e.ruleForm,"userpass",t)},expression:"ruleForm.userpass"}})],1),a("el-form-item",{attrs:{label:e.$t("login.eamil"),prop:"eamils",rules:[{required:!0,message:e.$t("enroll.enteremailaddress"),trigger:"blur"},{type:"email",message:e.$t("enroll.validemailaddress"),trigger:["blur","change"]}]}},[a("el-input",{attrs:{placeholder:e.$t("login.eamil")},model:{value:e.ruleForm.eamils,callback:function(t){e.$set(e.ruleForm,"eamils",t)},expression:"ruleForm.eamils"}})],1),a("el-form-item",[a("el-button",{staticStyle:{float:"right"},attrs:{type:"text",loading:e.loadingq},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleEamil.apply(void 0,arguments)}}},[a("b",[a("i",{directives:[{name:"show",rawName:"v-show",value:e.thumb,expression:"thumb"}],staticClass:"el-icon-thumb"}),e._v(e._s(e.wait))]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.loadingq,expression:"loadingq"}]},[e._v("s")])])],1),a("el-form-item",{attrs:{label:e.$t("home.Emailcode"),prop:"eamilVerifycode"}},[a("el-input",{model:{value:e.ruleForm.eamilVerifycode,callback:function(t){e.$set(e.ruleForm,"eamilVerifycode",t)},expression:"ruleForm.eamilVerifycode"}})],1),a("el-form-item",{staticStyle:{display:"flex","justify-content":"end"}},[a("el-button",{staticStyle:{"margin-right":"50rpx"},attrs:{type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleresrt.apply(void 0,arguments)}}},[a("b",[e._v(e._s(e.$t("table.raturnhome")))])]),a("el-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm("ruleForm")}}},[e._v(e._s(e.$t("home.Changepassword")))])],1)],1)],1)])],1),a("div",{staticClass:"footer"},[e._v(e._s(e.footer))])])},n=[]},b400:function(e,t,a){"use strict";var i=a("b502"),n=a.n(i);n.a},b502:function(e,t,a){var i=a("f416");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("1059ff2f",i,!0,{sourceMap:!1,shadowMode:!1})},d571:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d9e2"),a("d401");var n=i(a("7b5f")),s={data:function(){var e=this;return{loadingq:!1,thumb:!0,wait:this.$t("home.Verifymailbox"),url:"",typeStatus1:"info",typeStatus2:"info",typeStatus3:"info",captcha:"",showCaptcha:!1,name:"",footer:"",ruleForm:{verifycode:"",newuserpass:"",userpass:"",eamilVerifycode:"",eamils:""},rogerThat:"",rules:{newuserpass:[{validator:function(t,a,i){""===a?i(new Error(e.$t("pass.enteryourpassword"))):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),i())},trigger:"blur"}],userpass:[{validator:function(t,a,i){""===a?i(new Error(e.$t("pass.enteragain"))):a!==e.ruleForm.newuserpass?i(new Error(e.$t("pass.passwordtwice"))):i()},trigger:"blur"}],eamilVerifycode:[{validator:function(t,a,i){""===a?i(new Error(e.$t("pass.emailverificationcode"))):i()},trigger:"blur"}]}}},computed:{labelPosition:function(){return"en"==uni.getLocale()?"top":"right"}},mounted:function(){uni.setNavigationBarTitle({title:uni.getStorageSync("name")}),this.change(uni.getLocale()),this.names()},onShow:function(){},methods:{handleshoppingAddress:function(){uni.navigateTo({url:"/pages/shippingAddress/shippingAddress"})},handleEamil:function(){var e=this;if(""==this.ruleForm.eamils)this.$message(this.$t("withdrawal.fillemail"));else{this.thumb=!1,this.loadingq=!0,this.wait=60;var t=this,a={email:t.ruleForm.eamils};t.$axios.post("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.verifyUserexists",a).then((function(a){if(t.loadingq=!0,console.log(a),"string"==typeof a)t.loadingq=!1,t.thumb=!0,clearInterval(t.timer),t.wait=t.$t("home.Verifymailbox"),t.$message(e.$t("enroll.codeiscorrect"));else{var i=a.status,n=a.result.message;t.rogerThat=n,1==i?t.$message({message:e.$t("enroll.sentagain"),type:"success"}):(t.loadingq=!1,t.thumb=!0,clearInterval(t.timer),t.wait=t.$t("home.Verifymailbox"),t.$message(n))}})).catch((function(e){console.log(e)})),this.timer=setInterval((function(){t.wait>0&&t.wait<=60?t.wait--:(t.loadingq=!1,t.wait=t.$t("home.Verifymailbox"),clearInterval(t.timer),t.thumb=!0,t.timer=null)}),1e3)}},handleresrt:function(){this.ruleForm={},uni.navigateTo({url:"/pages/userLogin/userLogin"})},handleshopping:function(){uni.navigateTo({url:"/pages/shopping/shopping"})},change:function(e){"en"==e?(this.typeStatus1="primary",this.typeStatus2="info",this.typeStatus3="info",uni.setStorageSync("textlang",2)):"zh-Hans"==e?(this.typeStatus1="info",this.typeStatus2="primary",this.typeStatus3="info",uni.setStorageSync("textlang",0)):(this.typeStatus1="info",this.typeStatus2="info",this.typeStatus3="primary",uni.setStorageSync("textlang",1)),uni.setLocale(e),this.$i18n.locale=e},names:function(){var e=this,t=this,a=uni.getStorageSync("textlang");t.$axios.get("/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner&textlang="+a).then((function(a){console.log(a);var i=a.result.shopmes,n=i.name,s=i.copyrighttext,r=i.logo;uni.setNavigationBarTitle({title:n}),e.footer=s,uni.setStorageSync("footer",s),uni.setStorageSync("name",n),uni.setStorageSync("logo",r),t.url=r,t.name=n})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;t.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.rogerThat);var a=uni.getStorageSync("textlang");uni.request({url:n.default.https+"/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.handlenewPass&textlang="+a,method:"post",data:t.ruleForm,success:function(e){var a=e.data,i=a.status,n=a.result.message;1==i?(t.$message({message:n,type:"success"}),t.ruleForm={},setTimeout((function(){uni.navigateTo({url:"/pages/userLogin/userLogin"})}),1e3)):t.$message(n)},fail:function(e){console.log(e)}})}))}}};t.default=s},f416:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".el-card[data-v-083aaa90]{width:%?800?%;position:relative}.container[data-v-083aaa90]{display:flex;\n\t/* 使用flex布局 */justify-content:center;\n\t/* 在主轴上水平居中 */align-items:center;\n\t/* 在交叉轴上垂直居中 */height:100vh;\n\t/* margin-top: 240rpx; */\n\t/* 设置容器高度为全屏高度 */background-color:#f5f5f5}.footer[data-v-083aaa90]{position:absolute;bottom:%?220?%;font-size:%?24?%;text-align:center;width:100%}@media screen and (max-width:990px){.footer[data-v-083aaa90]{bottom:4.5%}.container[data-v-083aaa90]{height:90vh}}",""]),e.exports=t}}]);