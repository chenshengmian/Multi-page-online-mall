<template>
</template>

<script>
	export default{
		props: {
			id: {
				type: String,
				default: ''
			},
		},
		data(){
			return{
				
			}
		},
		mounted(){
			// console.log(this.id)
			this.init()
		},
		methods:{
			init(){
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.pay&id='+this.id)
					.then(res=>{
						console.log(res)
					})
					.catch(err=>{
						console.log(err)
					})
			},
			creates(){
				let _this = this
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.create',creatGood)
					.then(res=>{
						// console.log(res)
						const { status,result:{orderid}} = res
						if(status==1){
							// _this.$message({
							// 	message:_this.$t('product.submissionsuccessful')+'!',
							// 	type: 'success'
							// });
							uni.navigateTo({
								url:'/pages/handlePay/handlePay?id='+orderid
							})
						}else{
							_this.$message.error(_this.$t('product.Submissionfailed')+'!');
						}
					})
					.catch(err=>{
						console.log(err)
					})
			}
			
		}
	}
</script>

<style>
</style>