<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>{{$t('menu.ewalletwithdrawals')}}</span>
			</div>
			<div style="font-size: 26rpx;text-decoration: underline;">{{$t('withdrawal.accountSummary')}}</div>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.cashPointsBalance')}}</el-col>
				<el-col :span="elright">{{credit2}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.transferableBalance')}}</el-col>
				<el-col :span="elright">{{credit5}}</el-col>
			</el-row>
			<!-- <el-row>
				<el-col :span="elleft">类型</el-col>
				<el-col :span="elright">：转账至银行户口</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行类型</el-col>
				<el-col :span="elright">：0.00</el-col>
			</el-row> -->
			<!-- <el-row>
				<el-col :span="elleft">银行户口持有者</el-col>
				<el-col :span="elright">：TAN LAY FONG</el-col>
			</el-row> -->
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.identityCard')}}</el-col>
				<el-col :span="elright">{{Identitycard}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.accountHolder')}}</el-col>
				<el-col :span="elright">{{AccountHolder}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.bankName')}}</el-col>
				<el-col :span="elright">{{BankName}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.bankBranch')}}</el-col>
				<el-col :span="elright">{{BankBranch}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.bankAccountNumber')}}</el-col>
				<el-col :span="elright">{{BankAccountNumber}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">Swift code</el-col>
				<el-col :span="elright">{{Swiftcode}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.supportingDocument')}}</el-col>
				<el-col :span="elright"><el-link :href="SupportingDocument" type="primary"
						target="_blank">{{$t('withdrawal.supportingDocument')}}</el-link></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.idCard')}}</el-col>
				<el-col :span="elright">{{idNumber}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('login.eamil')}}</el-col>
				<el-col :span="elright">{{eamil}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">{{$t('withdrawal.transferAmount')}}</el-col>
				<el-col :span="elright"><el-input v-model="mony" size="mini"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft"></el-col>
				<el-col :span="elright" style="margin-top: 25rpx;"><el-checkbox
						v-model="checked">{{$t('withdrawal.agreement')}}</el-checkbox></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft"></el-col>
				<el-col :span="elright" style="margin-top: 25rpx;color: red;">{{$t('withdrawal.statement')}}</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft"></el-col>
				<el-col :span="elright" style="margin-top: 25rpx;"><el-button size="mini"
						@tap="handleWithdrawal">{{$t('withdrawal.withdrawals')}}</el-button>
						<el-button size="mini"
								@tap="handleChangebank">{{$t('withdrawal.newBankInfo')}}</el-button></el-col>
			</el-row>
		</el-card>

	</view>
</template>

<script>
	export default {
		name: "withdraw-money",
		data() {
			return {
				elleft: 5,
				elright: 8,
				checked: false,
				Identitycard: 0,
				AccountHolder: '',
				eamil: '',
				idNumber: "",
				SupportingDocument: '',
				Swiftcode: '',
				BankAccountNumber: 0,
				BankBranch: '',
				BankName: "",
				mony: 0,
				credit5: '',
				credit2: ''
			};
		},
		mounted() {
			this.login()
			// this.getkyc()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
			this.$router.go(0)
		},
		methods: {
			handleChangebank(){
				uni.navigateTo({
					url:'/pages/know-yourCustomer/know-yourCustomer'
				})
			},
			async login() {
				// console.log(new Date().getTime())
				let self = this
				await this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status,
						} = res
						if (status == 100) {
							self.$message({
								message: '登录状态已过期！',
								center: true
							});
							uni.navigateTo({
								url: '/pages/userLogin/userLogin'
							})
						} else {
							this.getkyc()
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			getkyc() {
				// console.log(new Date().getTime())
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc')
					.then(res => {
						console.log(res)
						const {
							status,
							result: {
								account_holder,
								bank_account_number,
								bank_branch,
								bank_name,
								email,
								id_number,
								idcard_imageone,
								idcard_imagetwo,
								idcard_pre,
								all_supporting_document,
								swift_code,
								credit5,
								credit2
							}
						} = res
						_this.Identitycard = idcard_pre
						_this.eamil = email
						_this.idNumber = id_number
						_this.SupportingDocument = all_supporting_document
						_this.Swiftcode = swift_code
						_this.BankAccountNumber = bank_account_number
						_this.BankBranch = bank_branch
						_this.BankName = bank_name
						_this.AccountHolder = account_holder
						_this.credit5 = credit5
						_this.credit2 = credit2
						if (status != 1) {
							_this.$alert('是否前往认证KYC', '认证', {
								confirmButtonText: '确定',
								showClose: false,
								closeOnHashChange:true,
								callback: action => {
									uni.navigateTo({
										url: '/pages/know-yourCustomer/know-yourCustomer'
									})
								}
							});
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.elleft = 20
					this.elright = 24
				} else {
					this.elleft = 5
					this.elright = 8
				}
			},
			handleWithdrawal() {
				let _this = this
				let type = 0
				_this.checked ? type = 1 : type = 0
				console.log(type)
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.withdrawalmoney&type=' +
						type + '&money=' + _this.mony)
					.then(res => {
						console.log(res)
						const {
							status,
							result: {
								message
							}
						} = res
						let msgstatus = status == 0 ? 'error' : 'success'
						_this.$message({
							showClose: true,
							message: message,
							type: msgstatus
						})
						if (status == 1) {
							_this.$emit('wmindex', '2-3')
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.elleft = 20
						this.elright = 24
					} else {
						this.elleft = 5
						this.elright = 8
					}
				}
			},
		}
	}
</script>

<style>
	.el-col {
		border-radius: 4px;
		display: flex;
		margin-top: 10rpx;
	}

	.el-col span {
		display: inline-block;
		margin-top: 10rpx;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.el-row {
		font-size: 26rpx;
	}

	.el-input {
		display: inline-block;
	}

	
	@media screen and (max-width: 990px) {
		.el-row {
			display: flex;
			justify-content: space-between;
		}
	}
</style>