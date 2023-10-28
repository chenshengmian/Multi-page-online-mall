<template>
	<div>
	<div class="overlay" @tap="close"></div>
	<div class="my-drawer">
		<el-menu default-active="1-5-1" class="el-menu-vertical-demo" 
			:collapse="isCollapse">
			<el-menu-item index="1"  @tap="handleperson">
				<i class="el-icon-menu"></i>
				<span slot="title">{{$t('menu.home')}}</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-s-fold"></i>
					<span slot="title"  >{{$t('menu.ewallets')}}</span>
				</template>
				<el-menu-item-group>
					<!-- <span slot="title">电子钱包</span> -->
					<el-menu-item index="2-1" @tap="handlepurchasehistory">{{$t('menu.ewallethistory')}}</el-menu-item>
					<el-menu-item index="2-2" @tap="handlewithdraw">{{$t('menu.ewalletwithdrawals')}}</el-menu-item>
					<el-menu-item index="2-3" @tap="handlewithdrawStatus">{{$t('menu.ewalletwithdrawalstatus')}}</el-menu-item>
					<el-menu-item index="2-4" @tap="handlebonus">{{$t('menu.bonuseshelp')}}</el-menu-item>
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
					<span slot="title"  >{{$t('menu.shopping')}}</span>
				</template>
				<el-menu-item-group>
					<!-- <span slot="title">购物</span> -->
					<el-menu-item index="4-3" @tap="handleshoppingAddress">{{$t('home.address')}}</el-menu-item>
					<el-menu-item @tap="handleshopping">{{$t('menu.allCommodities')}}</el-menu-item>
					<el-menu-item @tap="handleProduct">{{$t('menu.productshopping')}}</el-menu-item>
					<el-menu-item @tap="handlepurchase">{{$t('menu.shoppinghistory')}}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<!-- <el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-fold"></i>
					<span slot="title"  >报告</span>
				</template>
				<el-menu-item-group>
					<span slot="title">报告</span>
					<el-menu-item index="5-1">小组销售报告</el-menu-item>
					<el-menu-item index="5-2">Member Tree</el-menu-item>
				</el-menu-item-group>
			</el-submenu> -->
			<el-menu-item index="6" @tap="handlebinarytree">
				<i class="el-icon-menu"></i>
				<span slot="title">{{$t('menu.architecturediagram')}}</span>
			</el-menu-item>
			<el-menu-item index="10" @tap="handleannucement">
				<i class="el-icon-menu"></i>
				<span slot="title">{{$t('menu.announcementtable')}}</span>
			</el-menu-item>
		</el-menu>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
			};
		},
		methods: {
			handleshoppingAddress(){
				uni.navigateTo({
					url:'/pages/shippingAddress/shippingAddress'
				})
			},
			close(){
				// console.log(11)
				this.$emit('handleClose',false)
			},
			handleshopping(){
				uni.navigateTo({
					url:'/pages/shopping/shopping'
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
		},
	};
</script>

<style scoped>
	*{
		padding: 0rpx;
		margin: 0rpx;
	}

	.my-drawer {
		/* 样式规则 */
		height: 100vh;
		background-color: white;
		width: 100%;
		z-index: 9999;
	}
	.overlay {
		position: fixed; /* 声明为固定定位 */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
		z-index: 999; /* 设置层级关系，使其在其他元素上方 */
	}
	
	.my-drawer {
		position: relative; /* 声明为相对定位 */
		z-index: 1000; /* 设置层级关系，使其在遮盖层上方 */
	}
	
	.my-drawer::before {
		content: ""; /* 使用伪元素来实现高亮效果 */
		position: absolute; /* 声明为绝对定位 */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
		z-index: -1; /* 设置层级关系，使其在内容下方 */
	}
</style>