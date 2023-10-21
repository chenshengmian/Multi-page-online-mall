<template>
	<view>
		<el-card>
			<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="260px"
				class="demo-ruleForm">
				<el-form-item label="Identity card (Front) 身份证前:" prop="idcard_pre">
					<el-input v-model="ruleForm.idcard_pre"></el-input>
				</el-form-item>
				<el-form-item label="Account Holder 持卡者名字:" prop="account_holder">
					<el-input v-model="ruleForm.account_holder"></el-input>
				</el-form-item>
				<el-form-item label="Bank Name 银行名字:" prop="bank_name">
					<el-input v-model="ruleForm.bank_name"></el-input>
				</el-form-item>
				<el-form-item label="Bank Branch 银行分行:" prop="bank_branch">
					<el-input v-model="ruleForm.bank_branch"></el-input>
				</el-form-item>
				<el-form-item label="Bank Account Number 户口号码:" prop="bank_account_number">
					<el-input v-model="ruleForm.bank_account_number"></el-input>
				</el-form-item>
				<el-form-item label="Swift code:" prop="swift_code">
					<el-input v-model="ruleForm.swift_code"></el-input>
				</el-form-item>
				<el-form-item label="Supporting Document 支持文件:" prop="supporting_document">
					<el-input v-model="ruleForm.supporting_document" :disabled="true"></el-input>
					<el-upload
						action="https://mlxy.hgwl633.com/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.uploadfile"
						:on-success="hanldeSuccess" :on-remove="handleRemove">
						<el-button slot="trigger" size="small" type="primary"
							style="margin-top: 20rpx;">选取文件</el-button></el-upload>
				</el-form-item>
				<el-form-item label="ID/ Passport Number 身份证号码:" prop="id_number">
					<el-input v-model="ruleForm.id_number"></el-input>
				</el-form-item>
				<el-form-item label="身份证正面照片:" prop="idcard_imageone">
					<!-- <el-input v-model="ruleForm.idcard_imageone"></el-input> -->
					<el-upload
						accept=".jpeg,.png,.jpg,.bmp,.gif"
						action="https://mlxy.hgwl633.com/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.uploadfile"
						:on-success="hanldeSuccessp" :on-remove="handleRemovep" list-type="picture">
						<el-button slot="trigger" size="small" type="primary"
							style="margin-top: 20rpx;">选取图片</el-button></el-upload>
				</el-form-item>
				<el-form-item label="Email:" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @tap="submitForm('ruleForm')" size="small">{{handlesubit}}</el-button>
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
						message: '请输入身份证',
						trigger: 'blur'
					}],
					account_holder: [{
						required: true,
						message: '请输入持卡者姓名',
						trigger: 'blur'
					}],
					bank_name: [{
						required: true,
						message: '请输入银行名字',
						trigger: 'blur'
					}],
					bank_branch: [{
						required: true,
						message: '请输入银行分行',
						trigger: 'blur'
					}],
					bank_account_number: [{
						required: true,
						message: '请输入银行分行',
						trigger: 'blur'
					}],
					swift_code: [{
						required: true,
						message: '请输入Swift code',
						trigger: 'blur'
					}],
					supporting_document: [{
						required: true,
						message: '请上传支持文件',
						trigger: 'change'
					}],
					id_number: [{
						required: true,
						message: '请填写身份证号码',
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: '请填写Email',
						trigger: 'blur'
					}, {
						type: 'email',
						message: '请输入正确的邮箱地址',
						trigger: ['blur', 'change']
					}]
				}
			};
		},
		mounted() {
			this.getkyc()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handleRemove(file) {
				// console.log(file)
				this.ruleForm.supporting_document = ''
			},
			handleRemovep(file) {
				// console.log(file)
				this.ruleForm.idcard_imageone = ''
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
					this.$message.error('上传失败');
				} else {
					this.$message({
						message: '上传成功',
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
					this.$message.error('上传失败');
				} else {
					this.$message({
						message: '上传成功',
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
							_this.handlesubit = '修改'
							_this.ruleForm.type = 2
						} else {
							_this.handlesubit = '立即创建'
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
								// console.log(res)
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