<template>
	<view style="background-color: #F5F5F5;">
		<div class="container">
			<el-card class="box-card" style="width: 900rpx;">
				<div style="width: 100%;display: flex;justify-content: center;">
					<div>{{name}}</div>
				</div>
				<div style="margin-top: 50rpx;font-size: 26rpx;display: flex;justify-content: center;"><el-link :type="typeStatus1"
						 @tap="change('en')"><b>{{$t('locale.en')}}</b></el-link> <el-divider
						direction="vertical"></el-divider><el-link  :type="typeStatus2"
						@tap="change('zh-Hans')"><b>{{$t('locale.zhHans')}}</b>
					</el-link> <el-divider direction="vertical"></el-divider><el-link :type="typeStatus3"
						@tap="change('zh-Hant')"><b>{{$t('locale.zhHant')}}</b></el-link>
					<!--| <a href="javascript:void(0);"><b>Melayu</b></a> | <a href="javascript:void(0);"><b>한국어</b></a> -->
				</div>
				<div style="margin-top: 30rpx;">
					<el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">

						<el-form-item label="新密码">
							<el-input type="password" placeholder="新密码"
								v-model="formLabelAlign.newuserpass"></el-input>
						</el-form-item>
						<el-form-item label="重复密码">
							<el-input type="password" placeholder="重复密码" v-model="formLabelAlign.userpass"></el-input>
						</el-form-item>
						<el-form-item :label="$t('login.eamil')">
							<el-input v-model="formLabelAlign.eamils" :placeholder="$t('login.eamil')"></el-input>
							<el-button style="float: right;" type="text"
								@click="handleEamil"><b><i class="el-icon-thumb"></i> 验证邮箱</b></el-button>
						</el-form-item>
						<el-form-item label="邮箱验证码">
							<el-input v-model="formLabelAlign.eamilVerifycode"></el-input>
						</el-form-item>
						<el-form-item style="display: flex;justify-content: end;">
							<el-button type="text" style="margin-right: 50rpx;"
								@click="handleresrt"><b>{{$t('table.raturnhome')}}</b></el-button>
							<el-button @click="submitForm('ruleForm')">修改密码</el-button>
						</el-form-item>
						<!-- <el-form-item>
							<div><i class="el-icon-lock"></i> <span
									style="margin-left: 10rpx;">{{$t('login.Forgot')}}</span></div>
						</el-form-item> -->
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
				typeStatus1:'info',
				typeStatus2:'info',
				typeStatus3:'info',
				labelPosition: 'right',
				captcha: '',
				showCaptcha: false,
				name: '',
				footer: '',
				formLabelAlign: {
					verifycode: '',
					newuserpass:'',
					userpass:'',
					eamilVerifycode:'',
					eamils:''
				},
				rogerThat:''
			}
		},
		// computed:{
		// 	typeStatus(){
		// 		uni.getLocale('')
		// 	}
		// },
		mounted() {
			this.change(uni.getLocale())
			this.getUserInfo()
			this.names()
		},
		onShow() {
			// console.log( uni.getStorageSync('tokenArray'))
			// if(uni.getStorageSync('tokenArray')){
			// 	uni.navigateTo({
			// 		url:'/pages/personalPage/personalPage'
			// 	})
			// }
		},
		methods: {
			handleEamil(){
				let _this = this
				let array = {
					'email' : _this.formLabelAlign.eamils
				}
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.email.ts',array)
					.then(res=>{
						console.log(res)
						const {status, result:{message} } = res
						_this.rogerThat = message
						if(status==1){
							_this.$message({
								message: '邮箱已发送，请不要重复发送!',
								type: 'success'
							})
						}else{
							_this.$message('请检查验证码是否正确！')
						}
					})
					.catch(err=>{
						console.log(err)
					})
			},
			handleresrt(){
				this.formLabelAlign = {}
				uni.navigateTo({
					url: '/pages/userLogin/userLogin'
				})
			},
			handleshopping() {
				uni.navigateTo({
					url: '/pages/shopping/shopping'
				})
			},
			change(lan) {
				// console.log(lan)
				if(lan=='en'){
					this.typeStatus1 = 'primary'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'info'
				}else if(lan=='zh-Hans'){
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'primary'
					this.typeStatus3 = 'info'
				}else{
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'primary'
				}
				uni.setLocale(lan)
				this.$i18n.locale = lan
			},
			names() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner')
					.then(res => {
						console.log(res)
						const {
							result: {
								shopmes: {
									name,
									copyrighttext
								}
							}
						} = res
						this.footer = copyrighttext
						uni.setStorageSync('footer', copyrighttext)
						uni.setStorageSync('name', name)
						_this.name = name
					})
					.catch(err => {
						console.log(err)
					})
			},
			getUserInfo() {
				let self = this
				uni.request({
					url: config.https + '/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account',
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
				let _this = this
				console.log(_this.rogerThat)
				// uni.request({
				// 	url: config.https +
				// 		'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.login',
				// 	method: 'post',
				// 	data: this.formLabelAlign,
				// 	success(res) {
				// 		console.log(res)
				// 	},
				// 	fail(err) {
				// 		console.log(err)
				// 	}
				// })
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