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
					<!-- <div style="line-height: 72rpx;font-size: 26rpx;margin-right: 20rpx;">{{$t('home.yearmonth')}}: </div> -->
					<div>
						<div class="online">
							<div class="month">
								<el-select v-model="mouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')"
									size="medium">
									<div v-for="(item,index) in mouthArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
							<div class="year">
								<el-select v-model="year" slot="prepend" :placeholder="$t('purse.Pleaseselect')"
									size="medium">
									<div v-for="item in yearArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
							<!-- <div class="year">
								<el-select v-model="member" slot="prepend" :placeholder="$t('purse.Pleaseselect')"  size="medium">
									<div v-for="(item,index) in memberArr">
										<el-option :label="item" :value="++index"></el-option>
									</div>
								</el-select>
							</div> -->
							<div class="sumbit">
								<el-button type="primary" size="medium"
									@tap="handleSelect">{{$t('purse.submit')}}</el-button>
							</div>
						</div>

					</div>

					<div v-if="idStatus">
						<el-button type="primary" size="medium" @tap="handleAllprint"
							class="dangerd">{{$t('history.printing')}}</el-button>
					</div>
				</div>
				<el-table :data="tableData" class="custom-table" @selection-change="handleSelectionChange"
					border v-if="idStatus" style="margin-top: 30rpx;">
					<el-table-column type="selection" width="55" align="center" :selectable="isRowSelectable">
					</el-table-column>
					<el-table-column prop="goods[0].goods[0].title" :label="$t('product.Gradename')" align="center">
					</el-table-column>
					<el-table-column prop="goods[0].goods[0].thumb" :label="$t('history.thumb')" align="center">
						<template slot-scope="scope">
							<el-image style="width: 100px; height: 100px" :src="scope.row.goods[0].goods[0].thumb">
							</el-image>
						</template>
					</el-table-column>
					<el-table-column prop="ordersn" :label="$t('product.Ordernumber')" align="center">
					</el-table-column>
					<el-table-column prop="createtime" :label="$t('product.Timeorder')" align="center">
					</el-table-column>
					<!-- 	<el-table-column prop="into" label="税务发票编号" align="center">
					</el-table-column> -->
					<el-table-column prop="price" :label="$t('product.Amount')" align="center">
						<template slot-scope="scope">
							MYR {{scope.row.price}}
						</template>
					</el-table-column>
					<el-table-column prop="statusstr" :label="$t('product.Paymentstatus')" align="center">
						<template slot-scope="scope">
							<div v-if="scope.row.status==0"><el-tag type="danger">{{scope.row.statusstr}}</el-tag></div>
							<div v-else-if="scope.row.status==1"><el-tag type="info">{{scope.row.statusstr}}</el-tag>
							</div>
							<div v-else-if="scope.row.status==2"><el-tag type="warning">{{scope.row.statusstr}}</el-tag>
							</div>
							<div v-else-if="scope.row.status==3"><el-tag type="success">{{scope.row.statusstr}}</el-tag>
							</div>
							<div v-else style="color: blueviolet;"><el-tag>{{scope.row.statusstr}}</el-tag></div>
						</template>
					</el-table-column>
					<el-table-column prop="price" :label="$t('home.operate')" align="center">
						<template slot-scope="scope">
							<el-button size="small"
								@tap="handleDeatils(scope.row.id)">{{$t('history.Details')}}</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div v-else>
					<div
						style="margin-top: 20rpx;font-size: 28rpx;border-top: 1rpx solid #d1d1d1;border-bottom: 1rpx solid #d1d1d1;padding: 20rpx 0rpx;">
						{{$t('Record.information')}}
					</div>
					<!-- <el-card shadow="never" class="text item">
						<div><b>{{$t('Record.information')}}</b></div> -->
					<!-- <div><b>{{$t('product.Gradename')}}</b></div>
						<div><b>{{$t('product.Ordernumber')}}</b></div>
						<div><b>{{$t('product.Timeorder')}}</b></div>
						<div><b>{{$t('product.Amount')}}</b></div>
						<div><b>{{$t('product.Paymentstatus')}}</b></div> -->
					<!-- </el-card> -->
					<block v-for="data in tableData">
						<el-card shadow="never" class="text item">
							<div @click="hanldeDeatils(data)">
								<div>{{data.goodtype.name}}</div>
								<div><b>{{data.ordersn}}</b></div>
								<div>
									<el-image style="width: 100px; height: 100px" :src="data.goods[0].goods[0].thumb">
									</el-image>
								</div>
								<div style="font-size: 25rpx;color: #afafaf;">{{data.createtime}}</div>
								<div style="display: flex;justify-content: space-between;">
									<div style="color: red;"><span style="font-size: 25rpx;">MYR</span> {{data.price}}
									</div>
									<div>
										<div v-if="data.status==0"><el-link type="danger">{{data.statusstr}}</el-link>
										</div>
										<div v-else-if="data.status==1"><el-link
												type="success">{{data.statusstr}}</el-link></div>
										<div v-else-if="data.status==2"><el-link
												type="warning">{{data.statusstr}}</el-link></div>
										<div v-else-if="data.status==3"><el-link
												type="info">{{data.statusstr}}</el-link></div>
										<div v-else style="color: blueviolet;"><el-link>{{data.statusstr}}</el-link>
										</div>
									</div>
								</div>
							</div>
						</el-card>
					</block>
				</div>
				<div class="pagination">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
						:hide-on-single-page="hidepage" layout="total, sizes, prev, pager, next"
						:total="counttotal"></el-pagination>
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
				idStatus: true,
				mouth: '',
				year: '',
				mouthArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				memberArr: [this.$t('product.MemberOrder'), this.$t('product.Helporders')],
				yearArr: [],
				tableData: [],
				member: 1,
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				hidepage: true,
				
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
			
			isRowSelectable(row) {
				return row.status == 3;
			},
			handleSelectionChange(val) {
				// console.log(val)
				let str = ''
				val.forEach(res=>{
					str+= res.id + ','
				})
				this.$emit('getstr',str)
				// console.log(str)
			},
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
			handleDeatils(id) {
				uni.navigateTo({
					url: '/pages/generateOrder/generateOrder?orderid=' + id
				})
			},
			handleAllprint() {
				this.$emit('disd',true)
			},
			hanldeDeatils(info) {
				uni.navigateTo({
					url: '/pages/generateOrder/generateOrder?orderid=' + info.id
				})
			},
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 5, yearNew - 4, yearNew - 3, yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				// this.mouth = this.mouthArr[mouthNew]
				// this.year = yearNew
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				uni.setStorageSync('pageSize', val)
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
						.currentPage + '&type=' + self.member + '&pagesize=' + self.pageSize + '&year=' + self.year +
						'&month=' + self.mouth)
					.then(res => {
						const {
							result: {
								list,
								total
							}
						} = res
						// console.log(list)
						self.tableData = list
						self.counttotal = Number(total)
						// if(Number(total)>0){
						// 	self.paginations = true
						// }
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleSelect() {
				let self = this
				self.gethistory()
				// console.log(self.member)
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

	.month,
	.year {
		margin-right: 20rpx;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		width: 100%;
		
	}

	.yearmonth {
		display: flex;
		justify-content: space-between;
	}

	.online {
		display: flex;
	}

	@media screen and (max-width: 990px) {
		.el-pagination {
			white-space: normal; /* 允许分页组件换行 */
			overflow-x: visible; /* 取消水平滚动条 */
			-webkit-overflow-scrolling: auto; /* 取消触摸滚动 */
		}
		
		.el-pagination .el-pager {
			display: block; /* 设置分页按钮为块级元素，使其垂直排列 */
		}
		.yearmonth {
			display: block !important;
		}

		.dangerd {
			margin-top: 20rpx;
		}

		.sumbit {
			margin-top: 20rpx;
		}

		.online {
			display: grid;
			grid-template-columns: 1fr;
		}

		.online div {
			margin-top: 15rpx;
		}
	}
</style>