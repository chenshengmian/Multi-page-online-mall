<template>
	<view style="background-color: #F5F5F5;">
		<div class="container">
			<el-card class="box-card" style="width: 900rpx;position: relative;overflow: visible;">
				<div style="width: 100%;display: flex;justify-content: center; position: absolute;transform: translateY(-78%);right: 2px;">
					 <image
					    style="width: 100px; height: 100px;border-radius: 50%;"
					    :src="url"
					    >
					</image>
				</div>
				<div style="margin-top: 100rpx;font-size: 26rpx;display: flex;justify-content: center;"><el-link
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

						<el-form-item :label="$t('home.Newpasswords')" prop="newuserpass">
							<el-input type="password" :placeholder="$t('home.Newpasswords')" v-model="ruleForm.newuserpass"></el-input>
						</el-form-item>
						<el-form-item :label="$t('home.Repeatthepassword')" prop="userpass">
							<el-input type="password" :placeholder="$t('home.Repeatthepassword')" v-model="ruleForm.userpass"></el-input>
						</el-form-item>
						<el-form-item :label="$t('login.eamil')" prop="eamils" :rules="[
      { required: true, message: $t('enroll.enteremailaddress'), trigger: 'blur' },
      { type: 'email', message: $t('enroll.validemailaddress'), trigger: ['blur', 'change'] }
    ]">
							<el-input v-model="ruleForm.eamils" :placeholder="$t('login.eamil')"></el-input>
							<!-- <el-button style="float: right;" type="text" @click="handleEamil"><b><i
										class="el-icon-thumb"></i> 验证邮箱</b></el-button> -->
						</el-form-item>
						<el-form-item>
							<!-- <el-input v-model="ruleForm.eamils" :placeholder="$t('login.eamil')"></el-input> -->
							<el-button style="float: right;" type="text" @click="handleEamil" :loading="loadingq"><b><i
										class="el-icon-thumb" v-show="thumb"></i> {{wait}}</b><span v-show="loadingq">s</span></el-button>
						</el-form-item>
						<el-form-item :label="$t('home.Emailcode')" prop="eamilVerifycode">
							<el-input v-model="ruleForm.eamilVerifycode"></el-input>
						</el-form-item>
						<el-form-item style="display: flex;justify-content: end;">
							<el-button type="text" style="margin-right: 50rpx;"
								@click="handleresrt"><b>{{$t('table.raturnhome')}}</b></el-button>
							<el-button @click="submitForm('ruleForm')">{{$t('home.Changepassword')}}</el-button>
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
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error(this.$t('pass.enteryourpassword')));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error(this.$t('pass.enteragain')));
				} else if (value !== this.ruleForm.newuserpass) {
					callback(new Error(this.$t('pass.passwordtwice')));
				} else {
					callback();
				}
			};
			var validateeamils = (rule, value, callback) => {
				if (value === '') {
					callback(new Error(this.$t('pass.emailverificationcode')));
				} else {
					callback();
				}
			};
			return {
				loadingq:false,
				thumb:true,
				wait:this.$t('home.Verifymailbox'),
				url:'',
				typeStatus1: 'info',
				typeStatus2: 'info',
				typeStatus3: 'info',
				// labelPosition: 'right',
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
		computed:{
			labelPosition(){
				if(uni.getLocale()=='en'){
					return 'top'
				}else{
					return 'right'
				}
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: uni.getStorageSync('name')
			})
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
				if(this.ruleForm.eamils==''){
					this.$message(this.$t('withdrawal.fillemail'))
				}else{
					this.thumb = false
					this.loadingq = true
					this.wait = 60
					let _this = this
					let array = {
						'email': _this.ruleForm.eamils
					}
					_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.verifyUserexists', array)
						.then(res => {
							_this.loadingq = true
							console.log(res)
							if(typeof(res) == 'string'){
								_this.loadingq = false
								_this.thumb = true
								clearInterval(_this.timer);
								_this.wait = _this.$t('home.Verifymailbox')
								_this.$message(this.$t('enroll.codeiscorrect'))
							}else{
								const {
									status,
									result: {
										message
									}
								} = res
								_this.rogerThat = message
								if (status == 1) {
									// _this.loadingq = false
									_this.$message({
										message: this.$t('enroll.sentagain'),
										type: 'success'
									})
								} else {
									_this.loadingq = false
									_this.thumb = true
									clearInterval(_this.timer);
									_this.wait = _this.$t('home.Verifymailbox')
									_this.$message(message)
								}
							}
							
						})
						.catch(err => {
							console.log(err)
						})
					this.timer = setInterval(() => {
						
						if (_this.wait > 0 && _this.wait <= 60) {
							_this.wait-- ;
						} else {
							_this.loadingq = false
							_this.wait = _this.$t('home.Verifymailbox');
							clearInterval(_this.timer);
							_this.thumb = true
							_this.timer = null;
						  }
						}, 1000);
					}
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
					uni.setStorageSync('textlang',2)
				} else if (lan == 'zh-Hans') {
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'primary'
					this.typeStatus3 = 'info'
					uni.setStorageSync('textlang',0)
				} else {
					this.typeStatus1 = 'info'
					this.typeStatus2 = 'info'
					this.typeStatus3 = 'primary'
					uni.setStorageSync('textlang',1)
				}
				uni.setLocale(lan)
				this.$i18n.locale = lan
				// //this.$router.go(0)   
			},
			names() {
				let _this = this
				let textlang =  uni.getStorageSync('textlang')
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner&textlang='+textlang)
					.then(res => {
						console.log(res)
						const {
							result: {
								shopmes: {
									name,
									copyrighttext,
									logo
								}
							}
						} = res
						uni.setNavigationBarTitle({
							title: name
						})
						this.footer = copyrighttext
						uni.setStorageSync('footer', copyrighttext)
						uni.setStorageSync('name', name)
						uni.setStorageSync('logo',logo)
						_this.url = logo
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
						let textlang =  uni.getStorageSync('textlang')
						uni.request({
							url: config.https +
								'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.handlenewPass&textlang='+textlang,
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
		bottom: 220rpx;
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