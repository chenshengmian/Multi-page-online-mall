<template>
	<view>
		<el-card style="padding: 0;">
			<el-skeleton :rows="25" v-show="showSataus"/>
			<div v-show="!showSataus">
			<div class="sys" style="background-color: #e1dfdb;color: #473e3e;padding: 20rpx;">
				<div class="sysbank" style="display: flex;justify-content: center;font-size: 30rpx;padding-top: 10rpx;"><b>{{$t('product.Bankcardnumber')}}：{{sysbankcard}}</b></div>
				<div class="sysbank" style="display: flex;justify-content: center;font-size: 30rpx;padding-top: 20rpx;"><b>{{$t('product.Bank')}}：{{sysbankname}}</b></div>
				
				<!-- <div style="display: flex;justify-content: center;margin-top: 10rpx;">订单金额：{{oldprice}} MYR</div> -->
			</div>
			
			<div style="display: flex;justify-content: center;margin-top: 20rpx;">
				<img class="erPhoto" :src="erPhoto" alt="" style="width: 800rpx;height: 800rpx;">
			</div>
			<div style="background-color: rgb(213 217 221);display: flex;margin-top: 30rpx;padding: 20rpx;" v-show="addressSattus">
				<div style="margin: 20rpx;">
					<i class="el-icon-location-outline"></i>
				</div>
				<div>
					<div>{{mobile}}</div>
					<div style="font-size: 24rpx;">{{address}}</div>
				</div>
			</div>
			<el-card :body-style="{ padding: '20px' }" style="margin-top: 30rpx;" shadow="never">
				<block v-for="item in shopping">
				<div style="display: flex;margin-top:10rpx">
					<img :src="item.goodsthumb" class="image">
					<div style="margin-left: 30rpx;width: 100%;">
						<!-- <h6>内容：</h6> -->
						<div style="display: flex;justify-content: space-between;">
							<div class="title"><b>{{item.goodstitle}}</b></div>
							<div class="price" style="color: red;font-size: 40rpx;"><span style="font-size: 24rpx;">MYR</span>{{item.price}}</div>
						</div>
						<div style="display: flex;justify-content: end;">
							<!-- <time class="time">库存： {{ item.marketprice }}</time> -->
							<time class="time">x{{item.total}}</time>
						</div>
					</div>
				</div>
				</block>
			</el-card>
			<el-card :body-style="{ padding: '20px' }" style="margin-top: 30rpx;" shadow="never">
				<div class="four">
					<div class="fourleft">{{$t('product.Commoditysubtotal')}}</div>
					<div class="fourright">MYR {{oldprice}}</div>
				</div>
				<div class="four">
					<div class="fourleft">{{$t('product.Actualpayment')}}</div>
					<div class="fourrights" style="font-size: 35rpx;color: red;">MYR {{oldprice}}</div>
				</div>
			</el-card>
			
			<el-card :body-style="{ padding: '20px' }" style="margin-top: 30rpx;" shadow="never">
				<div style="display: flex;">
					<div class="wu">
						<div class="wuleft">{{$t('product.Ordernumber')}}</div>
						<div class="wuleft">{{$t('product.Creationtime')}}</div>
						<div class="wuleft">{{$t('product.Paymentstatus')}}</div>
					</div>
					<div class="wu">
						<div class="wuright">{{ordersn}}</div>
						<div class="wuright">{{timestr}}</div>
						<div class="wuright">{{statusstr}}</div>
					</div>
				</div>
			</el-card>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		props: {
			orderid: {
				type: Number,
				default: 0,
			}
		},
		name: "generate-order",
		data() {
			return {
				oldprice:0,
				statusstr:'',
				addressSattus:true,
				shopping:[],
				ordersn:'',
				timestr:'',
				address:'',
				mobile:'',
				sysbankcard:'',
				sysbankname:'',
				erPhoto:'',
				showSataus:true
			};
		},
		mounted() {
			// console.log(this.orderid)
			this.login()
			this.orderInfomation()
		},
		methods: {
			login() {
				let self = this
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

			orderInfomation() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.detail&orderid=' + this
						.orderid)
					.then(res => {
						// console.log(res)
						const { status,result:{list:{gmess,addressmes,goodsprice,price,ordersn,statusstr,timestr} }} = res
						_this.$nextTick(function(){
							_this.timestr = timestr
							_this.shopping = gmess
							_this.ordersn = ordersn
							_this.statusstr = statusstr
							_this.oldprice = price
							if(addressmes.length==0){
								_this.addressSattus = false
							}
							_this.mobile = addressmes.mobile
							_this.address = addressmes.address
							_this.showSataus = false
						})
					})
					.catch(err => {
						console.log(err)
					})
					
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.bankmes')
					.then(res=>{
						console.log(res)
						const { result:{sysbankcard,sysbankname,sklogo} } = res
						_this.sysbankcard = sysbankcard
						_this.sysbankname = sysbankname
						_this.erPhoto = sklogo
					})
					.catch(err=>{
						console.log(err)
					})
			}
		}
	}
</script>

<style scoped>
	.image {
	    width: 200rpx;
		height: 200rpx;
	    display: block;
	}
	.four{
		display: flex;
		justify-content: space-between;
	}
	.fourleft{
		margin-top: 15rpx;
		color: #666666;
	}
	.fourright{
		font-size: 28rpx;
	}
	.wuleft{
		margin-top: 20rpx;
		color: #1a1a1a;
	}
	.wu{
		font-size: 28rpx;
		color: #9F9CA5;
	}
	.wuright{
		margin-left: 25rpx;
		margin-top: 20rpx;
	}
	@media screen and (max-width: 990px) {
		.erPhoto{
			width: 400rpx !important;
			height: 400rpx !important;
		}
		.image{
			width: 100rpx;
			height: 100rpx;
		}
		.wuleft,.wuright{
			margin-top: 10rpx;
			font-size: 22rpx;
		}
		.four,.fourright{
			margin-top: 5rpx;
			font-size: 22rpx;
		}
		.fourrights{
			font-size: 25rpx !important;
		}
		.title{
			font-size: 25rpx !important;
		}
		.price{
			font-size: 30rpx !important;
		}
		.time{
			font-size: 20rpx;
		}
		.sysbank{
			font-size: 25rpx !important;
			padding-top: 8rpx !important;
		}
	
	}
</style>