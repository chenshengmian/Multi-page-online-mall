<template>
	<view class="content">
		<el-container>

			<el-menu default-active="1-5-1" class="el-menu-vertical-demo asos" :collapse="isCollapse"
				@select="handleSelect" style="">
				<image src="../../static/img/logo.png" alt="" v-if="disable" class="userLo"></image>
				<image src="../../static/img/favicon.png" v-else class="userLogo"></image>
				<el-menu-item index="1" @tap="handleperson">
					<i class="el-icon-menu"></i>
					<span slot="title">主页</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">电子钱包</span>
					</template>
					<el-menu-item-group>
						<!-- <span slot="title">电子钱包</span> -->
						<el-menu-item index="2-1" @tap="handlepurchasehistory">电子钱包历史记录</el-menu-item>
						<el-menu-item index="2-2" @tap="handlewithdraw">电子钱包取款</el-menu-item>
						<el-menu-item index="2-3" @tap="handlewithdrawStatus">电子钱包取款状况</el-menu-item>
						<el-menu-item index="2-4" @tap="handlebonus">奖金说明</el-menu-item>
						<el-menu-item index="2-5" @tap="handlekycgo">KYC</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-menu-item index="3">
					<i class="el-icon-menu"></i>
					<span slot="title">经销商注册</span>
				</el-menu-item> -->
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">购物</span>
					</template>
					<el-menu-item-group>
						<!-- <span slot="title">购物</span> -->
						<el-menu-item index="4-1" @tap="handleProduct">产品购买</el-menu-item>
						<el-menu-item index="4-2" @tap="handlepurchase">购买历史记录</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-submenu index="5">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">报告</span>
					</template>
					<el-menu-item-group>
						<span slot="title">报告</span>
						<el-menu-item index="5-1">小组销售报告</el-menu-item>
						<el-menu-item index="5-2">Member Tree</el-menu-item>
					</el-menu-item-group>
				</el-submenu> -->
				<el-menu-item index="6" @tap="handlebinarytree">
					<i class="el-icon-menu"></i>
					<span slot="title">架构图</span>
				</el-menu-item>
				<el-menu-item index="10" @tap="handleannucement">
					<i class="el-icon-menu"></i>
					<span slot="title">公告表</span>
				</el-menu-item>
			</el-menu>
			<!-- <div :class="classp?'placeholder':'newplaceholder'"></div> -->
			<el-container class="conent">
				<el-header :style="{backgroundColor:hColr}">
					<div class="headerTop" :style="{backgroundColor:topColor}">
						<div style="display: flex;" :class="{'colorb':isblock}">
							<i class="el-icon-s-grid changeStatu" @tap="changeStatus"></i>
							<image src="../../static/img/favicon.png" class="changeStatus1 smalllogo"></image>
							<i class="el-icon-s-grid changeStatus1" @tap="showDrawer" style="margin-left: 36rpx;"></i>
						</div>
						<div style="display: flex;margin-top: 10rpx;">
							<i class="el-icon-full-screen fullsc" @tap="toggleFullscreen"></i>
							<el-dropdown trigger="click">
								<span class="el-dropdown-link">
									<el-avatar :src="circleUrl" class=" el-icon--right"
										style="margin-top: 5rpx;"></el-avatar>
								</span>
								<el-dropdown-menu slot="dropdown" class="atvatr">
									<el-dropdown-item style="border-bottom: 2rpx solid #DCDFE6;">
										{{username}}
									</el-dropdown-item>
									<div @tap="hanldeChangepass">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>更改登录密码
											</el-dropdown-item>
										</el-row>
									</div>
									<div @tap="hanldeChangeEwalletspass">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>修改电子钱包密码
											</el-dropdown-item>
										</el-row>
									</div>
									<!-- <div @tap="hanldeKYC">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>KYC
											</el-dropdown-item>
										</el-row>
									</div> -->
									<el-row>
										<el-dropdown-item style="border-top: 2rpx solid #DCDFE6;">
											<div @tap="logOff"><i class="el-icon-switch-button"></i><el-link href="#"
													type="danger">登出</el-link></div>
										</el-dropdown-item>
									</el-row>
								</el-dropdown-menu>
							</el-dropdown>
							<el-row>
								<i class="el-icon-setting setting" style="margin-right: 20rpx;"
									@tap="showDrawerleft"></i>
							</el-row>
						</div>
					</div>
				</el-header>
				<el-drawer class="drawerright" :visible.sync="drawerVisibletwo" @close="handleDrawerClose"
					title="Settings" :size="drawerSize">
					<!-- 在这里放置抽屉中的内容 -->
					<p style="text-align: center;"><b>Choose Layouts</b></p>
					<el-row><el-switch v-model="option1" @change="handleOptionChange('option1')"></el-switch><span>Light
							Mode</span><br /></el-row>
					<el-row><el-switch v-model="option2" @change="handleOptionChange('option2')"></el-switch><span>Dark
							Mode</span></el-row>
				</el-drawer>
				<div class="ableta">
					<my-drawer @viewIndex="handleSelect" v-show="drawerVisible" @close="closeDrawer"></my-drawer>
				</div>
				<el-main :style="{backgroundColor:baColr}">
					<!-- <div v-if="index=='1'" style="width: 100%;"> -->
					<withdrawal-status />
					<!-- </div> -->
					<!-- <div v-else-if="index=='2-1'">
						<wallet-records />
					</div> -->
					<!-- <div v-else-if="index=='2-2'">
						<withdraw-money @changekyc="changekyc" @wmindex="wmindex" />
					</div>
					<div v-else-if="index=='2-3'">
						<withdrawal-status />
					</div>
					<div v-else-if="index=='2-4'">
						<bonus-description />
					</div>
					<div v-else-if="index=='3'">
						<reseller-registration :nodeid='nodeid' @handlereg="handlereg" />
					</div>
					<div v-else-if="index=='4-1'">
						<product-purchase @godatail="getdatail" />
					</div>
					<div v-else-if="index=='4-2'">
						<purchase-history />
					</div>
					<div v-else-if="index=='4-3'">
						<product-detail :todatail='todatail' @getresrt="newindex" />
					</div>
					<div v-else-if="index=='5-1'">
						<performance-reports />
					</div>
					<div v-else-if="index=='5-2'">
						<member-tree />
					</div>
					<div v-else-if="index=='6'">
						<binary-tree @indexChange="getIndex" />
					</div>
					<div v-else-if="index=='7'">
						<login-password />
					</div>
					<div v-else-if="index=='8'">
						<wallet-password />
					</div>
					<div v-else-if="index=='2-5'">
						<know-yourCustomer @kycindex="kycindex" />
					</div>
					<div v-else-if="index=='10'">
						<announcement-table />
					</div> -->
				</el-main>
				<el-footer :style="{backgroundColor:footbg}">
					<div class="footer">Copyright 2023. Felement Sdn Bhd. All Right Reserved.</div>
				</el-footer>
			</el-container>
		</el-container>
	</view>
</template>

<script>
	import WithdrawalStatus from '@/components/withdrawal-status/withdrawal-status.vue';
	export default {
		components: {
			WithdrawalStatus
		},
		data() {
			return {
				isCollapse: false,
				disable: true,
				drawerVisible: false,
				drawerVisibletwo: false,
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				drawerSize: '60%',
				screenWidth: 0,
				index: '1',
				classp: true,
				isblock: false,
				baColr: '#F2F2F2',
				hColr: '#FFFFFF',
				footbg: '#FAFAFA',
				topColor: '#FFFFFF',
				drawbg: '#FFFFFF',
				nodeid: '',
				todatail: {},
				username: '',
				option1: true,
				option2: false,
				width: '30%',
			}
		},
		mounted(param) {
			// console.log(1111)
			this.login()
			// console.log(uni.getStorageSync('tokenArray'))
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		onShow() {
			this.login()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			hanldeChangepass(){
				uni.navigateTo({
					url:'/pages/login-password/login-password'
				})
			},
			hanldeChangeEwalletspass(){
				uni.navigateTo({
					url:'/pages/wallet-password/wallet-password'
				})
			},
			handlepurchasehistory(){
				// console.log(111)
				uni.navigateTo({
					url:'/pages/wallet-records/wallet-records'
				})
			},
			handleperson(){
				uni.navigateTo({
					url:'/pages/personalPage/personalPage'
				})
			},
			handlewithdraw(){
				uni.navigateTo({
					url:'/pages/withdraw-money/withdraw-money'
				})
			},
			handlewithdrawStatus(){
				uni.navigateTo({
					url:'/pages/withdrawal-status/withdrawal-status'
				})
			},
			handlebonus(){
				uni.navigateTo({
					url:'/pages/bonus-description/bonus-description'
				})
			},
			handlekycgo(){
				uni.navigateTo({
					url:'/pages/know-yourCustomer/know-yourCustomer'
				})
			},
			handlebinarytree(){
				uni.navigateTo({
					url:'/pages/binary-tree/binary-tree'
				})
			},
			handleannucement(){
				uni.navigateTo({
					url:'/pages/announcement-table/announcement-table'
				})
			},
			handleCustomButton() {
				this.$print(this.$refs.print)
			
			},
			handleProduct(){
				uni.navigateTo({
					url:'/pages/product-purchase/product-purchase'
				})
			},
			handlepurchase(){
				uni.navigateTo({
					url:'/pages/purchase-history/purchase-history'
				})
			},
			async login() {
				let self = this
				await this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status,
							result: {
								avatar,
								nickname,
								adstatus
							}
						} = res
						self.username = nickname
						if (status == 100) {
							self.$message({
								message: '登录状态已过期！',
								center: true
							});
							uni.navigateTo({
								url: '/pages/index/index'
							})
						} else {
							// self.maindisable = true
						}
						self.circleUrl = avatar
					})
					.catch(err => {
						console.log(err)
					})

				const {
					userinfo
				} = uni.getStorageSync('tokenArray')
				let array = {
					'userid': userinfo
				}
			},
			getdatail(res) {
				// const lastarr = res[res.length -1]
				// // console.log(lastarr)
				const {
					id,
					index
				} = res
				this.todatail = res
				this.index = index
			},
			logOff() {
				let self = this
				const {
					result: {
						userinfo
					}
				} = uni.getStorageSync('userInfo')
				const logof = {
					'userid': userinfo
				}
				this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout', logof)
					.then(res => {
						// console.log(res)
						const {
							status
						} = res
						if (status == 1) {
							uni.clearStorageSync();
							const {
								result: {
									message
								}
							} = res

							self.$message({
								message: message,
								center: true
							});
							uni.navigateTo({
								url: '/pages/index/index'
							})
						} else {

						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			changeStatus() {
				let self = this
				self.isCollapse = !self.isCollapse
				self.disable = !self.disable
				self.classp = !self.classp
			},
			showDrawer() {
				// console.log(111)
				this.drawerVisible = !this.drawerVisible;
			},
			toggleFullscreen() {
				const element = document.documentElement; // 获取整个文档的根元素
				// console.log(element)
				if (element.requestFullscreen) {
					// 兼容不同浏览器的API调用方式
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) { // Firefox
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) { // Chrome, Safari和Opera
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) { // IE/Edge
					element.msRequestFullscreen();
				}
			},
			showDrawerleft() {
				this.drawerVisibletwo = !this.drawerVisibletwo;
				// this.isblock = true
			},
			handleDrawerClose() {
				this.isblock = false
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.drawerSize = '60%'
					this.width = '90%'
				} else {
					this.drawerSize = '15%'
					this.width = '30%'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.drawerSize = '60%'
						this.width = '90%'
					} else {
						this.drawerSize = '15%'
						this.width = '30%'
					}
				}
			},
			handleOptionChange(option) {
				if (option === 'option1') {
					this.option2 = !this.option1; // 关闭选项2并开启选项1
				} else if (option === 'option2') {
					this.option1 = !this.option2; // 关闭选项1并开启选项2
				}
				this.option1 == true ? (this.baColr = '#F2F2F2', this.hColr = '#fff', this.footbg = '#FAFAFA', this
					.topColor = '#fff', this.drawbg = '#fff') : (this.baColr = '#1F2431', this.hColr = '#7A6FBE', this
					.footbg = '#323A4E',
					this.topColor = '#7A6FBE', this.drawbg = '#2A3142')
			},
			handleSelect(index) {
				// console.log(index);
				let self = this
				self.index = index
				this.drawerVisible = false
			},
		}
	}
</script>
<style>
	.content{
		/* position: fixed; */
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	/deep/table{
		width: auto !important;
	}
	/deep/.el-table__empty-block{
		width: auto !important;
	}
	@page { margin-bottom: 20;margin-top: 20; }
	/* .perpage {page-break-after:always;} */
	/* /deep/#print p span{
		overflow-x: hidden !important;
		max-width: 100% !important;
		white-space: normal !important;
	} */
	.colorb {
		background-color: #7F7F7F;
	}

	.placeholder {
		width: 400rpx;
		height: 100vh;
		visibility: hidden;
		/* 或者使用 opacity: 0; */
	}

	.newplaceholder {
		width: 128rpx;
		height: 100vh;
		visibility: hidden;
		/* 或者使用 opacity: 0; */
	}

	.fullsc,
	.setting {
		font-size: 50rpx;
		margin-right: 20rpx;
		color: #000;
		margin-top: 20rpx;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.setting {
		margin-left: 20rpx;
		display: inline-block;
		animation: rotation 2s infinite linear;
	}

	.drawerright {
		font-weight: 1000;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 400rpx;
		min-height: 800rpx;
	}

	.userLogo {
		margin-left: 10rpx;
		padding: 30rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.userLo {
		padding: 22rpx;
		width: 90%;
		height: 80rpx;
		margin-left: 20rpx;
		margin-top: 18rpx;
	}

	.el-switch {
		margin-left: 25rpx;
	}

	.el-row span {
		display: inline-block;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.changeStatu,
	.changeStatuw {
		font-size: 45rpx;
		margin-top: 30rpx;
		cursor: pointer;
	}

	@media screen and (max-width: 1400px)  and (min-width: 990px){
		.userLo {
			width: 73%;
		}
	}
	


	@media screen and (max-width: 990px) {
		.el-header {
			height: 120rpx !important;
			width: 100% !important;
			position: fixed;
			top:0;
		}
		.el-main{
			height: 85vh!important;
			margin: 120rpx 0rpx;
		}
		
		.el-footer{
			bottom: 0;
			position: fixed;
			width: 100%!important;
		}
/* 
		.homepage {
			width: 100% !important;
		} */

		.changeStatu {
			display: none;
		}

		.changeStatuw {
			display: block !important;
		}

		.asos,
		.fullsc,
		.placeholder {
			display: none;
		}

		.changeStatus1 {
			display: block !important;
			font-size: 50rpx;
			margin-top: 30rpx;
			cursor: pointer;
			width: 100%;
		}

		.smalllogo {
			width: 55rpx;
			height: 55rpx;
		}

		.atvatr {
			width: 84%;
			left: 0rpx;
		}

		.ableta {
			position: fixed;
			width: 400rpx;
			top: 100rpx;
			margin-top: 20rpx;
			z-index: 99;
		}

		.newplaceholder {
			width: 0rpx;
			height: 100vh;
			visibility: hidden;
			/* 或者使用 opacity: 0; */
		}

		.footer {
			font-size: 20rpx;
		}
	}

	/* .homepage {
		width: 80%;
		height: 100vh;
	} */

	.changeStatus1,
	.changeStatuw {
		display: none;
	}

	.el-main {
		height: 87vh;
		/* position: absolute; */
		/* top: 100rpx; */
		/* mar */
		/* margin:120rpx 0rpx; */
		z-index: 1;
		/* width: 100%; */
	}

	.el-menu {
		/* position: fixed; */
		/* right: 400rpx; */
	}


	.headerTop {
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		background-color: #fff;
	}

	.el-header {
		height: 120rpx;
		/* position: fixed; */
		/* top:0; */
		/* left: 400rpx; */
		z-index: 999;
		/* width: 90vw; */
	}

	.el-footer{
		/* position: fixed; */
		/* bottom: 0; */
		/* left: 0; */
		height: 120rpx;
		text-align: center;
		z-index: 999;
		/* width: 88%; */
	}
	.footer {
		height: 120rpx;
		line-height: 120rpx;
		/* text-align: center; */
		font-size: 26rpx;
		color: rgb(91, 98, 107);
	}

	/* 设置滚动条的轨道样式 */
	::-webkit-scrollbar {
		width: 8rpx;
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
</style>