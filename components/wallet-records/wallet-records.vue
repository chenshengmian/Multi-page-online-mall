<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>{{$t('menu.ewallethistory')}}</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div>
					<div class="mony">
						<div style="font-size: 30rpx;">{{$t('purse.purse')}}</div>
						<div>
							<el-select v-model="select" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium"
								style="width: 1820rpx">
								<el-option :label="$t('purse.Cashcredits')" value="3"></el-option>
								<el-option :label="$t('purse.Travelcredits')" value="1"></el-option>
								<el-option :label="$t('purse.ProductPoints')" value="2"></el-option>
							</el-select>
						</div>
					</div>
					<div class="datamonth">
						<div style="font-size: 30rpx;">{{$t('home.yearmonth')}}</div>
						<div>
							<div class="block" style="display: inline-block;">
								<el-select v-model="mouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium"
									style="width: 900rpx;margin-right: 20rpx;">
									<div v-for="(item,index) in mouthArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
							<div class="block" style="display: inline-block;">
								<el-select v-model="year" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium"
									style="width: 900rpx;">
									<div v-for="(item,index) in yearArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
						</div>
					</div>
					<div class="sumbit" style="display: flex;justify-content: end;">
						<el-button type="primary" size="medium" @tap="handlechanginfo">{{$t('purse.submit')}}</el-button>
					</div>
				</div>
				<el-table :data="tableData" class="custom-table" border v-if="idstatus" style="margin-top: 20rpx;">
					<!-- <div v-if="idstatus">
						<el-table-column label="ID" width="40">
							<template slot-scope="scope">
								{{ (scope.$index+1)+(currentPage-1)*pageSize }}
							</template>
						</el-table-column>
					</div> -->
					
					<el-table-column prop="remark" :label="$t('purse.TransactionDescription')"  width="650px">
					</el-table-column>
					<el-table-column prop="num" :label="$t('purse.Incoming')" align="center">
					</el-table-column>
					<el-table-column prop="credittype" :label="$t('purse.type')" align="center">
						<template slot-scope="scope">
							<div v-if="scope.row.credittype=='credit5'">{{$t('purse.Cashcredits')}}</div>
							<div v-else-if="scope.row.credittype=='credit1'">{{$t('purse.Travelcredits')}}</div>
							<div v-else>{{$t('purse.ProductPoints')}}</div>
						</template>
					</el-table-column>
					<el-table-column prop="timestr" :label="$t('purse.date')" align="center">
					</el-table-column>
				</el-table>
				<div  v-else> 
					<!-- <el-card shadow="never" class="text item">
						<div><b>{{$t('purse.date')}}</b></div>
						<div><b>{{$t('purse.TransactionDescription')}}</b></div>
						<div><b>{{$t('purse.Incoming')}}</b></div>
						<div><b>{{$t('purse.type')}}</b></div>
					</el-card> -->
					<div style="margin-top: 20rpx;font-size: 28rpx;border-top: 1rpx solid #d1d1d1;border-bottom: 1rpx solid #d1d1d1;padding: 20rpx 0rpx;">{{$t('Record.information')}}</div>
					<block v-for="data in tableData">
						<el-card shadow="never" class="text item">
							<div>{{data.timestr}}</div>
							<div>{{data.remark}}</div>
							<!-- <div>{{data.num}}</div> -->
							<div style="display: flex;justify-content: space-between;">
								<div style="color: red;"><span style="font-size: 23rpx;">MYR</span> {{data.num}}</div>
								<div>
									<div v-if="data.credittype=='credit5'"><el-link type="danger">{{$t('purse.Cashcredits')}}</el-link></div>
									<div v-else-if="data.credittype=='credit1'"><el-link type="success">{{$t('purse.Travelcredits')}}</el-link></div> 
									<div v-else><el-link>{{$t('purse.ProductPoints')}}</el-link></div>
								</div>
							</div>
						</el-card>
					</block>
				</div>
				<div class="pagination" style="display: flex;justify-content: center;margin-top: 20rpx;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :hide-on-single-page="paginations"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"  
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "wallet-records",
		data() {
			return {
				select: '',
				value2: '',
				value3: '',
				mouth: '',
				year: '',
				mouthArr: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
				yearArr: [],
				counttotal: 0,
				tableData: [], // 表格数据源
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				paginations:true,
				idstatus:true,
				// pagercounts:8,
				// smalls:false,
				
			};
		},
		mounted() {
			this.getMounth()
			this.getuserinfo()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		methods: {
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.idstatus = false
					// this.pagercounts= 2
				} else {
					this.idstatus = true
					// this.pagercounts= 8
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.idstatus = false
						// this.pagercounts= 2
					} else {
						this.idstatus = true
						// this.pagercounts= 8
					}
				}
			},
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 5, yearNew - 4, yearNew - 3, yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				// this.mouth = this.mouthArr[mouthNew]
				// this.year = yearNew
			},
			handlechanginfo() {
				this.getuserinfo()
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',val)
				uni.setStorageSync('pageSize',val)
				this.pageSize = val;
				this.getuserinfo();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getuserinfo();
			},
			getuserinfo() {
				let _this = this
				let query = '&type=' + _this.select + '&page=' + _this.currentPage + '&pagesize=' + _this.pageSize +
					'&month=' + _this.mouth + '&year=' + _this.year
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.creditdetail' + query)
					.then(res => {
						console.log(res)
						const {
							result: {
								list,
								total
							}
						} = res
						list.forEach(res=>{
							res.timestr = res.timestr.substring(5,16)
							var index = res.remark.indexOf("MemberID");
							var result = res.remark.substring(0, index);
							res.remark = result
						})
						_this.tableData = list
						_this.counttotal = Number(total)
						// if(Number(total)>0){
						// 	_this.paginations = true
						// }
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	.gird-contails {
		display: grid;
		grid-template-columns: 100%;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.el-input__suffix-inner {
		display: none !important;
	}

	.mony {
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
	}

	.datamonth {
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
	}

	.sumbit {
		/* margin-left: 840rpx; */
		margin-top: 10rpx;
	}

	.el-select {
		width: 100%;
	}

	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		.el-select {
			margin-top: 20rpx;
			width: 600rpx !important;
		}

		.mony {
			display: grid;
			grid-template-columns: 1fr;
			margin-top: 10rpx;
		}

		.datamonth {
			display: grid;
			grid-template-columns: 1fr;
			margin-top: 10rpx;
		}

		.sumbit {
			margin-left: 0rpx;
			margin-top: 10rpx;
		}

		table {
			width: auto !important;
		}
	}
</style>