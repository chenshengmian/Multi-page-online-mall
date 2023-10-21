<template>
	<view class="home" v-loading="loading">

		<el-container>
			<el-header>
				<div class="header">
					<div class="logo">
						<img :src="logo" alt="" style="width: 30%;height: 60%;">
					</div>
					<div class="sreach">
						<el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
							<!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
								<el-option label="一球" value="1"></el-option>
								<el-option label="三球" value="2"></el-option>
								<el-option label="七球" value="3"></el-option>
							</el-select> -->
							<el-button class="imgsreach" slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</div>
					<div>
						<el-button type="primary" @tap="handlelogo">登陆</el-button>
					</div>
				</div>

			</el-header>
			<div  style="margin-bottom: 120rpx;">
				<el-main>
					<el-card>
						<el-tabs @tab-click="handleSelect" v-model="activeIndex" :stretch='true'>
							<block v-for="item in tabbleTap">
								<el-tab-pane :label="item.name" :name="item.id"></el-tab-pane>
							</block>
						</el-tabs>
						<div class="carousel-container">
							<el-carousel :interval="3000" arrow="always">
								<el-carousel-item v-for="item in carouselmap" style="width: 100%;height: 100%;">
									<!-- <h3>{{ item }}</h3> -->
									<img :src="item.thumb" alt="" class="carousel-image">
								</el-carousel-item>
							</el-carousel>
						</div>

						<!-- 公告详情 -->
						<el-dialog :title="adtitle" :visible.sync="dialogTableVisible" :modal='false' :width="diawidth">
							<!-- <el-card > -->
								<img :src="adimage" class="images" v-show="have">
								<div style="padding: 14px;">
									<span v-html="adcontont"></span>
									<div class="bottom clearfix">
										<time class="time">{{ currentDate }}</time>
										<el-button type="text" class="button" @tap="handleSure">确定</el-button>
									</div>
								</div>
							<!-- </el-card> -->
						</el-dialog>

						<div class="scrolling-container"
							style="background-color: #E8F3FE;margin:20rpx 0rpx;height: 80rpx;">
							<vue-seamless-scroll :data="subtitles" class="scroll" :class-option="defaultOption">
								<div v-for="item in subtitles" class="item" style="cursor:pointer;line-height: 80rpx;">
									<div @tap="handeladDetail(item.id)">{{ item.title }}</div>
								</div>
							</vue-seamless-scroll>
						</div>

						<!-- <div style="margin: 20rpx 0rpx;"> -->
						<!-- <span style="font-size: 40rpx;">猜你喜欢</span> -->
						<!-- <el-tag type="danger">个性推荐</el-tag> -->
						<!-- </div> -->
						<el-empty :image-size="200"  v-show="prounddatastatus"></el-empty>
						<el-row  v-show="!prounddatastatus">
							<el-col :span="span" v-for="item in prounddata">
								<el-card :body-style="{ padding: '20px' }" @click.native="handelDetail(item.id)">
									<img :src="item.thumb" class="image">
									<div style="padding: 14px;">
										<!-- <h6>内容：</h6> -->
										<span>{{item.title}}</span>
										<div class="bottom clearfix">
											<time class="time">MYR {{ item.marketprice }}</time>
										</div>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<div class="pagination" v-show="!prounddatastatus">
							<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
								:current-page="currentPage" :page-sizes="[3, 6, 9, 12]" :page-size="pageSize"
								layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
						</div>
					</el-card>
				</el-main>
			</div>
		</el-container>
		<!-- <el-footer>
			<div class="footer">Copyright 2023. Felement Sdn Bhd. All Right Reserved.</div>
		</el-footer> -->

	</view>
</template>

<script>
	export default {
		name: "website-homepage",
		data() {
			return {
				prounddatastatus:false,
				dialogTableVisible: false,
				input3: '',
				// select: '',
				tabbleTap: {},
				activeIndex: 0,
				carouselmap: {},
				logo: '',
				span: 8,
				currentPage: 1, // 当前页码
				pageSize: 3, // 每页显示的条数
				cate: '',
				counttotal: 0,
				prounddata: '',
				homediable: true,
				imgt: '',
				title: '',
				total: '',
				price: '',
				imgarr: [],
				subtitles: [], // 字幕数组
				defaultOption: {
					step: 0.4, // 数值越大速度滚动越快
					limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
					hoverStop: true, // 是否开启鼠标悬停stop
					direction: 0, // 0向下 1向上 2向左 3向右
					openWatch: true, // 开启数据实时监控刷新dom
					singleHeight: 30, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
					singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
					waitTime: 1500, // 单步运动停止的时间(默认值1000ms)
				},
				adtitle: '',
				adimage: '',
				adcontont: '',
				currentDate: '',
				have: true,
				diawidth: '30%',
				loading: true,
				content:''
			};
		},
		computed: {
			defaultOption1() {
				return {
					step: 0.4, // 数值越大速度滚动越快
					limitMoveNum: this.subtitles.length, // 开始无缝滚动的数据量 this.dataList.length
					hoverStop: true, // 是否开启鼠标悬停stop
					direction: 0, // 0向下 1向上 2向左 3向右
					openWatch: true, // 开启数据实时监控刷新dom
					singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
					singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
					waitTime: 1500 // 单步运动停止的时间(默认值1000ms)
				}
			}
		},
		mounted() {
			// this.login()
			this.getcateList()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getproundlist()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handleSure() {
				this.dialogTableVisible = false
			},
			handeladDetail(i) {
				// console.log(i)
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticedetail&id=' + i)
					.then(res => {
						// console.log(res)
						const {   
							status,
							result: {
								detail,
								createtime,
								title,
								thumb
							}
						} = res
						if (status == 1) {
							_this.dialogTableVisible = true
							_this.adtitle = title
							if (thumb == '') {
								_this.have = false
							} else {
								_this.have = true
								_this.adimage = thumb
							}
							_this.adcontont = detail
							_this.currentDate = createtime
						} else {
							_this.$message.error('查看详情失败');
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			// login() {
			// 	let _this = this
			// 	_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
			// 		.then(res => {
			// 			// console.log('登录状态',res)
			// 			const {
			// 				status
			// 			} = res
			// 			_this.$emit('status', status)
			// 		})
			// 		.catch(err => {
			// 			console.log(err)
			// 		})
			// },
			handlelogo() {
				uni.navigateTo({
					url: '/pages/userLogin/userLogin'
				})
			},
			changePhoto(i) {
				console.log(i)
				let _this = this
				_this.imgt = _this.imgarr[i]
			},
			resert() {
				this.homediable = true
			},
			handelDetail(id) {
				uni.navigateTo({
					url:'/pages/homepageDatail/homepageDatail?id='+id
				})
			},
			getcateList() {
				let _this = this
				//分类表
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodscate&pagesize=100&page=1')
					.then(res => {
						// console.log(res)
						const {
							result: {
								list
							}
						} = res
						_this.tabbleTap = list
					})
					.catch(err => {
						console.log(err)
					})
				//轮播图
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner')
					.then(res => {
						// console.log(res)
						const {
							result: {
								list,
								shopmes: {
									logo
								}
							}
						} = res
						_this.carouselmap = list
						_this.logo = logo
					})
					.catch(err => {
						console.log(err)
					})
				//广告
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page=1&pagesize=10')
					.then(res => {
						// console.log(res)
						const {
							status,
							result: {
								list
							}
						} = res
						// console.log(list)
						if (list.length == 1) {
							let ad = []
							ad = [list[0], list[0]]
							_this.subtitles = ad
						} else {
							_this.subtitles = list
						}
						if (status == 1) {
							_this.loading = false
						}
					})
					.catch(err => {
						console.log(err)
					})


			},
			handleSelect(tab, event) {
				let _this = this
				// console.log(_this.activeIndex)
				_this.cate = _this.activeIndex
				_this.getproundlist()
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				this.pageSize = val;
				this.getproundlist();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getproundlist();
			},
			getproundlist() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodslist&page=' + _this
						.currentPage + '&pagesize=' + _this.pageSize + '&cate=' + _this.cate)
					.then(res => {
						console.log(res)
						const {
							status,
							result: {
								list,
								total
							}
						} = res
						// if(status==1){
						_this.prounddata = list
						_this.counttotal = Number(total)
						if(Number(total)==0){
							_this.prounddatastatus = true
						}else{
							_this.prounddatastatus = false
						}
						// }else{
						// 	_this.counttotal = 0
						// }

					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					// this.drawerSize = '60%'
					this.span = 12
					this.diawidth = '90%'
				} else {
					this.span = 8
					this.diawidth = '30%'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.span = 12
						this.diawidth = '90%'
					} else {
						this.span = 8
						this.diawidth = '30%'
					}
				}
			},
		}
	}
</script>

<style scoped>
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.images {
		width: 200rpx !important;
		height: 200rpx;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}


	/* 外层盒子 */
	.scroll {
		height: 30px;
		overflow: hidden;
		color: #409EFF;
		font-size: 30rpx;
		/* width: 300px; */
		/* background: rgb(138, 192, 186); */
	}

	/* 里面的每一条 */
	.item {
		height: 30px;
		width: 100%;
	}

	/* .el-header{
		position: fixed;
		top: 0;
		right: 20%;
		left: 10%;
		width: 100%;
		z-index: 999;
		background-color: #fff;
	} */


	.announcement-item {
		flex-shrink: 0;
		padding: 0 10px;
		height: 100%;
		line-height: 50px;
		background-color: #f5f5f5;
	}

	.announcement {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #f5f5f5;
	}

	.image-container {
		display: flex;
		flex-wrap: wrap;
	}

	.product-image {
		width: 200px;
		height: 200px;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.product-image:hover {
		transform: scale(1.2);
		/* 鼠标悬停时放大图片 */
	}

	

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 40%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.el-select {
		width: 180rpx;
	}

	.sreach {
		width: 50%;
	}

	.el-menu-demo {
		width: 100% !important;
	}

	/* 设置滚动条的轨道样式 */
	::-webkit-scrollbar {
		width: 8px;
		/* 滚动条宽度 */
	}

	/* 设置滚动条的滑块样式 */
	::-webkit-scrollbar-thumb {
		background-color: #409EFF;
		/* 滑块背景颜色 */
		border-radius: 4px;
		/* 滑块圆角 */
	}

	/* 设置滚动条的滑道样式 */
	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
		/* 滑道背景颜色 */
		border-radius: 4px;
		/* 滑道圆角 */
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}

	.footer {
		height: 120rpx;
		background-color: #F5F5F5;
		line-height: 120rpx;
		text-align: center;
		font-size: 26rpx;
		width: 100%;
		color: rgb(91, 98, 107);
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 140rpx;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: fill;
		/* 适应方式，可根据需求选择合适的值，如：contain、cover、fill 等 */
	}


	.el-menu {
		display: flex;
		justify-content: space-between;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin: 35rpx 0rpx;
	}

	@media screen and (max-width: 990px) {
		/deep/.el-carousel__container {
			height: 300rpx;
		}

		.el-carousel {
			height: 300rpx;
		}


		.logo img {
			width: 45% !important;
			height: 43% !important;
		}

		.sreach {
			width: 86% !important;
		}


		.logo {
			width: 25% !important;
		}

		.el-select {
			width: 170rpx;
		}

		.el-input-group__append {
			width: 50% !important;
		}

		/* .home {
			height: 100vh;
		} */

		/* .carousel-container,.el-carousel,.el-carousel .el-carousel__container{
			height: 300rpx !important;
			overflow: hidden;
		} */
	}
</style>