<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;display: flex;justify-content: center;"><b>Product
						Purchase</b></span>
			</div>
			<el-form :label-position="labelPosition" label-width="140px" :style="{marginLeft: fromleft}">
				<div style="display: flex;justify-content: space-between;">
					<div class="selectAddress">
						<div style="line-height: 80rpx;color: #79666B;"><b>配送地址：</b></div>
						<el-select v-model="values" placeholder="请选择地址:可不选" :clearable="true">
							<el-option v-for="item in options" :key="item.value" :label="item.realname" :value="item.id">
							</el-option>
						</el-select>
					</div>
					<div>
						<el-button size="medium" @tap="hanlderesrt">返回列表</el-button>
					</div>
				</div>
				<div style="line-height: 80rpx;color: #79666B;font-size: 30rpx;margin-top: 30rpx"><b>购买用户：{{nickname}}</b></div>
			</el-form>
			<el-table :data="tableData" style="width: 100%;margin-top: 50rpx;" show-summary
				:summary-method="getSummaries">
				<el-table-column prop="id" label="ID">
				</el-table-column>
				<el-table-column prop="goodssn" label="订单号" align="center">
				</el-table-column>
				<el-table-column prop="title" label="配套名字" align="center">
				</el-table-column>
				<el-table-column prop="total" label="库存" align="center">
				</el-table-column>
				<el-table-column prop="buynum" label="购买数量" align="center">
					<template slot-scope="scope">
						<el-input-number v-model="scope.row.buynum" size="small" :min="1"
							label="描述文字"></el-input-number>
					</template>
				</el-table-column>
				<el-table-column prop="price" label="价格 MYR" align="center">
				</el-table-column>
			</el-table>
			
			<div class="sumbit" style="font-size: 26rpx;color:#5B626B">
				<strong>总计 {{sumPrice}}</strong>
			</div>
			<div class="sumbit">
				<el-button size="small" type="primary" @tap="hanldePurchase">提交订单</el-button>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: "product-detail",
		props: {
			todatail: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				inputwith: '65%',
				currentPage1: 5,
				labelPosition: 'right',
				fromleft: '40rpx',
				tableData: [],
				options: [],
				sumPrice:0,
				values:'',
				nickname:uni.getStorageSync('username')
			};
		},
		mounted() {
			// console.log(uni.getStorageSync('username'))
			this.initialize()
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			hanldePurchase(){
				let _this = this
				let goods = _this.tableData.map(item=>{
					return {
						id:item.id,
						buynum:item.buynum
					}
				})
				let creatGood = {
					'totalprice' : _this.sumPrice,
					'goods': goods,
					'addressid': _this.values
				}
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.create',creatGood)
					.then(res=>{
						// console.log(res)
						const { status,result:{orderid}} = res
						if(status==1){
							_this.$message({
								message:'提交成功！',
								type: 'success'
							});
							uni.navigateTo({
								url:'/pages/generateOrder/generateOrder?orderid='+orderid
							})
						}else{
							_this.$message.error('提交失败！');
						}
					})
					.catch(err=>{
						console.log(err)
					})
			},
			getSummaries(param) {
				const {
					columns,
					data
				} = param;
				const sums = [];
				let _this = this
				columns.forEach((column, index) => {
					if (index === 0) {
						sums[index] = '合计';
						return;
					}else if(index==5){
						let allTotals = 0
						// console.log(this.tableData); // 在控制台打印所有行的信息
						_this.tableData.forEach(res=>{
							// console.log(res)
							allTotals += res.buynum * parseFloat(res.price)
						})
						_this.sumPrice = allTotals.toFixed(2)
						sums[index] = allTotals.toFixed(2) +' MYR';
						return;
					}
				});

				return sums;
			},
			hanlderesrt() {
				uni.navigateTo({
					url: '/pages/product-purchase/product-purchase'
				})
			},
			initialize() {
				// console.log('接收到的数据', this.todatail)
				let self = this
				self.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.confirm&ids=' + self.todatail)
					.then(res => {
						const {
							result: {
								addresslist,
								list
							}
						} = res
						// console.log(list)
						self.options = addresslist
						self.tableData = list
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
					this.inputwith = '100%'
					this.fromleft = '0rpx'
				} else {
					this.labelPosition = 'right'
					this.inputwith = '65%'
					this.fromleft = '40rpx'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.fromleft = '0rpx'
						this.labelPosition = 'top'
						this.inputwith = '100%'
					} else {
						this.fromleft = '40rpx'
						this.labelPosition = 'right'
						this.inputwith = '65%'
					}
				}
			},
		}
	}
</script>

<style scoped>
	.equal-width-column {
		width: 100%;
	}

	.sumbit {
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
	}
	
	.selectAddress{
		display: flex;
		font-size: 30rpx;
	}
	
	@media screen and (max-width: 990px) {
		.selectAddress{
			display: grid;
		}
	}
</style>