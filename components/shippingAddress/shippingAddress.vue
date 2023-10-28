<template>
	<view>
		<el-card>
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;"><b>收货地址</b></span>
			</div>
			<el-skeleton :rows="10" animated v-show="loading"/>
			<div v-show="!loading">
				<el-empty v-show="addressStatus" :image-size="200" description="暂无收货地址"></el-empty>
				<!-- 添加或者修改收货地址 -->
				<el-dialog :title="title" :visible.sync="dialogFormVisible" :modal="false" :width="width" @close="handleClose">
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm">
						<el-form-item label="联系电话" prop="mobile" :label-width="formLabelWidth">
							<el-input v-model="ruleForm.mobile" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="联系信息" prop="realname" :label-width="formLabelWidth">
							<el-input v-model="ruleForm.realname" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="是否默认地址" prop="defaults" :label-width="formLabelWidth">
							<el-switch v-model="ruleForm.defaults"></el-switch>
						</el-form-item>
						<el-form-item label="联系地址" prop="address" :label-width="formLabelWidth">
							<el-input type="textarea" v-model="ruleForm.address"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button type="primary" size="mini" @tap="submitForm('ruleForm')">确 定</el-button>
					</div>
				</el-dialog>
				
				<block v-for="item in addressList" v-show="!addressStatus">
					<el-descriptions :title="item.realname" direction="vertical" :column="4" border style="margin-top: 20rpx;">
						<template slot="extra">
							<el-button size="small" @tap="handleRevise(item.id)">修改</el-button>
						</template>
						<el-descriptions-item label="联系信息"  :labelStyle='labelStyle'>{{item.realname}}</el-descriptions-item>
						<el-descriptions-item label="联系电话" :labelStyle='labelStyle'>{{item.mobile}}</el-descriptions-item>
						<el-descriptions-item label="是否默认地址" :labelStyle='labelStyle'>
							<el-tag size="small" type="danger" v-if="item.isdefault==1">是</el-tag>
							<el-tag size="small" type="info" v-else>否</el-tag>
						</el-descriptions-item >
						<el-descriptions-item label="联系地址" :labelStyle='labelStyle'>{{item.address}}</el-descriptions-item>
					</el-descriptions>
				</block>
				<div v-show="paginations" class="pagination sumbit" style="margin-top: 20rpx;display: flex;justify-content: center;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div> 
				
				<div style="margin-top: 30rpx;display: flex;justify-content: center;">
					<el-button size="mini" @tap="handleAdd">添加地址</el-button>
				</div>
			</div>
			
		</el-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading:true,
				dialogTableVisible: false,
				dialogFormVisible: false,
				addressList:[],
				 //label样式
				labelStyle: { 'width': '200px' },
				paginations:false,
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				ruleForm: {
					mobile: '',
					realname: '',
					isdefault:0,
					defaults: false,
					address: '',
					id:''
				},
				addressStatus:true,
				title:'',
				rules: {
					mobile: [{
						required: true,
						message: '请输入联系电话',
						trigger: 'blur'
					}],
					realname: [{
						required: true,
						message: '请输入联系信息',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: '请输入联系地址',
						trigger: 'blur'
					}],
				},
				formLabelWidth: '120px',
				width: '40%',
				labelPosition: 'right'
			};
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
			handleClose(){
				this.ruleForm = {}
			},
			submitForm(formName) {
				let _this = this
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						// alert('submit!');
						if(!_this.ruleForm.defaults){
							_this.ruleForm.isdefault = 0
						}else{
							_this.ruleForm.isdefault = 1
						}
						_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.address.post',_this.ruleForm)
							.then(res=>{
								console.log(res)
								const { status } = res
								if(status==1){
									_this.getAdresslist()
									_this.dialogFormVisible = false;
									let messages = _this.ruleForm.id == '' ? '地址添加成功!' : '地址修改成功!'
									_this.$message({
									    message: messages,
									    type: 'success'
									});
								}else{
									_this.dialogFormVisible = false;
									let message = _this.ruleForm.id == '' ? '地址添加失败!' : '地址修改失败!'
									_this.$message.error(message);
								}
							})
							.catch(err=>{
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
				_this.title = '添加收货地址'
				// _this.$axios.post()
			},
			handleRevise(id) {
				this.title = '修改收货地址'
				this.ruleForm.id = id
				this.dialogFormVisible = true
				let newruleForm =  this.addressList.filter(item=>{
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
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.address&page='+_this.currentPage+'&pagesize='+_this.pageSize)
					.then(res => {
						console.log(res)
						const { status,result:{list,totalpage,total} } = res
						_this.addressList = list
						if(status==1){
							_this.loading = false
						}
						if(Number(total)>0){
							_this.addressStatus = false
						}
						if(totalpage>1){
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
	.el-card {
		font-size: 26rpx;
	}

	/deep/.is-bordered {
		width: 100% !important;
	}

	@media screen and (max-width: 990px) {}
</style>