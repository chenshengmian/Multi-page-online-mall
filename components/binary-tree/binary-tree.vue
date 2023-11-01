<template>
	<view>
		<el-card class="box-card">
			<l-echart ref="chart" style="height: 78vh;" v-if="treeStatus"></l-echart>
			<el-empty :description="$t('tree.notpurchaseballs')" v-else></el-empty>
		</el-card>
	</view>
</template>

<script>
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue';
	import * as echarts from 'echarts';
	export default {
		components: {
			LEchart
		},
		data() {
			return {
				treeStatus:true
			}
		},
		async mounted() {
			var self = this
			this.$refs.chart.init(echarts, chart => {
				var data1 = uni.getStorageSync('data')
				console.log(data1[0])
				if(data1[0]==undefined){
					self.treeStatus = false
				}
				// console.log(data1[0])
				var option = {

					series: [{
						type: 'tree',
						initialTreeDepth: 2,
						name: 'tree1',
						data: [data1[0]],
						top: '8%',
						left: '2%',
						bottom: '50%',
						right: '2%',
						symbolSize: [30, 30],
						symbol: 'circle', 
						edgeShape: 'polyline',
						lineStyle: {
							curveness: 0 // 设置连接线为直线
						},
						// grid: {
						//     height: '100px' // 替换为你所需的高度
						// },
						orient: 'TB',
						label: {
							normal: {
								position: 'top',
								verticalAlign: 'middle',
								align: 'center', 
								color: 'black'
							}
						}
					}]
				};
				chart.setOption(option)
				
				chart.on('click',params=>{
					if(params.name==''){
						console.log('Clicked node:', params.data.id);
						let fatree = params.treeAncestors
						if(fatree[fatree.length-2].userid !=''){
							let datato = {
								'index': 3,
								'nodeid':params.data.id
							}
							// self.$emit('indexChange',datato)
							uni.navigateTo({
								url:'/pages/reseller-registration/reseller-registration?nodeid='+params.data.id
							})
						}else{
							self.$message('该节点的父节点还未注册！');
						}
					}
					else{
						// self.$message({
						// 	message: '该节点的已注册！',
						// 	type: 'success'
						// });
					}
					
					
					// if (params.data.children) {
					//  	params.data.children.forEach(child => {
					//  		child.name = '';
					//  	});
					//  	chart.setOption(option);
					// }
					// console.log('Clicked node:', params);
				})
			});
		},
	}
</script>