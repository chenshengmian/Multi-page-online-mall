<template>
	<view>
		<el-card class="box-card">
			<l-echart ref="chart" style="height: 78vh;width: 100%" v-if="treeStatus"></l-echart>
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
				treeStatus: true
			}
		},
		mounted() {
			this.gets()
		},
		methods:{
			gets(){
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes')
					.then(res => {
						const {status, result: {mlevel} } = res
						uni.setStorageSync('mlevel',mlevel)
						this.$refs.chart.init(echarts, chart => {
							var data1 = uni.getStorageSync('data')
							var mlevel = uni.getStorageSync('mlevel')
							
							// console.log(mlevel)
							if (data1[0] == undefined) {
								self.treeStatus = false
							}
						
							var option = {
								// tooltip: {
								// 	trigger: 'item',
								// 	formatter: function(params) {
								// 		var node = params.data;
								// 		return node.name;
								// 	}
								// },
								series: [{
									type: 'tree',
									initialTreeDepth: 2,
									name: data1[0].name,
									data: [data1[0]],
									// symbol: "image://data:image/png;base64,iVm3KfgWOOLs",
									symbol:function(value,params){
										// console.log(params)
										if(params.data.name != ''){
											for (let key in mlevel){
												if(key == params.data.level)
												return "image://" + mlevel[key].colorimg
											}
										}
									},
									// 'image://' + require('@/static/img/GROUP.png'),
									emphasis: {
										focus: 'descendant'
									},
									expandAndCollapse: true,
									animationDuration: 550,
									animationDurationUpdate: 750,
									top: '8%',
									left: '2%',
									bottom: '50%',
									right: '2%',
									symbolSize: [30, 30],
									// symbol: 'circle', 
									edgeShape: 'polyline',
									lineStyle: {
										curveness: 0, // 设置连接线为直线
										width: 1
									},
									orient: 'TB',
									label: {
										normal: {
											position: 'top',
											formatter: function(params) {
												// 构建节点文本和图片标签
												var name = params.name;
												return name;
											}
										}
									},
									// leaves: {
									// 	label: {
									// 		position: 'top',
									// 		verticalAlign: 'middle',
									// 		align: 'top'
									// 	}
									// },
								}]
							};
							chart.setOption(option)
						
							chart.on('click', params => {
								// console.log('Clicked node:', params.color);
								if (params.name == '') {
									let fatree = params.treeAncestors
									if (fatree[fatree.length - 2].userid != '') {
										let datato = {
											'index': 3,
											'nodeid': params.data.id
										}
										// self.$emit('indexChange',datato)
										uni.navigateTo({
											url: '/pages/reseller-registration/reseller-registration?nodeid=' +
												params.data.id
										})
									} else {
										// self.$message('该节点的父节点还未注册！');
									}
								} else {
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
					})
					.catch(err => {
						console.log(err)
					})
			},
			getss(){
				var self = this
				
			}
		}
	}
</script>