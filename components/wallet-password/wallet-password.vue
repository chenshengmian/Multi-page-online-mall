<template>
	<view>
		<el-card>
			<div class="wallect">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelwidth"
					class="demo-ruleForm" :label-position="labelPosition" size="small">
					<div class="title">{{title}}</div>
					<el-form-item :label="$t('pass.IDcard')+':'" prop="postcard">
						<el-input clearable v-model="ruleForm.postcard" autocomplete="off" size="small"style="width:600rpx;"></el-input>
					</el-form-item>
					<el-form-item :label="$t('pass.Currentpassword')+':'" prop="newpass">
						<el-input clearable type="password" v-model="ruleForm.newpass" size="small"></el-input>
					</el-form-item>
					<el-form-item :label="$t('home.Newpasswords')+':'" prop="pass">
						<el-input clearable type="password" v-model="ruleForm.pass" autocomplete="off" size="small"></el-input>
					</el-form-item>
					<el-form-item :label="$t('home.Repeatthepassword')+':'" prop="checkPass">
						<el-input clearable type="password" v-model="ruleForm.checkPass" autocomplete="off" size="small"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button @click="submitForm" size="small">{{$t('home.Changepassword')}}</el-button>
						<!-- <el-button @click="resetForm('ruleForm')"  size="small">Retrieve EWallet Password</el-button> -->
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: 'wallet-password',
		data() {
			var validatePassnew = (rule, value, callback) => {
				if (!value) {
					return callback(new Error(this.$t('pass.enterpassword')));
				}
			};
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
				} else if (value !== this.ruleForm.pass) {
					callback(new Error(this.$t('pass.passwordtwice')));
				} else {
					callback();
				}
			};
			var validatepasscard = (rule, value, callback) => {
				if (value === '') {
					callback(new Error(this.$t('pass.lastdigits')));
				} else {
					callback();
				}
			};
			return {
				title: this.$t('pass.Changepasswords'),
				ruleForm: {
					pass: '',
					checkPass: '',
					newpass: '',
					postcard:'',
					userid:''
				},					
				labelPosition:'right',
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					newpass: [{
						validator: validatePassnew,
						trigger: 'blur'
					}],
					postcard:[{
						validator: validatepasscard,
						trigger: 'blur'
					},{
						min: 6,
						max: 6,
						message: this.$t('pass.is6characters'),
						trigger: 'blur'
					}]
				}
			};
		},
		computed:{
			labelwidth(){
				if(uni.getLocale()=='en'){
					return '450rpx'
				}else{
					return '200rpx'
				}
			}
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			submitForm() {
				let _this = this
				const {userinfo} = uni.getStorageSync('tokenArray')
				_this.ruleForm.userid = userinfo
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.hanldeChangeEwallpass',_this.ruleForm)
					.then(res=>{
						console.log(res)
						const { status,result:{message} } = res
						if(status==1){
							_this.$message({
								message: message,
								type: 'success'
							});
						}else if(status==0){
							_this.$message.error(message);
						}
					})
					.catch(err=>{
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.labelPosition = 'top'
				} else {
					this.labelPosition = 'right'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.labelPosition = 'top'
					} else {
						this.labelPosition = 'right'
					}
				}
			},
			// resetForm(formName) {
			// 	this.$refs[formName].resetFields();
			// 	this.title = '修改电子钱包密码 - Retrieve EWallet Password Successful Send'
			// }
		}
	}
</script>

<style>
	.wallect{
		display: flex;
		justify-content: center;
	}
	.el-card{
		font-size: 26rpx;
	}
	.title{
		text-align: center;
		font-size: 26rpx;
		color:#5B626B;
	}

	@media screen and (max-width: 990px) {
		.wallect{
			display: block;
		}
	}
</style>