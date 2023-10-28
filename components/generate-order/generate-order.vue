<template>
	<view>
		<el-card style="padding: 0;">
			<div style="background-color: #e1dfdb;height: 200rpx;color: #473e3e;">
				<div style="display: flex;justify-content: center;font-size: 30rpx;padding-top: 30rpx;"><b>银行卡号：{{sysbankcard}}</b></div>
				<div style="display: flex;justify-content: center;font-size: 30rpx;padding-top: 30rpx;"><b>开户行：{{sysbankname}}</b></div>
				
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
							<div><b>{{item.goodstitle}}</b></div>
							<div style="color: red;font-size: 40rpx;"><span style="font-size: 24rpx;">MYR</span>{{item.price}}</div>
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
					<div class="fourleft">商品小计</div>
					<div class="fourright">MYR {{oldprice}}</div>
				</div>
				<!-- <div class="four">
					<div class="fourleft">运费</div>
					<div class="fourright">MYR0.00</div>
				</div> -->
				<div class="four">
					<div class="fourleft">实付费(含运费)</div>
					<div class="fourright" style="font-size: 35rpx;color: red;">MYR {{oldprice}}</div>
				</div>
			</el-card>
			
			<el-card :body-style="{ padding: '20px' }" style="margin-top: 30rpx;" shadow="never">
				<div class="wu">
					<div class="wuleft">订单编号</div>
					<div class="wuright">{{ordersn}}</div>
				</div>
				<div class="wu">
					<div class="wuleft">创建时间</div>
					<div class="wuright">{{timestr}}</div>
				</div>
				<div class="wu">
					<div class="wuleft">支付状态</div>
					<div class="wuright">{{statusstr}}</div>
				</div>
				<!-- <div class="wu">
					<div class="wuleft">支付时间</div>
					<div class="wuright">2023-10-26 17:28:34</div>
				</div> -->
			</el-card>
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
				erPhoto:''
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
								message: '登录状态已过期！',
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
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.fourleft{
		color: #666666;
	}
	.fourright{
		font-size: 28rpx;
	}
	.wu{
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #9F9CA5;
		display: flex;
	}
	.wuright{
		margin-left: 20rpx;
	}
	@media screen and (max-width: 990px) {
		.erPhoto{
			width: 400rpx !important;
			height: 400rpx !important;
		}
	}
</style>