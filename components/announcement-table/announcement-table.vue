<template>
	<el-card>
		<div v-if="andiable">
			<div v-show="adstatusa">
				<el-table :data="tableData" border style="width: 100%" @row-click="gotodetail">
					<el-table-column label="ID" width="40">
						<template slot-scope="scope">
							{{ (scope.$index+1)+(currentPage-1)*pageSize }}
						</template>
					</el-table-column>
					<el-table-column prop="title" label="标题" align="center">
					</el-table-column>
					<!-- <el-table-column prop="detail" label="内容" align="center">
					</el-table-column> -->
					<el-table-column prop="createtime" label="更新时间" align="center">
					</el-table-column>
					<el-table-column label="操作" align="center" width="80">
						<template slot-scope="scope">
							<el-button size="mini" type="primary">详情</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div v-show="paginations" class="pagination sumbit">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>
			</div>
			<div v-show="!adstatusa">
				<el-skeleton :rows="20" animated  />
			</div>
		</div>
		<div v-else>
			<el-main>
			<!-- <el-card> -->
				<el-descriptions title="公告"  :size="size" border>
					<el-descriptions-item label="公告ID"><el-tag size="small">{{id}}</el-tag></el-descriptions-item>
					<el-descriptions-item label="公告标题">{{title}}</el-descriptions-item>
					<el-descriptions-item label="公告时间">{{time}}</el-descriptions-item>
					<el-descriptions-item label="公告内容">
						<div v-html="detail"></div>
					</el-descriptions-item>
					<el-descriptions-item label="商品图片">
						<img :src="img" style="width: 100rpx;">
					</el-descriptions-item>
				</el-descriptions>
				<el-button @tap="resert" size="mini" style="margin-top: 20rpx;">返回主页</el-button>
			<!-- </el-card> -->
			</el-main>
		</div>
	</el-card>
</template>

<script>
	export default {
		props: {
			year: {
				type: Number,
				default: 0
			},
			mouth: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				tableData: [],
				andiable: true,
				id: 0,
				title: '',
				time: '',
				detail: '',
				img: '',
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: uni.getStorageSync('pageSize'), // 每页显示的条数
				size:'',
				adstatusa:false,
				paginations:false
			}
		},
		mounted() {
			this.getannoumn()
		},
		watch: {
			year(n, o) {
				// console.log(n,o)
				this.year = n
				this.getannoumn()
			},
			mouth(n, o) {
				// console.log(n,o)
				this.mouth = n
				this.getannoumn()
			}
		},
		methods: {
			resert() {
				this.andiable = true
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',val)
				uni.setStorageSync('pageSize',val)
				// console.log(uni.getStorageSync('pageSize'))
				this.pageSize = val;
				this.getannoumn();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getannoumn();
			},
			getannoumn() {
				let _this = this
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page=' + _this
						.currentPage + '&pagesize=' + _this.pageSize + '&year=' + _this.year + '&month=' + _this.mouth)
					.then(res => {
						const {
							result: {
								list,
								total
							}
						} = res
						// console.log(res)
						_this.tableData = list
						_this.counttotal = Number(total)
						if(Number(total)>0){
							_this.paginations = true
						}
						_this.adstatusa = true
						// console.log(total)
					})
					.catch(err => {
						console.log(err)
					})
			},
			async gotodetail(param) {
				// console.log(param.id)
				let _this = this
				await _this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticedetail&id=' + param.id)
					.then(res => {
						console.log(res)
						const {
							result: {
								id,
								title,
								detail,
								thumb,
								createtime
							}
						} = res
						_this.id = id
						_this.title = title
						_this.detail = detail
						_this.img = thumb
						// console.log(result)
						_this.time = createtime
					})
					.catch(err => {
						console.log(err)
					})
				_this.andiable = false
			},
			// timp(ti) {
			// 	var temp = parseInt(ti)
			// 	var date = new Date(temp);
			// 	var Y = date.getFullYear() + '-';
			// 	// console.log(Y)
			// 	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			// 	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';

			// 	var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
			// 	var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
			// 	var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
			// 	var strDate = Y + M + D + h + m + s;
			// 	return strDate
			// }
		}
	}
</script>

<style scoped>
	/deep/.el-descriptions__table{
		width: 100% !important;
	}
	.text {
		font-size: 28rpx;
	}

	.item {
		margin-bottom: 36rpx;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
	}
</style>