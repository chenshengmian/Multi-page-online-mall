<template>
	<view class="content">
		<el-container>
			<el-dialog
			  :title="$t('genorder.PaymentConfirm')"
			  :visible.sync="dialogVisible"
			  :width="diawidth"
			  :close-on-click-modal = 'false'
			  >
			  <el-form>
					<el-form-item :label="$t('genorder.Paymentpassword')" prop="pass">
				      <el-input type="password" v-model="vapass" autocomplete="off"></el-input>
				    </el-form-item>
			 </el-form>
			 <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">{{$t('genorder.PaymentCancel')}}</el-button>
			    <el-button type="primary" @click="handelpay">{{$t('genorder.PaymentConfirm')}}</el-button>
			  </div>
			</el-dialog>
			<el-menu default-active="1-5-1" class="el-menu-vertical-demo asos" :collapse="isCollapse"
				 style="">
				 <div class="userLo">{{name}}</div>
				<!-- <image src="../../static/img/logo.png" alt="" v-if="disable" class="userLo"></image> -->
								<!-- <image src="../../static/img/favicon.png" v-else class="userLogo"></image> -->
				<el-menu-item index="1" @tap="handleperson">
					<i class="el-icon-menu"></i>
					<span slot="title">{{$t('menu.home')}}</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">{{$t('menu.ewallets')}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1" @tap="handlepurchasehistory">{{$t('menu.ewallethistory')}}</el-menu-item>
						<el-menu-item index="2-2" @tap="handlewithdraw">{{$t('menu.ewalletwithdrawals')}}</el-menu-item>
						<el-menu-item index="2-3" @tap="handlewithdrawStatus">{{$t('menu.ewalletwithdrawalstatus')}}</el-menu-item>
						<el-menu-item index="2-4" @tap="handlebonus">{{$t('menu.bonuseshelp')}}</el-menu-item>
						<el-menu-item index="2-5" @tap="handlekycgo">KYC</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">{{$t('menu.shopping')}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="4-3" @tap="handleshoppingAddress">{{$t('home.address')}}</el-menu-item>
						<el-menu-item index="4-0" @tap="handleshopping">{{$t('menu.allCommodities')}}</el-menu-item>
						<!--  <el-menu-item index="4-1" @tap="handleProduct">{{$t('menu.productshopping')}}</el-menu-item> -->
						<el-menu-item index="4-2" @tap="handlepurchase">{{$t('menu.shoppinghistory')}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="6" @tap="handlebinarytree">
					<i class="el-icon-menu"></i>
					<span slot="title">{{$t('menu.architecturediagram')}}</span>
				</el-menu-item>
				<el-menu-item index="10" @tap="handleannucement">
					<i class="el-icon-menu"></i>
					<span slot="title">{{$t('menu.announcementtable')}}</span>
				</el-menu-item>
			</el-menu>
			<!-- <div :class="classp?'placeholder':'newplaceholder'"></div> -->
			<el-container class="conent">
				<el-header :style="{backgroundColor:hColr}">
					<div class="headerTop" :style="{backgroundColor:topColor}">
						<div style="display: flex;align-items: center;" :class="{'colorb':isblock}">
							<i class="el-icon-s-grid changeStatu" @tap="changeStatus"></i>
							<!-- <image src="../../static/img/favicon.png" class="changeStatus1 smalllogo"></image> -->
														<i class="el-icon-s-grid changeStatus1" @tap="showDrawer" ></i>
						</div>
						<div style="display: flex;align-items: center;">
							<!-- <div class="userLo">{{logoname}}</div> -->
							<el-dropdown trigger="click" class="my-drawer">
								<span class="el-dropdown-link">
									<el-avatar :src="circleUrl" class=" el-icon--right"  
										style="width: 65rpx;height: 65rpx;"></el-avatar>
								</span>
								<el-dropdown-menu slot="dropdown" class="atvatr">
									<el-dropdown-item style="border-bottom: 2rpx solid #DCDFE6;">
										{{username}}
									</el-dropdown-item>
									<div @tap="hanldeChangepass">
										<el-row>
											<el-dropdown-item >
												<i class="el-icon-user-solid"></i>{{$t('menu.newloginPassword')}}
											</el-dropdown-item>
										</el-row>
									</div>
									<div @tap="hanldeChangeEwalletspass">
										<el-row>
											<el-dropdown-item >
												<i class="el-icon-user-solid"></i>{{$t('menu.newEwallectPassword')}}
											</el-dropdown-item>
										</el-row>
									</div>
									<el-row>
										<el-dropdown-item style="border-top: 2rpx solid #DCDFE6;">
											<div @tap="logOff"><i class="el-icon-switch-button"></i><el-link href="#"
													type="danger">{{$t('menu.logoff')}}</el-link></div>
										</el-dropdown-item>
									</el-row>
								</el-dropdown-menu>
							</el-dropdown>

							
							<el-row>
								<i class="el-icon-setting setting"
									@tap="showDrawerleft"></i>
							</el-row>
						</div>
					</div>
				</el-header>
				<el-drawer class="drawerright" :visible.sync="drawerVisibletwo" @close="handleDrawerClose"
					:title="$t('home.Settings')" :size="drawerSize">
					<!-- 在这里放置抽屉中的内容 -->
					<p style="text-align: center;"><b>{{$t('home.Selectlanguage')}}</b></p>
					<!-- <el-row><el-switch v-model="option1" @change="handleOptionChange('option1')"></el-switch><span>Light
							Mode</span><br /></el-row>
					<el-row><el-switch v-model="option2" @change="handleOptionChange('option2')"></el-switch><span>Dark
							Mode</span></el-row> -->
							 <el-radio-group v-model="radio"  @input="handleLangChange" >
							    <div style="margin-left: 40rpx;margin-top: 40rpx;"><el-radio label="en"><b>{{$t('locale.en')}}</b></el-radio></div>
							    <div style="margin-left: 40rpx;margin-top: 40rpx;"><el-radio label="zh-Hans"><b>{{$t('locale.zhHans')}}</b></el-radio></div>
							    <div style="margin-left: 40rpx;margin-top: 40rpx;"><el-radio label="zh-Hant"><b>{{$t('locale.zhHant')}}</b></el-radio></div>
							</el-radio-group>
							<!-- <el-row><el-switch v-model="lang1" @change="handleLangChange('en')"></el-switch><span></span><br /></el-row>
							<el-row><el-switch v-model="lang2" @change="handleLangChange('zh-Hans')"></el-switch><span>
									</span></el-row>
							<el-row><el-switch v-model="lang3" @change="handleLangChange('zh-Hant')"></el-switch><span>
									</span></el-row> -->
				</el-drawer>
				<div class="ableta">
					<my-drawer @viewIndex="handleSelect" v-show="drawerVisible" @close="closeDrawer" @handleClose="handleClose"></my-drawer>
				</div>
				<el-main :style="{backgroundColor:baColr}">
						<!-- <my-home @changeAd="getAdstatus"/> -->
						<generate-order :orderid = "orderid" @payStatus="payStatus"/>
					
				</el-main>
				<el-footer :style="{backgroundColor:footbg}">
					<div class="footer">{{footesr}}</div>
				</el-footer>
			</el-container>
		</el-container>
	</view>
</template>

<script>
	import MyDrawer from '@/components/my-drawer/my-drawer.vue';
	import GenerateOrder from '@/components/generate-order/generate-order.vue'
	export default {
		components: {
			MyDrawer,
			GenerateOrder,
		},
		data() {
			return {
				footesr:uni.getStorageSync('footer'),
				name:uni.getStorageSync('name'),
				centerDialogVisible: false,
				isCollapse: false,
				disable: true,
				drawerVisible: false,
				drawerVisibletwo: false,
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				drawerSize: '60%',
				screenWidth: 0,
				// option1: true,
				// option2: false,
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
				maindisable: false,
				username: '',
				width: '30%',
				tanccontent: '<p>这是一段包含HTML标签的内容</p>',
				type: 0,
				radio:uni.getLocale(),
				orderid:1,
				dialogVisible: false,
				orid:'',
				vapass:'',
				diawidth:'30%'
			}
		},
		onLoad(param){
			// console.log(param)
			this.orderid = Number(param.orderid)
		},
		mounted() {
			uni.setNavigationBarTitle({
				title:uni.getStorageSync('name')
			})
			this.login()
			// console.log(uni.getStorageSync('tokenArray'))
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		// onShow() {
		// 	this.login()
		// 	this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
		// 	window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		// },
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handelpay(){
				let _this = this
				if(_this.vapass==''){
					_this.$message(_this.$t('pass.enteryourpassword'))
				}else{
					let newarr = {
						'id': _this.orid,
						'password':_this.vapass
					}
					_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.pay',newarr)
						.then(res=>{
							console.log(res)
							const { status} = res
							if(status==1){
								_this.dialogVisible = false
								_this.vapass = ''
								_this.$router.go(0)   
							}else if(status==0){
								const { result:{message}} = res
								_this.$message(message)
							}
							
						})
						.catch(err=>{
							console.log(err)
						})
				}
				
			},
			payStatus(param){
				const { id, status}  = param
				this.dialogVisible  = status
				this.orid  = id
			},
			handleshoppingAddress(){
				uni.navigateTo({
					url:'/pages/shippingAddress/shippingAddress'
				})
			},
			handleshoppingAddress(){
				uni.navigateTo({
					url:'/pages/shippingAddress/shippingAddress'
				})
			},
			handleClose(param){
				this.drawerVisible = param
			},
			handleLangChange(str){
				// console.log(str)
				uni.setLocale(str)
				if(str=='en'){
					uni.setStorageSync('textlang',2)
				}else if(str=='zh-Hans'){
					uni.setStorageSync('textlang',0)
				}else{
					uni.setStorageSync('textlang',1)
				}
				this.$i18n.locale = str
				this.drawerVisibletwo = false
				this.$router.go(0)   
			},
			handleshopping(){
				uni.navigateTo({
					url:'/pages/shopping/shopping'
				})
			},
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
								adstatus,
								mobile
							}
						} = res
						uni.setStorageSync('mobile',mobile)
						self.username = nickname
						// console.log('登录状态',res)
						if (adstatus == 0) {
							self.centerDialogVisible = false
						} else {
							self.centerDialogVisible = true
						}
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
						self.circleUrl = avatar
					})
					.catch(err => {
						console.log(err)
					})

			},
			logOff() {
				this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout')
					.then(res=>{
						
					})
				uni.clearStorageSync();
				uni.navigateTo({
					url: '/pages/userLogin/userLogin'
				})
			},
			showDrawer() {
				// console.log(111)
				this.drawerVisible = !this.drawerVisible;
			},
			showDrawerleft() {
				this.drawerVisibletwo = !this.drawerVisibletwo;
			},
			handleDrawerClose() {
				this.isblock = false
			},
			changeStatus() {
				let self = this
				self.isCollapse = !self.isCollapse
				self.disable = !self.disable
				self.classp = !self.classp
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.drawerSize = '60%'
					this.width = '90%'
					this.diawidth = '90%'
				} else {
					this.drawerSize = '15%'
					this.width = '30%'
					this.diawidth = '30%'
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
						this.diawidth = '90%'
					} else {
						this.drawerSize = '15%'
						this.width = '30%'
						this.diawidth = '30%'
					}
				}
			},
		}
	}
</script>
<style>
	
	
	.content{
		/* position: fixed; */
		width: 100%;
		height: 100vh;
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
		width: 440rpx;
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
		/* margin-right: 20rpx; */
		color: #000;
		/* margin-top: 20rpx; */
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
		width: 440rpx;
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
		/* margin-top: 30rpx; */
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
			/* margin-top: 30rpx; */
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
			width: 440rpx;
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