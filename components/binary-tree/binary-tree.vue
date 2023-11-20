<template>
	<view>
		<el-card class="box-card" style="position: relative;">
			<div v-if="treeStatuss">
				<div>
				    <span><i class="el-icon-caret-left"></i> {{$t('tree.Left')}}:{{Left}}</span>
				    <el-divider direction="vertical"></el-divider>
				    <span><i class="el-icon-caret-right"></i> {{$t('tree.Right')}}:{{Right}}</span>
				    <el-divider direction="vertical"></el-divider>
				    <span class="huan"><i class="el-icon-share"></i> {{$t('tree.Total')}}:{{Total}}</span>
					<el-divider direction="vertical"></el-divider>
					<span class="huan"><i class="el-icon-medal-1"></i> {{levelmes}}</span>
				  </div>
			</div>
			<div style="display: flex;justify-content: end;display: -webkit-flex; -webkit-justify-content: flex-end; " v-if="treeStatuss">
				<!-- <block v-for="(item,index) in nodeArr">
					<el-button @tap="handlefour" size="mini">{{item.nickname}}</el-button>
				</block> -->
				<el-select v-model="value" :placeholder="$t('purse.Pleaseselect')" @change="handleChange">
				    <el-option
				      v-for="item in nodeArr"
				      :key="item.nickname"
				      :label="item.nickname"
				      :value="item.id">
				    </el-option>
				  </el-select>
				<el-button @tap="handlefour" size="mini" style="margin-left: 20rpx;">{{$t('tree.Fivedisplayed')}}</el-button>
				<el-button @tap="handleAll" size="mini">{{$t('tree.all')}}</el-button>
			</div>
			<div>
				<div>
					<l-echart class="chart" ref="chart" style="height: 71.5vh;width: 100%;" v-if="treeStatus"></l-echart>
					<el-empty :description="$t('tree.notpurchaseballs')" v-else></el-empty>
				</div>
				<!-- <div style="position: absolute;right: 20rpx;top: 120px;">
				<div  v-for="item in typesArray" style="font-size: 28rpx;margin-top: 20rpx;width: 300px;z-index: 9999;background-color: white;" v-show="treeStatuss"  v-if="typeSatatus">
					<div class="bonustype" >
						<div v-show="levelName">{{item.levelname_en}}</div>
						<div v-show="!levelName">{{item.levelname}}</div>
						<div><b>{{item.bonus}}</b> <i style="margin-left: 10rpx;color:#b36d61" class="el-icon-success"
								v-if="item.bonus"></i> 
						</div>
					</div>
				</div>
				</div> -->
			</div>
			
			
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
				treeStatuss: false,
				initialTreeDepthNum:4 ,
				nodeArr:[],
				value:'',
				Total:0,
				Right:0,
				Left:0,
				typesArray:[],
				typeSatatus:true,
				levelmes:''
			}
		},
		// computed: {
			// levelmes() {
			// 	if (uni.getLocale() == 'en') {
			// 		this.$router('')
			// 	} else {
			// 		return false
			// 	}
			// },
		// },
		mounted() {
			this.gets()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			 window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods:{
			handleChange(){
				// console.log(this.value)
				this.gets(this.value)
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
								console.log(res)
								const { result:{tree,node,count,left,right,alllevelmes,levelmes} } = res
								self.Total = count
								self.Right = right
								self.levelmes = levelmes
								self.typesArray = alllevelmes
								self.Left = left
								self.nodeArr = node
								uni.setStorageSync('data', tree)
								self.$refs.chart.init(echarts, chart => {
										var data1 = uni.getStorageSync('data')
										var mlevel = uni.getStorageSync('mlevel')
										
										// console.log(mlevel)
										if (data1[0] == undefined) {
											self.treeStatus = false
											self.treeStatuss = false
										}else{
											self.treeStatus = true
											self.treeStatuss = true
										}
										console.log(data1[0])
										var option = {
											// tooltip: {
											// 	trigger: 'item',
											// 	formatter: function(params) {
											// 		console.log(params)
											// 		var node = params.data;
											// 		return node.nickname;
											// 	}
											// },
											toolbox:{
												feature:{
													dataZoom:{
														type:'inside',
														start:0,
														end:50
													}
												}
											},
											series: [{
												roam:true,
												scaleLimit:{
													min:0.5,
													max:3
												},
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
												// const { userinfo } = uni.getStorageSync('tokenArray')
												// if(userinfo == Number(params.data.userid)){
												// 	self.gets(params.data.id)
												// }
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
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.initialTreeDepthNum = 2
					this.typeSatatus = false
				} else {
					this.initialTreeDepthNum = 4
					this.typeSatatus = true
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					if (newScreenWidth <= 990) {
						this.initialTreeDepthNum = 2
						this.typeSatatus = false
					} else {
						this.initialTreeDepthNum = 4
						this.typeSatatus = true
					}
				}
			},
		}
	}
</script>

<style>
	.bonustype {
		display: flex;
		justify-content: space-between;
	}
	
	@media screen and (max-width: 1200px) {
		.chart{
			max-width: 1000px;
		}
	}
	@media screen and (max-width: 990px) {
		.huan{
			display: block;
			margin-top: 20rpx;
		}
	}
</style>