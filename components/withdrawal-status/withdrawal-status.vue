<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>{{$t('menu.ewalletwithdrawalstatus')}}</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="display: flex;">
						<div class="month">
							<el-select v-model="mouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium" >
								<div v-for="(item,index) in mouthArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="year" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium" >
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium" @tap="handlechanginfo">{{$t('purse.WithdrawalStatus')}}</el-button>
					</div>
				</div>
				 <el-table
				    :data="tableData"
					class="custom-table"
					border
					v-if="idStatus"
					style="margin-top: 20rpx;"
				   >
				   <block v-if="idStatus">
					   <el-table-column label="ID" width="40">
					   	<template slot-scope="scope">
					   		{{ (scope.$index+1)+(currentPage-1)*pageSize }}
					   	</template>
					   </el-table-column>
				   </block>
				   
				   <el-table-column
				     prop="title"
				     :label="$t('home.title')"
					 align="center" 
				     >
				   </el-table-column>
				    <el-table-column
				      prop="timestr"
				      :label="$t('purse.Dateapplication')"
					  align="center" 
				      s>
				    </el-table-column>
				    <el-table-column
				      prop="logmes.bank_name"
					  align="center" 
				      :label="$t('withdrawal.bankName')">
				    </el-table-column>
					<el-table-column
					  prop="realname"
					  :label="$t('withdrawal.accountHolder')"
					  align="center" 
					  >
					</el-table-column>
					<el-table-column
					  prop="logmes.bank_account_number"
					  v-if="idStatus"
					  align="center" 
					  :label="$t('withdrawal.bankAccountNumber')">
					</el-table-column>
					<el-table-column
					  prop="money"
					  align="center" 
					  :label="$t('withdrawal.transferAmount')">
					</el-table-column>
					<el-table-column
					  prop="statusstr"
					  align="center" 
					  :label="$t('purse.state')">
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
					<div style="margin-top: 20rpx;font-size: 28rpx;border-top: 1rpx solid #d1d1d1;border-bottom: 1rpx solid #d1d1d1;padding: 20rpx 0rpx;">{{$t('Record.information')}}</div>
				  	<!-- <el-card shadow="never" class="text item">
				  		<div><b>{{$t('home.title')}}</b></div>
				  		<div><b>{{$t('purse.Dateapplication')}}</b></div>
				  		<div><b>{{$t('withdrawal.bankName')}}</b></div>
				  		<div><b>{{$t('withdrawal.accountHolder')}}</b></div>
						<div><b>{{$t('withdrawal.bankAccountNumber')}}</b></div>
						<div><b>{{$t('withdrawal.transferAmount')}}</b></div>
						<div><b>{{$t('purse.state')}}</b></div>
				  	</el-card> -->
				  	<block v-for="data in tableData">
				  		<el-card shadow="never" class="text item">
				  			<div>{{data.title}}</div>
				  			<div>{{data.timestr}}</div>
				  			<div>{{data.logmes.bank_name}}</div>
				  			<div>{{data.realname}}</div>
				  			<div>{{data.logmes.bank_account_number}}</div>
				  			<!-- <div>{{data.money}}</div> -->
							<!-- <div>{{data.statusstr}}</div> -->
							<div style="display: flex;justify-content: space-between;">
								<div style="color: red;"><span style="font-size: 23rpx;">MYR</span> {{data.money}}</div>
								<div>
									<div v-if="data.status==0"><el-link type="danger">{{data.statusstr}}</el-link></div>
									<div v-else-if="data.status==1"><el-link type="success">{{data.statusstr}}</el-link></div> 
									<div v-else-if="data.status==2"><el-link type="warning">{{data.statusstr}}</el-link></div>
									<div v-else-if="data.status==3"><el-link type="info">{{data.statusstr}}</el-link></div>
									<div v-else style="color: blueviolet;"><el-link>{{data.statusstr}}</el-link></div>
								</div>
							</div>
				  		</el-card>
				  	</block>
				  </div>
				  
				  <div   class="pagination" style="display: flex;justify-content: center;margin-top: 20rpx;">
				  	<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
				  		:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"  :hide-on-single-page="paginations"
				  		layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				  </div>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "withdrawal-status",
		data() {
			return {
				mouth:'',
				year:'',
				mouthArr: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
				yearArr:[],
				counttotal: 0,
				tableData: [], // 表格数据源
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				paginations:true,
				idStatus:true
			};
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); 
		},
		mounted() {
			this.getMounth()			
			this.getuserinfo()
			this.getScreenWidth();
			window.addEventListener('resize', this.handleResize); 
		},
		methods:{
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
			getMounth(){
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew-5,yearNew-4,yearNew-3,yearNew-2,yearNew-1,yearNew]
				const mouthNew = current.getMonth()
				// this.mouth = this.mouthArr[mouthNew]
				// this.year = yearNew
			},
			handlechanginfo(){
				this.getuserinfo()
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
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
			getuserinfo(){
				let _this = this
				let query = '&type='+_this.select+'&page='+_this.currentPage+'&pagesize='+_this.pageSize+'&month='+_this.mouth+'&year='+_this.year
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.memberlog'+query)
					.then(res=>{
						console.log(res)
						const { result:{list,total} } = res
						_this.tableData = list
						_this.counttotal = Number(total)
					})
					.catch(err=>{
						console.log(err)
					})
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
	.month,.year{
		margin-right: 20rpx;
	}
	.yearmonth {
		display: flex;
	}
	
	@media screen and (max-width: 990px) {
		.yearmonth {
			display: block !important;
		}
		.sumbit{
			margin-top: 20rpx;
		}
	}
</style>

