<template>
	<view style="display: flex;justify-content: center;align-items: center;height: 100vh;">
		<el-card v-bind:style="{width: widths}">
			<div slot="header" class="clearfix">
				<span><b>{{$t('enroll.Registered')}}</b></span>
			</div>
			<el-form ref="ruleForm" :rules="rules" :model="ruleForm" :label-width="labelWidth" :label-position="labelPosition" >
				<el-form-item :label="$t('NickName')+':'">
					<el-input v-model="ruleForm.usernickname" ></el-input>
				</el-form-item>
				<el-form-item :label="$t('login.eamil')+':'" required prop="useraccount">
					<el-input v-model="ruleForm.useraccount" :placeholder="$t('withdrawal.fillemail')"></el-input>
				</el-form-item>
				<el-form-item>
					<!-- <el-input v-model="ruleForm.eamils" :placeholder="$t('login.eamil')"></el-input> -->
					<el-button style="float: right;" type="text" @click="handleEamil" :loading="loadingq"><b><i
								class="el-icon-thumb" v-show="thumb"></i> {{wait}}</b><span v-show="loadingq">s</span></el-button>
				</el-form-item>
				<el-form-item :label="$t('home.Emailcode')+':'" prop="verifycode">
					<el-input v-model="ruleForm.verifycode"></el-input>
				</el-form-item>
				<el-form-item :label="$t('login.password')+':'" required prop="userpass">
					<el-input v-model="ruleForm.userpass" :placeholder="$t('pass.enteryourpassword')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('reg.Referrer')">
					<el-input v-model="ruleForm.useragentid"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')" :loading="loadingv">{{$t('index.Registernow')}}</el-button>
					<el-button @tap="retrunLogin">{{$t('index.login')}}</el-button>
				</el-form-item>
			</el-form>
		</el-card>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				widths: '45%',
				labelPosition: 'right',
				loadingv:false,
				loadingq:false,
				thumb:true,
				wait:this.$t('home.Verifymailbox'),
				ruleForm: {
					usernickname: '',
					useraccount: '',
					userpass: '',
					useragentid: '',
					verifycode:''
				},
				rules: {
					useraccount: [{
						required: true,
						message: this.$t('withdrawal.fillemail'),
						trigger: 'blur'
					}, ],
					userpass: [{
						required: true,
						message: this.$t('pass.enteryourpassword'),
						trigger: 'blur'
					}, ],
					verifycode:[{
						required: true,
						message: this.$t('pass.emailverificationcode'),
						trigger: 'blur'
					}]
				}
			}
		},
		computed:{
			labelWidth(){
				if(uni.getLocale()=='en'){
					return '180px';
				}else{
					return '100px';
				}
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: uni.getStorageSync('name')
			})
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		methods: {
			handleEamil() {
				if(this.ruleForm.useraccount==''){
					this.$message(this.$t('withdrawal.fillemail'))
				}else{
					this.thumb = false
					this.loadingq = true
					this.wait = 60
					let _this = this
					let array = {
						'email': _this.ruleForm.useraccount
					}
					_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.verifyUserRegexists', array)
						.then(res => {
							_this.loadingq = true
							// console.log(res)
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
			submitForm(ruleForm) {
				let _this = this
				this.$refs[ruleForm].validate((valid) => {
					if (valid) {
						_this.loadingv = true
						// alert('submit!');
						_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.reg',_this.ruleForm)
							.then(res=>{
								console.log(res)
								_this.loadingq = false
								_this.wait = _this.$t('home.Verifymailbox');
								clearInterval(_this.timer);
								_this.thumb = true
								_this.loadingv = false 
								const { status } = res
								if(status==1){
									_this.$message({
										message: this.$t('index.regs'),
										type: 'success'
									})
									uni.navigateTo({
										url:'/pages/userLogin/userLogin'
									})
								}else{
									const { result:{message} } = res
									_this.$message(message)
								}
							})
							.catch(err=>{
								console.log(err)
							})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			retrunLogin() {
				uni.navigateTo({
					url: '/pages/userLogin/userLogin'
				})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.widths = '90%'
					this.labelPosition = 'top'
					// this.pagercounts= 2
				} else {
					this.widths = "45%"
					this.labelPosition = 'right'
					// this.pagercounts= 8
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.widths = '90%'
						this.labelPosition = 'top'
						// this.pagercounts= 2
					} else {
						this.widths = "45%"
						this.labelPosition = 'right'
						// this.pagercounts= 8
					}
				}
			},
		}
	}
</script>