<template>
	<view style="background-color: #F5F5F5;">
		<div class="container">
			<el-card class="box-card" style="width: 900rpx;">
				<div style="width: 100%;display: flex;justify-content: center;">
					<div>{{name}}</div>
				</div>
				<div style="margin-top: 50rpx;font-size: 26rpx;display: flex;justify-content: center;"><el-link
						:type="typeStatus1" @tap="change('en')"><b>{{$t('locale.en')}}</b></el-link> <el-divider
						direction="vertical"></el-divider><el-link :type="typeStatus2"
						@tap="change('zh-Hans')"><b>{{$t('locale.zhHans')}}</b>
					</el-link> <el-divider direction="vertical"></el-divider><el-link :type="typeStatus3"
						@tap="change('zh-Hant')"><b>{{$t('locale.zhHant')}}</b></el-link>
					<!--| <a href="javascript:void(0);"><b>Melayu</b></a> | <a href="javascript:void(0);"><b>한국어</b></a> -->
				</div>
				<div style="margin-top: 30rpx;">
					<el-form :label-position="labelPosition" label-width="90px" :model="ruleForm" :rules="rules"
						ref="ruleForm">

						<el-form-item label="新密码" prop="newuserpass">
							<el-input type="password" placeholder="新密码" v-model="ruleForm.newuserpass"></el-input>
						</el-form-item>
						<el-form-item label="重复密码" prop="userpass">
							<el-input type="password" placeholder="重复密码" v-model="ruleForm.userpass"></el-input>
						</el-form-item>
						<el-form-item :label="$t('login.eamil')" prop="eamils" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
							<el-input v-model="ruleForm.eamils" :placeholder="$t('login.eamil')"></el-input>
							<!-- <el-button style="float: right;" type="text" @click="handleEamil"><b><i
										class="el-icon-thumb"></i> 验证邮箱</b></el-button> -->
						</el-form-item>
						<el-form-item>
							<!-- <el-input v-model="ruleForm.eamils" :placeholder="$t('login.eamil')"></el-input> -->
							<el-button style="float: right;" type="text" @click="handleEamil"><b><i
										class="el-icon-thumb"></i> 验证邮箱</b></el-button>
						</el-form-item>
						<el-form-item label="邮箱验证码" prop="eamilVerifycode">
							<el-input v-model="ruleForm.eamilVerifycode"></el-input>
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
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.newuserpass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validateeamils = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱验证码'));
				} else {
					callback();
				}
			};
			return {
				typeStatus1: 'info',
				typeStatus2: 'info',
				typeStatus3: 'info',
				labelPosition: 'right',
				captcha: '',
				showCaptcha: false,
				name: '',
				footer: '',
				ruleForm: {
					verifycode: '',
					newuserpass: '',
					userpass: '',
					eamilVerifycode: '',
					eamils: ''
				},
				rogerThat: '',
				rules: {
					newuserpass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					userpass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					eamilVerifycode: [{
						validator: validateeamils,
						trigger: 'blur',
					}]
				}
			}
		},
		// computed:{
		// 	typeStatus(){
		// 		uni.getLocale('')
		// 	}
		// },
		mounted() {
			this.change(uni.getLocale())
			// this.getUserInfo()
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
			handleshoppingAddress(){
				uni.navigateTo({
					url:'/pages/shippingAddress/shippingAddress'
				})
			},
			handleEamil() {
				let _this = this
				let array = {
					'email': _this.ruleForm.eamils
				}
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.verifyUserexists', array)
					.then(res => {
						console.log(res)
						const {
							status,
							result: {
								message
							}
						} = res
						_this.rogerThat = message
						if (status == 1) {
							_this.$message({
								message: '邮箱已发送，请不要重复发送!',
								type: 'success'
							})
						} else {
							_this.$message(message)
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleresrt() {
				this.ruleForm = {}
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
				if (lan == 'en') {
					this.typeStatus1 = 'primary'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'info'
				} else if (lan == 'zh-Hans') {
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'primary'
					this.typeStatus3 = 'info'
				} else {
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
						uni.setNavigationBarTitle({
							title: name
						})
						this.footer = copyrighttext
						uni.setStorageSync('footer', copyrighttext)
						uni.setStorageSync('name', name)
						_this.name = name
					})
					.catch(err => {
						console.log(err)
					})
			},
			submitForm(formName) {
				let _this = this
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(_this.rogerThat)
						uni.request({
							url: config.https +
								'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.handlenewPass',
							method: 'post',
							data: _this.ruleForm,
							success(res) {
								// console.log(res)
								const {
									data:{
										status,
										result: {
											message
										}
									}
								} = res
								// console.log(message)
								if (status == 1) {
									_this.$message({
										message: message,
										type: 'success'
									})
									_this.ruleForm = {}
									setTimeout(function(){
										uni.navigateTo({
											url: '/pages/userLogin/userLogin'
										})
									},1000);
								} else {
									_this.$message(message)
								}
							},
							fail(err) {
								console.log(err)
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				
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