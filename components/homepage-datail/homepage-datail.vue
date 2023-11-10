<template>
	<div class="home">
		<div class="homep" style="width: 100%;">
			<el-container>
				<el-main>
					<el-card shadow="never">
						<div class="liji" style="display: flex;">
							<!-- <div> -->
								<el-carousel height="400px" style="width: 400px;border-radius: 20rpx;" :autoplay="false" arrow="never">
								    <el-carousel-item v-for="item in imgarr" :key="item">
										<img :src="item" alt="" class="carousel-image">
								    </el-carousel-item>
								</el-carousel>
							<!-- </div> -->
							<div  style="margin-left: 60rpx;">
								<div class="titlel" style="font-size: 50rpx;margin-top: 15rpx;"><b>{{title}}</b></div>
								<div>
									<span class="sales" style="font-size: 36rpx;margin-top: 15rpx;color: #777070;">{{subtitle}}</span>
								</div>
								<div class="contnents" style="margin-top: 40rpx;">
									<div>
										<span class="sales" style="font-size: 36rpx;margin-top: 15rpx;color: #777070;">{{$t('shopping.Sales')}}：{{sales}}</span>
									</div>
									<div class="prices" style="color: red;margin-top: 40rpx;">
										<span style="font-size: 28rpx;">MYR</span><b class="pricess" style="font-size: 45rpx;">{{price}}</b>
									</div>
								</div>
								<el-button type="danger" size="mini" @tap="buyNow"><b>{{$t('shopping.Buynow')}}</b></el-button>
							</div>
						</div>
						<el-divider ></el-divider>
						<div class="Productdetails" style="font-size: 40rpx;margin: 30rpx;"><b>{{$t('shopping.Productdetails')}}</b></div>
						<div  v-html="content" style="margin-top: 15rpx;width: 2400rpx;margin: 0 auto;" v-show="deatilStatus"></div>
						<el-empty :description="$t('shopping.emptydata')"  v-show="!deatilStatus"></el-empty>
						
					</el-card>
				</el-main>
			</el-container>

		</div>
	</div>
</template>

<script>
	export default {
		name: "website-homepage",
		props:{
			ids:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				subtitle:'',
				sales:0,
				prounddatastatus: false,
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
				imgt: '',
				title: '',
				total: '',
				price: '',
				imgarr: [],
				content:'',
				deatilStatus:true,
				id:1
			};
		},
		mounted() {
			this.login()
			this.getcateList()
			this.handelDetail()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			// this.getproundlist()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			buyNow(){
				uni.navigateTo({
					url:'/pages/product-purchase/product-detail?ids='+this.id
				})
			},
			login() {
				this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status,
						} = res
						if (status == 100) {
							self.$message({
								message: this.$t('home.loginstatus'),
								center: true
							});
							uni.navigateTo({
								url: '/pages/userLogin/userLogin'
							})
						} else {
							// self.maindisable = true
						}
						
					})
					.catch(err => {
						console.log(err)
					})
			
			},
			handleSure() {
				this.dialogTableVisible = false
			},
			// handlelogo() {
			// 	uni.navigateTo({
			// 		url: '/pages/userLogin/userLogin'
			// 	})
			// },
			changePhoto(i) {
				// console.log(i)
				let _this = this
				_this.imgt = _this.imgarr[i]
			},
			resert() {
				uni.navigateBack()
			},
			handelDetail(id) {
				// console.log(id)
				let _this = this
				_this.homediable = false
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.detail&id=' + this.ids)
					.then(res => {
						console.log(res)
						const {
							result: {
								id,
								title,
								productprice,
								total,
								thumb_url,
								content,
								sales,
								subtitle
							}
						} = res
						if(content==''){
							_this.deatilStatus = false
						}
						_this.subtitle = subtitle
						_this.id = id
						_this.sales = sales
						_this.title = title
						_this.price = productprice
						_this.total = Number(total)
						_this.imgarr = thumb_url
						_this.content = content
						_this.imgt = thumb_url[0]
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
			getcateList() {
				let _this = this
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
	/deep/ .el-carousel__indicator--horizontal .el-carousel__button {
	  width: 25rpx;
	  height: 25rpx;
	  background: transparent;
	  border: 1px solid #ffffff;
	  border-radius: 50%;
	  opacity: 0.5;
	}  
	/deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button{
	  width: 25rpx;
	  height: 25rpx;
	  background: #ffffff;
	  border-radius: 50%;
	  opacity: 1;
	}
	/* .el-card{
		position: relative;
	} */
	.el-footer{
		position: relative;
	}
	.liji{
		position: relative;
	}
	.el-button--danger{
		position: absolute;
		bottom: 0;
		right: 13%;
		/* bottom: 100px; */
		width: 10%;
		/* margin-top: 10rpx; */
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
		width: 100%;
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

	.el-footer {
		height: 120rpx;
		line-height: 120rpx;
		width: 80%;
		font-size: 26rpx;
		position: fixed;
		bottom: 0;
		background-color: #fff !important;
		color: rgb(91, 98, 107);
		text-align: center;
	}

	@media screen and (max-width: 990px) {
		.el-button--danger{
			width: 30% !important;
			right: 0;
		}
		.homep ,.el-footer{
			width: 100% !important;
		}
		
	}

	.home {
		/* position: relative; */
		width: 100%;
		display: flex;
		justify-content: center;
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
			height: 300rpx !important;
			width: 300rpx !important; 
		}
		/deep/.el-carousel__item{
			width: 300rpx !important;
			 height: 300rpx !important;
		}
		.carousel-image {
			width: 300rpx !important;
			height: 300rpx !important;
			object-fit: fill;
			/* 适应方式，可根据需求选择合适的值，如：contain、cover、fill 等 */
		}
		.titlel{
			font-size: 30rpx !important;
		}
		.sales{
			font-size: 26rpx !important;
		}
		.pricess{
			font-size: 35rpx !important;
		}
		.prices{
			margin-top: 20rpx !important;
		}
		.contnents{
			margin-top: 20rpx !important;
		}

		.el-carousel {
			width: 300rpx !important;
		}
		
		.Productdetails{
			font-size: 34rpx !important;
		}


		.logo img {
			width: 50rpx;
		}

		.sreach {
			width: 100% !important;
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
	}
</style>