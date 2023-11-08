<template>
	<view>
		<el-card>
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;"><b>{{$t('home.address')}}</b></span>
			</div>
			<el-skeleton :rows="10" animated v-show="loading" />
			<div v-show="!loading">
				<el-empty v-show="addressStatus" :image-size="200" :description="$t('address.nodeliveryaddress')"></el-empty>
				<!-- 添加或者修改收货地址 -->
				<el-dialog :title="title" :visible.sync="dialogFormVisible" :modal="false" :width="width"
					@close="handleClose" :close-on-click-modal="false" >
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" >
						<el-form-item :label="$t('address.Contactnumber')" prop="mobile" :label-width="formLabelWidth">
							<el-input v-model="ruleForm.mobile" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item :label="$t('address.ContactInformation')" prop="realname" :label-width="formLabelWidth">
							<el-input v-model="ruleForm.realname" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item :label="$t('address.defaultaddress')" prop="defaults" :label-width="formLabelWidth">
							<el-switch v-model="ruleForm.defaults"></el-switch>
						</el-form-item>
						<el-form-item :label="$t('address.Contactaddress')" prop="address" :label-width="formLabelWidth">
							<el-input type="textarea" v-model="ruleForm.address"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button type="primary" size="mini" @tap="submitForm('ruleForm')">{{$t('address.Definitely')}}</el-button>
					</div>
				</el-dialog>

				<block v-for="item in addressList" v-show="!addressStatus">
					<el-descriptions :title="item.realname" direction="vertical" :column="4" border
						style="margin-top: 20rpx;">
						<template slot="extra">
							<el-button size="small" @tap="handleRevise(item.id)">{{$t('withdrawal.revise')}}</el-button>
							<el-button size="small"  @tap="handledel(item.id)">{{$t('address.Delete')}}</el-button>
						</template>
						<el-descriptions-item :label="$t('address.ContactInformation')"
							:labelStyle='labelStyle'>{{item.realname}}</el-descriptions-item>
						<el-descriptions-item :label="$t('address.Contactnumber')"
							:labelStyle='labelStyle'>{{item.mobile}}</el-descriptions-item>
						<el-descriptions-item :label="$t('address.defaultaddress')" :labelStyle='labelStyle'>
							<el-tag size="small" type="danger" v-if="item.isdefault==1">{{$t('address.is')}}</el-tag>
							<el-tag size="small" type="info" v-else>{{$t('address.off')}}</el-tag>
						</el-descriptions-item>
						<el-descriptions-item :label="$t('address.Contactaddress')"
							:labelStyle='labelStyle'>{{item.address}}</el-descriptions-item>
						<!-- <el-descriptions-item label="操作" :labelStyle='labelStyle'></el-descriptions-item> -->
					</el-descriptions>
				</block>
				<div v-show="paginations" class="pagination sumbit"
					style="margin-top: 20rpx;display: flex;justify-content: center;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>

				<div style="margin-top: 30rpx;display: flex;justify-content: center;">
					<el-button size="mini" @tap="handleAdd">{{$t('address.Addaddress')}}</el-button>
				</div>
			</div>

		</el-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				dialogTableVisible: false,
				dialogFormVisible: false,
				addressList: [],
				//label样式
				labelStyle: {
					'width': '200px'
				},
				paginations: false,
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				ruleForm: {
					mobile: '',
					realname: '',
					isdefault: 0,
					defaults: false,
					address: '',
					id: ''
				},
				addressStatus: true,
				title: '',
				rules: {
					mobile: [{
						required: true,
						message: this.$t('address.enternumber'),
						trigger: 'blur'
					}],
					realname: [{
						required: true,
						message: this.$t('address.enterinformation'),
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: this.$t('address.enteraddress'),
						trigger: 'blur'
					}],
				},
				width: '40%',
				labelPosition: 'right'
			};
		},
		computed:{
			formLabelWidth(){
				if(uni.getLocale()=='en'){
					return '160px'
				}else{
					return '100px'
				}
			}
		},
		mounted() {
			this.getAdresslist()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handledel(id) {
				// console.log(id)
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.address.deladdress&id='+id)
					.then(res=>{
						// console.log(res)
						const { status,result:{message}} = res
						let type
						if(status==1){
							type = 'success'
							_this.getAdresslist()
						}else{
							type = 'error'
						}
						_this.$message({
						    showClose: true,
						    message: message,
						    type: type
						});
					})
					.catch(err=>{
						console.log(err)
					})
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				uni.setStorageSync('pageSize', val)
				this.pageSize = val;
				this.getAdresslist();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getAdresslist();
			},
			handleClose() {
				this.ruleForm = {}
			},
			submitForm(formName) {
				let _this = this
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						// alert('submit!');
						if (!_this.ruleForm.defaults) {
							_this.ruleForm.isdefault = 0
						} else {
							_this.ruleForm.isdefault = 1
						}
						_this.$axios.post(
								'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.address.post',
								_this.ruleForm)
							.then(res => {
								console.log(res)
								const {
									status
								} = res
								if (status == 1) {
									_this.getAdresslist()
									_this.dialogFormVisible = false;
									let messages = _this.ruleForm.id == '' ? _this.$t('address.addsucceed') : _this.$t('address.resucceed')
									_this.$message({
										message: messages,
										type: 'success'
									});
								} else {
									_this.dialogFormVisible = false;
									let message = _this.ruleForm.id == '' ? _this.$t('address.addfail') : _this.$t('address.refail')
									_this.$message.error(message);
								}
							})
							.catch(err => {
								console.log(err)
							})
					} else {
						// console.log('error submit!!');
						return false;
					}
				});
			},
			handleAdd() {
				let _this = this
				_this.dialogFormVisible = true
				_this.title = this.$t('address.Addaddress')
				// _this.$axios.post()
			},
			handleRevise(id) {
				this.title = this.$t('address.Modifyaddress')
				this.ruleForm.id = id
				this.dialogFormVisible = true
				let newruleForm = this.addressList.filter(item => {
					return item.id == id
				})
				this.ruleForm = newruleForm[0]
				// if(newruleForm[0].isdefault==0){
				// 	this.ruleForm.defaults = false
				// }else{
				// 	this.ruleForm.defaults = true
				// }
			},
			getAdresslist() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.address&page=' + _this
						.currentPage + '&pagesize=' + _this.pageSize)
					.then(res => {
						// console.log(res)
						const {
							status,
							result: {
								list,
								totalpage,
								total
							}
						} = res
						_this.addressList = list
						if (status == 1) {
							_this.loading = false
						}
						if (Number(total) > 0) {
							_this.addressStatus = false
						}
						if (totalpage > 1) {
							_this.paginations = true
							_this.counttotal = Number(total)
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.width = '90%'
					this.labelPosition = 'top'
				} else {
					this.width = '40%'
					this.labelPosition = 'right'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.width = '90%'
						this.labelPosition = 'top'
					} else {
						this.width = '40%'
						this.labelPosition = 'right'
					}
				}
			},
		}
	}
</script>

<style scoped>
	.el-dialog{
		z-index: 9999999;
	}
	.el-card {
		font-size: 26rpx;
	}

	/deep/.is-bordered {
		width: 100% !important;
	}

	@media screen and (max-width: 990px) {}
</style>