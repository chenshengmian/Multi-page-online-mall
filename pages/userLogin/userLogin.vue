<template>
	<view style="background-color: #F5F5F5;">
		<div class="container">
			<el-card class="box-card" style="position: relative;overflow: visible;">
				<div style="width: 100%;display: flex;justify-content: center; position: absolute;transform: translateY(-78%);right: 2px;">
					 <image
					    style="width: 100px; height: 100px;border-radius: 50%;"
					    :src="url"
					    >
					</image>
				</div>
				<div style="margin-top: 100rpx;font-size: 26rpx;display: flex;justify-content: center;"><el-link :type="typeStatus1"
						 @tap="change('en')"><b>{{$t('locale.en')}}</b></el-link> <el-divider
						direction="vertical"></el-divider><el-link  :type="typeStatus2"
						@tap="change('zh-Hans')"><b>{{$t('locale.zhHans')}}</b>
					</el-link> <el-divider direction="vertical"></el-divider><el-link :type="typeStatus3"
						@tap="change('zh-Hant')"><b>{{$t('locale.zhHant')}}</b></el-link>
					<!--| <a href="javascript:void(0);"><b>Melayu</b></a> | <a href="javascript:void(0);"><b>한국어</b></a> -->
				</div>
				<div>
					<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
						<el-form-item :label="$t('login.eamil')">
							<el-input v-model="formLabelAlign.useraccount" :placeholder="$t('login.eamil')"></el-input>
						</el-form-item>
						<el-form-item :label="$t('login.password')">
							<el-input type="password" :placeholder="$t('login.password')"
								v-model="formLabelAlign.userpass"></el-input>
						</el-form-item>
						<div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10rpx;"
							@tap="newCaptcha" v-show="showCaptcha"><img :src="captcha" alt=""></div>
						<div style="text-align: center;font-size: 26rpx;">{{$t('login.input')}}</div>
						<el-form-item>
							<el-input v-model="formLabelAlign.verifycode"></el-input>
						</el-form-item>
						<el-form-item style="display: flex;justify-content: end;">
							<!-- <el-button 
								@click="handlereg" type="danger" plain>{{$t('enroll.Registered')}}</el-button> -->
							<el-button type="primary"
								@click="submitForm('ruleForm')" :loading="loadings">{{$t('login.debarkation')}}</el-button>
						</el-form-item>
						<el-form-item>
							<div @tap="handleRecover"><i class="el-icon-lock"></i> <span
									style="margin-left: 10rpx;">{{$t('login.Forgot')}}</span></div>
						</el-form-item>
					</el-form>
				</div>
			</el-card>

		</div>
		<div class="footer">{{footer}}</div>
	</view>
</template>

<script>
	import config from '@/utils/config.json'
	import md5 from 'blueimp-md5';
	import CryptoJS from 'crypto-js';
	// import axios from 'axios'
	export default {
		data() {
			return {
				dialogVisible:false,
				url:'',
				typeStatus1:'info',
				typeStatus2:'info',
				typeStatus3:'info',
				labelPosition: 'top',
				captcha: '',
				showCaptcha: false,
				name:'',
				footer:'',
				loadings:false,
				formLabelAlign: {
					useraccount: '',
					userpass: '',
					verifycode: '',
					iv: '',
					sign: ''
				}
			}
		},
		mounted() {
			this.check()
			this.change(uni.getLocale())
			this.names()
		},
		methods: {
			check(){
				this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						const { status } = res
						if (status == 100) {
							// uni.navigateTo({
							// 	url: '/pages/userLogin/userLogin'
							// })
						} else {
							uni.navigateTo({
								url: '/pages/personalPage/personalPage'
							})
						}
					})
			},
			handleRecover(){
				// console.log(11)
				uni.navigateTo({
					url:'/pages/recoverPassword/recoverPassword'
				})
			},
			handleshopping(){
				uni.navigateTo({
					url:'/pages/shopping/shopping'
				})
			},
			change(lan) {
				if(lan=='en'){
					this.typeStatus1 = 'primary'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'info'
					uni.setStorageSync('textlang',2)
				}else if(lan=='zh-Hans'){
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'primary'
					this.typeStatus3 = 'info'
					uni.setStorageSync('textlang',0)
				}else{
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'primary'
					uni.setStorageSync('textlang',1)
				}
				uni.setLocale(lan)
				this.$i18n.locale = lan
				// //this.$router.go(0)   
			},
			handlereg(){
				uni.navigateTo({
					url:'/pages/UserRegistration/UserRegistration'
				})
			},
			names(){
				let _this = this
				let textlang =  uni.getStorageSync('textlang')
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner&textlang='+textlang)
					.then(res=>{
						// console.log(res)
						const {status,result:{shopmes:{name,copyrighttext,logo}}} = res
						if(status==1){
							this.footer = copyrighttext
							uni.setStorageSync('footer',copyrighttext)
							uni.setStorageSync('logo',logo)
							uni.setStorageSync('name',name)
							_this.url = logo
							_this.getUserInfo()
							_this.name = name
							uni.setNavigationBarTitle({
								title:name
							})
						}
					})
					.catch(err=>{
						console.log(err)
					})
			},
			getUserInfo() {
				let self = this
				let textlang =  uni.getStorageSync('textlang')
				uni.request({
					url: config.https + '/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account&textlang='+textlang,
					method: 'post',
					success(res) {
						const {
							data: {
								result: {
									verifycode_img,
									iv,
									smsimgcode
								}
							}
						} = res
						// console.log(res)
						self.captcha = verifycode_img
						self.formLabelAlign.iv = iv
						self.formLabelAlign.sign = md5(config.version + iv);
						if (smsimgcode == 1) {
							self.showCaptcha = true
						} else {
							self.showCaptcha = false
						}
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			newCaptcha() {
				this.getUserInfo()
			},
			submitForm() {
				let self = this
				self.loadings = true
				let textlang =  uni.getStorageSync('textlang')
				uni.request({
					url: config.https +
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.login&textlang='+textlang,
					method: 'post',
					data: this.formLabelAlign,
					success(res) {
						// console.log(res)
						const {
							data: {
								status
							}
						} = res
						if (status == 1) {
							self.loadings = false
							const {
								data: {
									result: {
										userinfo,
										token: {
											access_token,
											refersh_token
										}
									}
								}
							} = res
							uni.setStorageSync('userInfo', res.data)
							//先更新一次token
							const refid = {
								'refershtoken': refersh_token,
								'userinfo': userinfo,
								'access_token': access_token
							}
							uni.setStorageSync('tokenArray', refid)
							uni.setStorageSync('pageSize', 10)
							uni.setStorageSync('loginStatus',0)
							self.formLabelAlign = {}
							self.getUserInfo()
							uni.navigateTo({
								url: '/pages/personalPage/personalPage'
							})
						} else {
							self.loadings = false
							const {
								data: {
									result: {
										message
									}
								}
							} = res
							self.$message({
								message: message,
								type: 'warning'
							});
						}
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.el-card {
		width: 800rpx;
		position: relative;
	}

	.container {
		display: flex;
		/* 使用flex布局 */
		justify-content: center;
		/* 在主轴上水平居中 */
		align-items: center;
		/* 在交叉轴上垂直居中 */
		height: 100vh;
		/* margin-top: 240rpx; */
		/* 设置容器高度为全屏高度 */
		background-color: #F5F5F5;
	}

	.footer {
		position: absolute;
		bottom: 240rpx;
		font-size: 24rpx;
		text-align: center;
		width: 100%;
	}

	@media screen and (max-width: 990px) {
		.footer {
			bottom: 4.5%;
		}

		.container {
			height: 90vh;
		}
	}
</style>