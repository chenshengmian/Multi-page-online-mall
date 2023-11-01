<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>{{$t('menu.shoppinghistory')}}</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="line-height: 72rpx;font-size: 26rpx;margin-right: 20rpx;">{{$t('home.yearmonth')}}: </div>
					<div class="online">
						<div class="month">
							<el-select v-model="mouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium">
								<div v-for="(item,index) in mouthArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="year" slot="prepend" :placeholder="$t('purse.Pleaseselect')"  size="medium">
								<div v-for="item in yearArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="member" slot="prepend" :placeholder="$t('purse.Pleaseselect')"  size="medium">
								<div v-for="(item,index) in memberArr">
									<el-option :label="item" :value="++index"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium" @tap="handleSelect">{{$t('purse.submit')}}</el-button>
					</div>
				</div>
				<el-table :data="tableData" class="custom-table" @row-click="hanldeDeatils" border v-if="idStatus">

					<el-table-column prop="goodtype.name" :label="$t('product.Gradename')" align="center">
					</el-table-column>
					<el-table-column prop="ordersn" :label="$t('product.Ordernumber')" align="center">
					</el-table-column>
					<el-table-column prop="createtime" :label="$t('product.Timeorder')" align="center">
					</el-table-column>
				<!-- 	<el-table-column prop="into" label="税务发票编号" align="center">
					</el-table-column> -->
					<el-table-column prop="price" :label="$t('product.Amount')" align="center">
						<template slot-scope="scope">
							MYR    {{scope.row.price}}  
						</template>
					</el-table-column>
					<el-table-column prop="statusstr" :label="$t('product.Paymentstatus')" align="center">
						<template slot-scope="scope">
							<div v-if="scope.row.status==0"><el-tag type="danger">{{scope.row.statusstr}}</el-tag></div> 
							<div v-else-if="scope.row.status==1"><el-tag type="success">{{scope.row.statusstr}}</el-tag></div> 
							<div v-else-if="scope.row.status==2"><el-tag type="warning">{{scope.row.statusstr}}</el-tag></div>
							<div v-else-if="scope.row.status==3"><el-tag type="info">{{scope.row.statusstr}}</el-tag></div>
							<div v-else style="color: blueviolet;"><el-tag>{{scope.row.statusstr}}</el-tag></div>
						</template>
					</el-table-column>
				</el-table>
				<div  v-else>
					<el-card shadow="never" class="text item">
						<div><b>{{$t('product.Gradename')}}</b></div>
						<div><b>{{$t('product.Ordernumber')}}</b></div>
						<div><b>{{$t('product.Timeorder')}}</b></div>
						<div><b>{{$t('product.Amount')}}</b></div>
						<div><b>{{$t('product.Paymentstatus')}}</b></div>
					</el-card>
					<block v-for="data in tableData" >
						<el-card shadow="never" class="text item">
							<div @click="hanldeDeatils(data)">
								<div>{{data.goodtype.name}}</div>
								<div>{{data.ordersn}}</div>
								<div>{{data.price}}</div>
								<div>{{data.createtime}}</div>
								<div v-if="data.status==0"><el-link type="danger">{{data.statusstr}}</el-link></div>
								<div v-else-if="data.status==1"><el-link type="success">{{data.statusstr}}</el-link></div> 
								<div v-else-if="data.status==2"><el-link type="warning">{{data.statusstr}}</el-link></div>
								<div v-else-if="data.status==3"><el-link type="info">{{data.statusstr}}</el-link></div>
								<div v-else style="color: blueviolet;"><el-link>{{data.statusstr}}</el-link></div>
							</div>
						</el-card>
					</block>
				</div>
				<div v-show="paginations" class="pagination">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" 
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "purchase-history",
		data() {
			return {
				idStatus:true,
				mouth: '',
				year: '',
				mouthArr: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
				memberArr: [this.$t('product.MemberOrder'), this.$t('product.Helporders')],
				yearArr: [],
				tableData: [],
				member: '',
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				paginations:false
			};
		},
		mounted() {
			this.getMounth()
			this.gethistory()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); 
		},
		methods: {
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.idStatus = false
				} else {
					this.idStatus = true
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.idStatus = false
					} else {
						this.idStatus = true
					}
				}
			},
			hanldeDeatils(info){
				uni.navigateTo({
					url:'/pages/generateOrder/generateOrder?orderid='+info.id
				})
			},
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 5, yearNew - 4, yearNew - 3, yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				this.mouth = this.mouthArr[mouthNew]
				this.year = yearNew
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				uni.setStorageSync('pageSize',val)
				this.pageSize = val;
				this.gethistory();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.gethistory();
			},
			gethistory() {
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order&page=' + self
						.currentPage + '&type=' + self.member + '&pagesize=' + self.pageSize + '&year=' + self.year+'&month='+self.mouth)
					.then(res => {
						const { result:{list,total} } = res
						// console.log(res)
						self.tableData = list
						self.counttotal = Number(total)
						if(Number(total)>0){
							self.paginations = true
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleSelect() {
				let self = this
				self.gethistory()
				// console.log(self.member)
			}
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
	.month,
	.year {
		margin-right: 20rpx;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
	}

	.yearmonth {
		display: flex;
	}

	.online {
		display: flex;
	}

	@media screen and (max-width: 990px) {
		.yearmonth {
			display: block !important;
		}

		.sumbit {
			margin-top: 20rpx;
		}

		.online {
			display: grid;
			grid-template-columns: 1fr;
		}

		.online div {
			margin-top: 20rpx;
		}
	}
</style>