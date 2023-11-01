<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;"><b>{{$t('menu.productshopping')}}</b></span>
			</div>
			<el-form :label-position="labelPosition" label-width="140px" :style="{marginLeft: fromleft}"
				:model="formLabelAlign">
				<el-form-item :label="$t('product.email')+' :'">
					<el-input v-model="formLabelAlign.email" :style="{width: inputwith}" size="small"></el-input>
				</el-form-item>
				<el-form-item :label="$t('address.Contactnumber')+' :'">
					<el-input v-model="formLabelAlign.phone" :style="{width: inputwith}" size="small"></el-input>
				</el-form-item>
			</el-form>
			<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<block v-for="item in tabbleTap">
					<el-menu-item :index="item.id">{{item.name}}</el-menu-item>
				</block>
			</el-menu> -->
			<el-tabs v-model="activeIndex" @tab-click="handleSelect" :stretch='true'>
				<block v-for="item in tabbleTap">
					<el-tab-pane :label="item.name" :name="item.id"></el-tab-pane>
				</block>
			</el-tabs>
			<!-- <el-tabs @tab-click="handleSelects" v-model="activeIndex" >
				<block v-for="item in tabbleTap">
					<el-tab-pane :label="item.name" :name="item.id"></el-tab-pane>
				</block>
			</el-tabs> -->
			<!-- <el-table :data="tableData" style="width: 100%;margin-top: 20rpx;" @row-click="hanldedetail"> -->
			<el-table :data="tableData" style="width: 100%;margin-top: 20rpx;" @selection-change="handleSelectionChange"
				v-if="idStatus">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="id" label="ID" align="center" width="150">
				</el-table-column>
				<!-- <el-table-column fixed>
					<template slot-scope="scope">
						<img :src="scope.row.thumb" width="50" height="50" />
					</template>
				</el-table-column> -->
				<el-table-column prop="title" :label="$t('product.Matchingname')" align="center">
				</el-table-column>
				<el-table-column prop="total" :label="$t('shopping.inventory')" align="center">
				</el-table-column>
				<el-table-column prop="marketprice" :label="$t('product.Price')+'  MYR'" align="center">
					<template slot-scope="scope">
						{{scope.row.marketprice}}
					</template>
				</el-table-column>
				<el-table-column prop="minprice" :label="$t('product.lowestprice')+'  MYR'" align="center">
					<template slot-scope="scope">
						{{scope.row.minprice}}
					</template>
				</el-table-column>
				<el-table-column :label="$t('product.Highestprice')+'  MYR'" align="center">
					<template slot-scope="scope">
						{{scope.row.maxprice}}
					</template>
				</el-table-column>
				<el-table-column :label="$t('shopping.Sales')" align="center">
					<template slot-scope="scope">
						{{scope.row.sales}}
					</template>
				</el-table-column>
			</el-table>
			<div v-else>
				<el-card shadow="never" class="text item">
					<div><b>{{$t('product.Matchingname')}}</b></div>
					<div><b>{{$t('shopping.inventory')}}</b></div>
					<div><b>{{$t('product.Price')}}</b></div>
					<div><b>{{$t('product.lowestprice')}}</b></div>
					<div><b>{{$t('product.Highestprice')}}</b></div>
					<div><b>{{$t('shopping.Sales')}}</b></div>
				</el-card>
				<block v-for="data in tableData">
					<el-card shadow="never" class="text item">
						<div>
							<el-checkbox v-model="data.virtual"></el-checkbox>
							<div>{{data.title}}</div>
							<div>{{data.total}}</div>
							<div>{{data.marketprice}}</div>
							<div>{{data.minprice}}</div>
							<div>{{data.maxprice}}</div>
							<div>{{data.sales}}</div>
						</div>
					</el-card>
				</block>
			</div>
			<div class="sumbit">
				<el-button size="small" type="primary" @tap="hanldedetail" v-if="idStatus">{{$t('purse.submit')}}</el-button>
				<el-button size="small" type="primary" @tap="hanldedetaila" v-else>{{$t('purse.submit')}}</el-button>
			</div>
			<!-- <div v-show="paginations" class="pagination sumbit">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
					:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
					layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
			</div> -->
		</el-card>
	</view>
</template>

<script>
	export default {
		name: "product-purchase",
		data() {
			return {
				inputwith: '65%',
				currentPage1: 5,
				labelPosition: 'right',
				fromleft: '40rpx',
				formLabelAlign: {
					email: uni.getStorageSync('email'),
					phone: uni.getStorageSync('mobile')
				},
				// counttotal: 0,
				tableData: [], // 表格数据源
				// currentPage: 1, // 当前页码
				// pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				activeIndex: '',
				tabbleTap: '',
				// paginations: false,
				ids: '',
				idStatus: true,
			};
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getProduct()
			this.getcatelist()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handleSelectionChange(val) {
				let str = ''
				val.forEach(res => {
					str += ',' + res.id
				})
				this.ids = str.slice(1)
			},
			handleSelect(param) {
				// console.log(this.activeIndex)
				// let self = this
				// self.activeIndex = param
				this.getProduct()
			},
			getcatelist() {
				let self = this
				self.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.goodscates&pagesize=100')
					.then(res => {
						// console.log(res)
						const {
							result: {
								list
							}
						} = res
						self.tabbleTap = list
					})
					.catch(err => {
						console.log(err)
					})
			},
			// 处理每页显示条数变化
			// handleSizeChange(val) {
			// 	// console.log('处理每页显示条数变化',this.pageSize)
			// 	uni.setStorageSync('pageSize', val)
			// 	this.pageSize = val;
			// 	this.getProduct();
			// },
			// // 处理当前页码变化
			// handleCurrentChange(val) {
			// 	// console.log('处理当前页码变化',val)
			// 	this.currentPage = val;
			// 	this.getProduct();
			// },
			getProduct() {
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.getlist&cate=' + self
						.activeIndex)
					.then(res => {
						console.log(res)
						const {
							result: {
								total,
								list
							}
						} = res
						self.tableData = list
					})
					.catch(err => {
						console.log(err);
					})
			},
			hanldedetaila(){
				// console.log(this.tableData)
				let ids = ''
				let newdata = this.tableData.filter(item=>{
					return item.virtual == true
				})
				newdata.forEach(res=>{
					ids += ','+res.id
				})
				let str = ids.slice(1)
				if (str == '') {
					this.$message({
						message: this.$t('product.select'),
						type: 'warning'
					});
				} else {
					uni.navigateTo({
						url: '/pages/product-purchase/product-detail?ids=' + str
					})
				}
			},
			hanldedetail() {
				if (this.ids == '') {
					this.$message({
						message: this.$t('product.select'),
						type: 'warning'
					});
				} else {
					uni.navigateTo({
						url: '/pages/product-purchase/product-detail?ids=' + this.ids
					})
				}
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
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
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

<style>
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
</style>