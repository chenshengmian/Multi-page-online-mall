<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;display: flex;justify-content: center;"><b>{{$t('menu.productshopping')}}</b></span>
			</div>
			<el-form :label-position="labelPosition" label-width="140px" :style="{marginLeft: fromleft}">
				<div style="display: flex;justify-content: space-between;">
					<div class="selectAddress">
						<div style="line-height: 80rpx;color: #79666B;"><b>{{$t('product.Shippingaddress')}}：</b></div>
						<el-select v-model="values" :placeholder="$t('product.selectaddress')" :clearable="true">
							<el-option v-for="item in options" :key="item.value" :label="item.realname" :value="item.id">
							</el-option>
						</el-select>
					</div>
					<div>
						<el-button size="medium" @tap="hanlderesrt">{{$t('product.Returnlist')}}</el-button>
					</div>
				</div>
				<div style="line-height: 80rpx;color: #79666B;font-size: 30rpx;margin-top: 30rpx"><b>{{$t('product.Purchasingusers')}}：{{nickname}}</b></div>
			</el-form>
			<el-table :data="tableData" style="width: 100%;margin-top: 50rpx;" show-summary
				:summary-method="getSummaries" v-if="idStatus">
				<el-table-column prop="id" label="ID">
				</el-table-column>
				<el-table-column prop="goodssn" :label="$t('product.Ordernumber')" align="center">
				</el-table-column>
				<el-table-column prop="title" :label="$t('product.Matchingname')" align="center">
				</el-table-column>
				<el-table-column prop="total" :label="$t('shopping.inventory')" align="center">
				</el-table-column>
				<el-table-column prop="buynum" :label="$t('product.Quantitypurchased')" align="center">
					<template slot-scope="scope">
						<el-input-number v-model="scope.row.buynum" size="small" :min="1" ></el-input-number>
					</template>
				</el-table-column>
				<el-table-column prop="price" :label="$t('product.Price')+'  MYR'" align="center">
				</el-table-column>
			</el-table>
			<div  v-else>
				<div style="font-size: 28rpx;margin-bottom: 30rpx;;border-top: 1rpx solid #d1d1d1;border-bottom: 1rpx solid #d1d1d1;padding: 20rpx 0rpx;">{{$t('menu.productshopping')}}</div>
				<!-- <el-card shadow="never" class="text item tablediv">
					<div><b>{{$t('product.Ordernumber')}}</b></div>
					<div><b>{{$t('product.Matchingname')}}</b></div>
					<div><b>{{$t('shopping.inventory')}}</b></div>
					<div><b>{{$t('product.Quantitypurchased')}}</b></div>
					<div><b>{{$t('product.Price')}}</b></div>
				</el-card> -->
				<block v-for="data in tableData" >
					<el-card shadow="never" class="text item">
						<div class="tablediv">
							<div>{{data.goodssn}}</div>
							<div>{{data.title}}</div>
							<div>{{data.total}}</div>
							<div style="display: flex;justify-content: space-between;">
								<div style="color: red;"><span style="font-size: 23rpx;">MYR</span> {{data.price}}</div>
								<div><el-input-number v-model="data.buynum" size="mini" :min="1" @change="changeNum"></el-input-number></div>
							</div>
						</div>
					</el-card>
				</block>
			</div>
			
			<div class="sumbit" style="font-size: 26rpx;color:#5B626B">
				<strong>{{$t('product.total')}} {{sumPrice}}</strong>
			</div>
			<div class="sumbit">
				<el-button size="small" type="primary" @tap="hanldePurchase">{{$t('product.Submitorder')}}</el-button>
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
				idStatus:true,
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
			// this.changeNum()
			this.handleResize()
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			changeNum(){
				let _this = this
				// console.log(_this.tableData)
				let sum = 0
				_this.tableData.forEach(item=>{
					sum += item.buynum * Number(item.price)
				})
				_this.sumPrice = sum.toFixed(2)
			},
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
								message:_this.$t('product.submissionsuccessful')+'!',
								type: 'success'
							});
							uni.navigateTo({
								url:'/pages/generateOrder/generateOrder?orderid='+orderid
							})
						}else{
							_this.$message.error(_this.$t('product.Submissionfailed')+'!');
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
						sums[index] = _this.$t('product.totalh');
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
						addresslist.forEach(res=>{
							if(res.isdefault==1){
								self.values = res.id
							} 
						})
						self.options = addresslist
						self.tableData = list
						self.changeNum()
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
					this.idStatus = false
				} else {
					this.labelPosition = 'right'
					this.inputwith = '65%'
					this.fromleft = '40rpx'
					this.idStatus = true
				}
			},
			handleResize() {
				console.log(this.idStatus);
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					if (newScreenWidth <= 990) {
						this.fromleft = '0rpx'
						this.labelPosition = 'top'
						this.inputwith = '100%'
						this.idStatus = false
						
					} else {
						this.fromleft = '40rpx'
						this.labelPosition = 'right'
						this.inputwith = '65%'
						this.idStatus = true
					}
				}
			},
		}
	}
</script>

<style scoped>
	.tablediv div{
		margin-top: 5rpx;
	}
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
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