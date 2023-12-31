import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'	
import request  from './utils/request.js'
import print from './utils/print.js'
import prints from 'print-js'

import 'print-js/dist/print.css';

Vue.prototype.$prints = prints;
import * as echarts from 'echarts'
import VueI18n from 'vue-i18n'
import messages from '@/locale/index.js'
Vue.use(VueI18n)
// console.log(uni.getLocale())
const i18n = new VueI18n({
	locale:uni.getLocale(),//获取设置语言
	messages
})

import locale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import llocale from 'element-ui/lib/locale/lang/zh-TW'
if(uni.getLocale()=='en'){
	Vue.use(ElementUI,{ locale })
}else if(uni.getLocale()=='zh-Hans'){
	Vue.use(ElementUI,{ zhLocale })
}else if(uni.getLocale()=='zh-Hant'){
	Vue.use(ElementUI,{ locale })
}

import vueSeamlessScroll from 'vue-seamless-scroll' 
Vue.use(vueSeamlessScroll)
Vue.use(print)
Vue.prototype.$axios = request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif