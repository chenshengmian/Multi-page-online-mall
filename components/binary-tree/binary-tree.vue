<template>
	<view>
		<el-card class="box-card">
			<div style="display: flex;justify-content: end;">
				<el-button @tap="handlefour" size="mini">{{$t('tree.Fivedisplayed')}}</el-button>
				<el-button @tap="handleAll" size="mini">{{$t('tree.all')}}</el-button>
			</div>
			<l-echart ref="chart" style="height: 78vh;width: 100%;max-width: 1366px;" v-if="treeStatus"></l-echart>
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
				treeStatus: true,
				initialTreeDepthNum:4 
			}
		},
		mounted() {
			this.gets()
		},
		methods:{
			 handleChartRender() {
			      this.$refs.chart && this.$refs.chart.on('mousemove', params => {
			        if (params.componentType === 'series') {
			          this.showTooltip = true;
			          this.tooltipLeft = params.event.offsetX;
			          this.tooltipTop = params.event.offsetY;
			          this.tooltipContent = '数值：' + params.value;
			        } else {
			          this.showTooltip = false;
			        }
			      })
			    },
			handlefour(){
				this.initialTreeDepthNum = 4
				this.gets()
			},
			handleAll(){
				this.initialTreeDepthNum = 1000
				this.gets()
			},
			gets(nodeids){
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes')
					.then(res => {
						const {status, result: {mlevel} } = res
						uni.setStorageSync('mlevel',mlevel)
						self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.selectTree&nodeid='+nodeids)
							.then(res=>{
								const { result } = res
								uni.setStorageSync('data', result)
								this.$refs.chart.init(echarts, chart => {
										var data1 = uni.getStorageSync('data')
										var mlevel = uni.getStorageSync('mlevel')
										
										// console.log(mlevel)
										if (data1[0] == undefined) {
											self.treeStatus = false
										}
										console.log(data1[0])
										var option = {
											tooltip: {
												trigger: 'item',
												formatter: function(params) {
													console.log(params)
													var node = params.data;
													return node.nickname;
												}
											},
											series: [{
												type: 'tree',
												initialTreeDepth: self.initialTreeDepthNum,
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
												bottom: '25%',
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
														verticalAlign: 'middle', // 垂直对齐方式
														align: 'center', // 水平对齐方式
														lineHeight: 16, // 行高，控制换行
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
											console.log('Clicked node:', params);
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
															params.data.id + '&left=' + params.data.left
													})
												} else {
													// self.$message('该节点的父节点还未注册！');
												}
											} else {
												const { userinfo } = uni.getStorageSync('tokenArray')
												if(userinfo == Number(params.data.userid)){
													self.gets(params.data.id)
												}
											}
											
										})
									});
								})
							})
							.catch(err=>{
								console.log(err)
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