<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>{{$t('menu.bonuseshelp')}}</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div style="margin-top: 20rpx;">
					<!-- <div style="font-size: 26rpx;margin-top: 20rpx;display: flex;justify-content: start;width: 260rpx;">{{$t('home.yearmonth')}}：</div> -->
					<div class="searchs">
						<div class="year">
							<el-select v-model="fyear" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium">
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="month">
							<el-select v-model="fmouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium">
								<div v-for="o in 12" :key="o" class="text item">
									<el-option :label="o" :value="o"></el-option>
								</div>
							</el-select>
						</div>
						<!-- <div class="year">
							<el-select v-model="lyear" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium">
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="month">
							<el-select v-model="lmouth" slot="prepend" :placeholder="$t('purse.Pleaseselect')" size="medium">
								<div v-for="o in 12" :key="o" class="text item">
									<el-option :label="o" :value="o"></el-option>
								</div>
							</el-select>
						</div> -->
						<div class="sumbit">
							<el-button type="primary" size="medium" @tap="handleSelect">{{$t('purse.WithdrawalStatus')}}</el-button>
						</div>
					</div>
					
				</div>
				<div v-show="bonusStatus">
				<div ref="print">
				<div class="bonuscontent">
					<div class="text item bonusleft" >
						<div>{{$t('purse.Dealernumber')}} : <span style="margin-left: 10rpx; display: inline-block;"> {{account}}</span>
						</div>
						<div>{{$t('purse.Dealername')}} : <span style="margin-left: 10rpx; display: inline-block;"> {{nickname}}</span></div>
						<div><span style="margin-left: 24rpx; display: inline-block;">{{$t('home.joiningDate')}} : </span><span
								style="margin-left: 10rpx; display: inline-block;"> {{datatime}}</span></div>
						<div>{{$t('purse.DealerPackage')}} : <span style="margin-left: 10rpx; display: inline-block;"> {{level}}</span></div>
						<div><span style="margin-left: 78rpx; display: inline-block;">{{$t('purse.level')}} : </span><span
								style="margin-left: 10rpx; display: inline-block;"> {{levelname}}</span></div>
					</div>
				</div>
				<el-table :data="tableData"  v-if="idStatus" border>
					<!-- <el-table-column label="ID" width="50">
						<template slot-scope="scope">
							{{ (scope.$index+1)+(currentPage-1)*pageSize }}
						</template>
					</el-table-column> -->
					
					<el-table-column prop="remark" :label="$t('purse.remark')" align="center">
					</el-table-column>
					<!-- <el-table-column prop="paystatusstr" :label="$t('purse.Paymentstatus')" align="center">
					</el-table-column> -->
					<el-table-column prop="btypestr" :label="$t('purse.Rewardtype')" align="center"width="200px">
					</el-table-column>
					<el-table-column prop="price" :label="$t('purse.bonus')" align="center"width="200px">
					</el-table-column>
					<el-table-column prop="createtimestr" :label="$t('purse.date')" align="center"width="200px">
					</el-table-column>
					<el-table-column prop="paytime" :label="$t('purse.paytime')" align="center" width="200px">
					</el-table-column>
				</el-table>
				<div  v-else>
					<!-- <el-card shadow="never" class="text item"> -->
					<div style="font-size: 28rpx;margin-bottom: 30rpx;;border-top: 1rpx solid #d1d1d1;border-bottom: 1rpx solid #d1d1d1;padding: 20rpx 0rpx;">{{$t('Record.information')}}</div>
						<!-- <div><b>{{$t('purse.date')}}</b></div>
						<div><b>{{$t('purse.remark')}}</b></div>
						<div><b>{{$t('purse.Paymentstatus')}}</b></div>
						<div><b>{{$t('purse.Rewardtype')}}</b></div>
						<div><b>{{$t('purse.bonus')}}</b></div> -->
					<!-- </el-card> -->
					<block v-for="data in tableData">
						<el-card shadow="never" class="text item" style="margin-top: 20rpx;">
							<div style="margin-top: 20rpx;">{{$t('purse.date')}}:{{data.createtimestr}}</div>
							<div style="margin-top: 10rpx;">{{$t('purse.paytime')}}:{{data.paytime}}</div>
							<div style="margin-top: 10rpx;">{{$t('purse.remark')}}:{{data.remark}}</div>
							<!-- <div>{{data.paystatusstr}}</div> -->
							<!-- <div>{{data.btypestr}}</div> -->
							<div style="display: flex;justify-content: space-between;margin-top: 10rpx;">
								<div style="color: red;">{{$t('purse.bonus')}}:<span style="font-size: 23rpx;">MYR</span> {{data.price}}</div>
								<div>
									<div v-if="data.btype==0"><el-link type="danger">{{data.btypestr}}</el-link></div>
									<div v-else-if="data.btype==1"><el-link type="success">{{data.btypestr}}</el-link></div>
									<div v-else-if="data.btype==2"><el-link type="warning">{{data.btypestr}}</el-link></div>
									<div v-else style="color: blueviolet;"><el-link>{{data.btypestr}}</el-link></div>
								</div>
							</div>
						</el-card>
					</block>
				</div>
				</div>
				<div class="pagination" style="display: flex;justify-content: center;margin-top: 20rpx;" >
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" :hide-on-single-page="paginations"
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>
				</div>
				<div v-show="!bonusStatus">
					<el-skeleton :rows="15" animated />
				</div>
				<div class="prints" style="display: flex;justify-content: center;">
					<i class="el-icon-printer" @click="handleCustom"
						style="margin-top: 30rpx;font-size: 50rpx;"></i>
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
				idStatus:true,
				fmouth: '',
				fyear: '',
				// lmouth: '',
				// lyear: '',
				yearArr: [],
				tableData:[],
				account:'',
				nickname:'',
				datatime:'',
				levelname:'',
				level:'',
				counttotal: 0,
				tableData: [], // 表格数据源
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				bonusStatus:false,
				paginations:true
			};
		},
		mounted() {
			this.getMounth()
			this.getbonusInfo()
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
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				// this.fmouth = mouthNew + 1
				// this.fyear = yearNew
				// this.lmouth = mouthNew + 1
				// this.lyear = yearNew
			},
			handleCustom(){
				this.$print(this.$refs.print)
			},
			getbonusInfo(){
				let query = '&syear='+this.fyear+'&smonth='+this.fmouth+'&page='+this.currentPage+'&pagesize='+this.pageSize
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.kyc.bonusdesc'+query)
					.then(res=>{
						console.log(res)
						const {status} = res
						if(status==1){
							const {result:{list,total,membermes:{email,nickname,jointime,bonuslevelmes:{levelname,level}}}} = res
							_this.datatime = jointime
							_this.nickname = nickname
							_this.account = email
							_this.levelname = levelname
							_this.level = level
							_this.tableData = list
							_this.counttotal = Number(total)
							// if(Number(total)>0){
							// 	_this.paginations = true
							// }
							_this.bonusStatus = true
						}else{
							const {result:{message}} = res
							_this.$message.error(message)
						}
						
					})
					.catch(err=>{
						console.log(err)
					})
			},
			handleSelect(){
				this.getbonusInfo()
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				uni.setStorageSync('pageSize',val)
				this.pageSize = val;
				this.getbonusInfo();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getbonusInfo();
			},
		}
	}
</script>

<style>
	/* .el-card div{
		margin-top: 10rpx;
	} */
	/deep/.el-card__body{
		padding-top: 0 !important;
	}
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	/deep/table{
		width: auto !important;
	}
	/deep/.el-table__empty-block{
		width: auto !important;
	}
	.bonusleft div{
		margin-top: 18rpx;
	}
	
	.tabletitle{
		font-size: 26rpx;
		border-bottom: 1rpx solid #E9ECEF;
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	
	.bonustitle {
		display: flex;
		justify-content: center;
	}

	.bonuscontent {
		display: flex;
		justify-content: center;
		font-size: 26rpx;
		margin: 40rpx 0rpx;
	}

	.bonusright span {
		display: inline-block;
	}

	.bonusright {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #E9ECEF;
		padding: 20rpx;
	}

	.month,
	.year {
		margin-right: 20rpx;
	}

	.yearmonth {
		display: grid;
		grid-template-columns: 3% 40% 10% ;
	}
	
	.searchs{
		display: flex;
	}

	@media screen and (max-width: 990px) {
		.searchs{
			display: grid;
		}
		.searchs div{
			margin-top: 15rpx;
		}
		.prints{
			display: none !important;
		}
		.yearmonth {
			grid-template-columns: 1fr;
		}
		.yearmonth div{
			margin-top: 10rpx;
		}
		.bonuscontent{
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
		}
		.bonusleft{
			margin-left: 20rpx;
		}
	}
	
</style>