<template>
	<view>
		<el-card>
			<div class="login">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelwidth"
					class="demo-ruleForm" :label-position="labelPosition" size="small" >
					<div class="title">{{$t('pass.Changepassword')}}</div>
					<el-form-item :label="$t('pass.IDcard')+':'" prop="postcard">
						<el-input clearable v-model="ruleForm.postcard"  size="small" style="width:600rpx;"></el-input>
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
						<el-button  @click="submitForm('ruleForm')" size="small">{{$t('home.Changepassword')}}</el-button>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: 'login-password',
		data() {
			var validatePassnew = (rule, value, callback) => {
				if (!value) {
					return callback(new Error(this.$t('pass.enterpassword')));
				}else {
					if (this.ruleForm.newpass !== '') {
						this.$refs.ruleForm.validateField('newpass');
					}
					callback();
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
				ruleForm: {
					pass: '',
					checkPass: '',
					newpass: '',
					userid:'',
					postcard:''
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
						message: this.$t('pass.is6characters'),
						trigger: 'blur'
					},{
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
			this.getScreenWidth(); 
			window.addEventListener('resize', this.handleResize); 
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); 
		},
		methods: {
			submitForm(formName) {
				const {userinfo} = uni.getStorageSync('tokenArray')
				this.ruleForm.userid = userinfo
				console.log(this.ruleForm)
				let self = this
				self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.hanldeChangepass',self.ruleForm)
					.then(res=>{
						// console.log(res)
						const { status,result:{message} } = res
						if(status==1){
							self.$message({
								message: message,
								type: 'success'
							});
						}else if(status==0){
							self.$message.error(message);
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
			// }
		}
	}
</script>

<style>
	.login{
		display: flex;
		justify-content: center;
		width: 100%;
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
		.login{
			display: block;
		}
	}

</style>