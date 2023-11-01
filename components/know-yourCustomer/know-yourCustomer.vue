<template>
	<view>
		<el-card>
			<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" :label-width="labelWidth"
				class="demo-ruleForm">
				
				<el-form-item :label="$t('withdrawal.identityCard')+'：'" prop="idcard_pre">
					<el-input v-model="ruleForm.idcard_pre"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.accountHolder')+'：'" prop="account_holder">
					<el-input v-model="ruleForm.account_holder"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.bankName')+'：'" prop="bank_name">
					<el-input v-model="ruleForm.bank_name"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.bankBranch')+'：'" prop="bank_branch">
					<el-input v-model="ruleForm.bank_branch"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.bankAccountNumber')+'：'" prop="bank_account_number">
					<el-input v-model="ruleForm.bank_account_number"></el-input>
				</el-form-item>
				<el-form-item label="Swift code：" prop="swift_code">
					<el-input v-model="ruleForm.swift_code"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.supportingDocument')+'：'" prop="supporting_document">
					<el-input v-model="ruleForm.supporting_document" :disabled="true"></el-input>
					<el-upload
						action="https://mlxy.hgwl633.com/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.uploadfile"
						:on-success="hanldeSuccess" :on-remove="handleRemove" :file-list="fileListwen">
						<el-button slot="trigger" size="small" type="primary"
							style="margin-top: 20rpx;">{{$t('withdrawal.selectfile')}}</el-button></el-upload>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.idCard')+'：'" prop="id_number">
					<el-input v-model="ruleForm.id_number"></el-input>
				</el-form-item>
				<el-form-item :label="$t('withdrawal.photocard')+'：'" prop="idcard_imageone">
					<!-- <el-input v-model="ruleForm.idcard_imageone"></el-input> -->
					<el-upload
						accept=".jpeg,.png,.jpg,.bmp,.gif"
						action="https://mlxy.hgwl633.com/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.uploadfile"
						:on-success="hanldeSuccessp" :on-remove="handleRemovep" list-type="picture" :file-list="fileList">
						<el-button slot="trigger" size="small" type="primary"
							style="margin-top: 20rpx;">{{$t('withdrawal.choosepicture')}}</el-button></el-upload>
				</el-form-item>
				<el-form-item :label="$t('login.eamil')+'：'" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @tap="submitForm('ruleForm')" size="small" v-show="kycStatus">{{$t('withdrawal.revise')}}</el-button>
					<el-button type="primary" @tap="submitForm('ruleForm')" size="small" v-show="!kycStatus">{{$t('withdrawal.agreement')}}</el-button>
					<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
				</el-form-item>
			</el-form>
		</el-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				handlesubit: '',
				fromdata: '',
				fileList:[],
				fileListwen:[],
				kycStatus:true,
				ruleForm: {
					idcard_pre: '',
					account_holder: '',
					bank_name: '',
					bank_branch: '',
					bank_account_number: '',
					swift_code: '',
					supporting_document: '',
					id_number: '',
					idcard_imageone: '',
					email: '',
					type: 0,
				},
				rules: {
					idcard_pre: [{
						required: true,
						message: this.$t('withdrawal.enteryourID'),
						trigger: 'blur'
					}],
					account_holder: [{
						required: true,
						message: this.$t('withdrawal.entercardholder'),
						trigger: 'blur'
					}],
					bank_name: [{
						required: true,
						message: this.$t('withdrawal.enterthename'),
						trigger: 'blur'
					}],
					bank_branch: [{
						required: true,
						message: this.$t('withdrawal.enterbankbranch'),
						trigger: 'blur'
					}],
					bank_account_number: [{
						required: true,
						message: this.$t('withdrawal.enteryourbank'),
						trigger: 'blur'
					}],
					swift_code: [{
						required: true,
						message: this.$t('withdrawal.enterSwiftcode'),
						trigger: 'blur'
					}],
					supporting_document: [{
						required: true,
						message: this.$t('withdrawal.uploadsupportingdocuments'),
						trigger: 'change'
					}],
					id_number: [{
						required: true,
						message: this.$t('withdrawal.fillIDnumber'),
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: this.$t('withdrawal.fillemail'),
						trigger: 'blur'
					}, {
						type: 'email',
						message: this.$t('withdrawal.entervalidemailaddress'),
						trigger: ['blur', 'change']
					}]
				}
			};
		},
		computed:{
			labelWidth(){
				if(uni.getLocale()=='en'){
					return  '280px'
				}else{
					return '200px'
				}
			}
		},
		mounted() {
			this.login()
			this.getkyc()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			// beforeUpload(){
			// 	// console.log(this.fileList)
			// 	if(this.fileList.length>=1){
			// 		this.$message({
			// 			message: '只能上传一张或一个文件，请先清除原本的文件或者图片！',
			// 			center: true
			// 		})
			// 		return false;
			// 	}
			// },
			async login() {
				let self = this
				await this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status,
							result: {
								avatar,
								nickname,
								adstatus
							}
						} = res
						self.username = nickname
						if (status == 100) {
							self.$message({
								message: this.$t('home.loginstatus'),
								center: true
							});
							uni.navigateTo({
								url: '/pages/userLogin/userLogin'
							})
						} else {
							// self.maindisable = true
						}
						self.circleUrl = avatar
					})
					.catch(err => {
						console.log(err)
					})
			
				const {
					userinfo
				} = uni.getStorageSync('tokenArray')
				let array = {
					'userid': userinfo
				}
			},
			handleRemove(file) {
				// console.log(file)
				this.ruleForm.supporting_document = ''
			},
			handleRemovep(file) {
				// console.log(file)
				this.ruleForm.idcard_imageone = ''
				// this.fileList = []
			},
			hanldeSuccessp(res){
				// console.log(res)
				const {
					status,
					result: {
						allurl,
						url
					}
				} = res
				if (status == 0) {
					this.$message.error(this.$t('withdrawal.Uploadfailed'));
				} else {
					this.$message({
						message: this.$t('withdrawal.uploadsuccessful'),
						type: 'success'
					});
				}
				this.ruleForm.idcard_imageone = url
			},
			hanldeSuccess(response) {
				// console.log(response)
				const {
					status,
					result: {
						allurl,
						url
					}
				} = response
				if (status == 0) {
					this.$message.error(this.$t('withdrawal.Uploadfailed'));
				} else {
					this.$message({
						message: this.$t('withdrawal.uploadsuccessful'),
						type: 'success'
					});
				}
				this.ruleForm.supporting_document = url
			},
			async getkyc() {
				let _this = this
				await _this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc')
					.then(res => {
						const {
							status,
						} = res
						if (status == 1) {
							const { result } = res
							console.log(result)
							_this.ruleForm = result
							const arr = [{name:result.all_idcard_imageone,url:result.all_idcard_imageone}]
							const wen = [{name:result.all_supporting_document,url:result.all_supporting_document}]
							_this.fileListwen = wen
							_this.fileList = arr
							_this.kycStatus = true
							_this.ruleForm.type = 2
						} else {
							_this.kycStatus = false
							_this.ruleForm.type = 1
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					// this.labelw = '220rpx'
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
			submitForm(formName) {
				let _this = this
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						// console.log(_this.ruleForm)
						_this.$axios.post(
								'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.dealkyc', _this
								.ruleForm)
							.then(res => {
								console.log(res)
								const {
									status,
									result: {
										message
									}
								} = res
								if (status == 1) {
									_this.$message({
										showClose: true,
										message: message,
										type: 'success'
									});
									_this.$emit('kycindex', '2-2')
								} else {
									_this.$message({
										showClose: true,
										message: message,
										type: 'error'
									})
								}
							})
							.catch(err => {
								console.log(err)
							})
					} else {
						return false;
					}
				});
			},
		}
	}
</script>

<style>
	.el-card {
		font-size: 26rpx;
	}

	.title {
		text-align: center;
		font-size: 26rpx;
		color: #5B626B;
	}
</style>