<template>
	<view>
		<el-dialog
		  :title="$t('enroll.DealerRegistration')"
		  :visible.sync="dialogVisible"
		  :width="width"
		  :modal = 'modal'
		  >
		  <span>{{isresgistra}}</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="handlecolse">{{$t('enroll.Cancel')}}</el-button>
		    <el-button type="primary" @click="goredistration">{{$t('address.Definitely')}}</el-button>
		  </span>
		</el-dialog>

		<el-card class="box-card">
			<div class="resgister"><b>{{$t('enroll.Registered')}}</b></div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" :label-position="labelPosition" label-width="100px">
				<el-form-item :label="$t('reg.Referrer')":label-width="labelw" >
					<el-input v-model="userinfoid" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item :label="$t('reg.Node')"  :label-width="labelw" >
					<el-tag>{{nodeids}}</el-tag>
					<!-- <el-input v-model="ruleForm.superiorID" :placeholder="$t('enroll.Ifoptional')"></el-input> -->
				</el-form-item>
				
				<el-form-item :label="$t('enroll.Newdealername')+':'" prop="name" :label-width="labelw">
					<div>
						<el-input v-model="ruleForm.name" ></el-input>
					</div>
				</el-form-item>
				<el-form-item :label="$t('NickName')+':'" prop="nickname" :label-width="labelw">
				    <el-input v-model="ruleForm.nickname" ></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.nationality')+':'" prop="region" :label-width="labelw">
					<el-select  v-model="ruleForm.region" :placeholder="$t('enroll.selectnationality')" :filterable = "true">
						<!-- <el-option :label="$t('enroll.CHINA')" :value="$t('enroll.CHINA')"></el-option>
						<el-option :label="$t('enroll.MALAYSIA')" :value="$t('enroll.MALAYSIA')"></el-option>
						<el-option :label="$t('enroll.AMERICAN')" :value="$t('enroll.AMERICAN')"></el-option>
						<el-option :label="$t('enroll.JAPAN')" :value="$t('enroll.JAPAN')" ></el-option>
						<el-option :label="$t('enroll.CANADA')" :value="$t('enroll.CANADA')" ></el-option>
						<el-option :label="$t('enroll.ENGLAND')" :value="$t('enroll.ENGLAND')" ></el-option>
						<el-option :label="$t('enroll.FRANCE')" :value="$t('enroll.FRANCE')" ></el-option>
						<el-option :label="$t('enroll.GERMANY')" :value="$t('enroll.GERMANY')" ></el-option>
						<el-option :label="$t('enroll.SINGAPORE')" :value="$t('enroll.SINGAPORE')"></el-option>
						<el-option :label="$t('enroll.VIETNAM')" :value="$t('enroll.VIETNAM')" ></el-option>
						<el-option :label="$t('enroll.THAILAND')" :value="$t('enroll.THAILAND')"></el-option> -->
						<block v-for="item in phoneData">
							<block v-if="language==0">
								<el-option :label="item.chinese_name" :value="item.chinese_name"></el-option>
							</block>
							<block v-else-if="language==1">
								<el-option :label="item.chineseht_name" :value="item.chineseht_name"></el-option>
							</block>
							<block v-else="language==2">
								<el-option :label="item.english_name" :value="item.english_name"></el-option>
							</block>
						</block>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('enroll.gender')+':'" prop="gender" :label-width="labelw">
					<el-select v-model="ruleForm.gender" :placeholder="$t('enroll.selectgender')">
						<el-option :label="$t('enroll.man')" value="0"></el-option>
						<el-option :label="$t('enroll.woman')" value="1"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('enroll.Proofidentity')+':'" prop="filetype" :label-width="labelw">
					<el-select v-model="ruleForm.filetype" :placeholder="$t('enroll.selectidentification')">
						<el-option label="-" value="-"></el-option>
						<el-option :label="$t('enroll.Companynumber')" value="0"></el-option>
						<el-option :label="$t('withdrawal.idCard')" value="1"></el-option>
						<el-option :label="$t('enroll.Passportnumber')" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('enroll.Companypassportnumber')+':'" prop="number" :label-width="labelw">
					<el-input v-model="ruleForm.number"></el-input>
				</el-form-item>
				
				
				<el-form-item :label="$t('login.eamil')+':'" prop="email" :label-width="labelw">
					<div class="email" style="display: flex;">
						<el-input class="girds" v-model="ruleForm.email"></el-input>
						<!-- <el-button  @tap="sendEamil" :loading="true">{{$t('enroll.Sendverification')}}</el-button> -->
						<!-- <div class="sandst"> -->
						<el-col :span="11">
							<el-input class="codes" v-model="code" :placeholder="$t('enroll.verificationcode')"></el-input>
						</el-col>
						    <!-- <el-col class="line" :span="2"></el-col> -->
						<el-col :span="11" style="margin-top: 10rpx;margin-left: 30rpx;">
							<el-button style="height: 40px; display: inline-block;"  class="sands"  @tap="sendEamil" :loading="sendStatus">{{sand}}<span v-show="sendStatus">s</span></el-button>
						</el-col>
						<!-- </div> -->
					</div>
				</el-form-item>
				
				
				<el-form-item :label="$t('enroll.SalespersonID')+':'" prop="superiorID" :label-width="labelw" >
					<el-input v-model="ruleForm.superiorID" :placeholder="$t('enroll.Ifoptional')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.telephonenumber')+':'" :label-width="labelw" prop="selectedPrefix">
					 <!-- <el-row> -->
					    <!-- <el-col :span="9"> -->
						<div style="display: flex;">
							<el-select  v-model="ruleForm.prefixes":placeholder="$t('purse.Pleaseselect')" @change="handlePrefixChange" :filterable = "true" allow-create>
								<!-- <el-option label="+86" value="+86"></el-option> -->
								<!-- <el-option label="+80" value="+80"></el-option> -->
								<block v-for="item in phoneData">
									<el-option :label="'+'+item.phone_code" :value="'+'+item.phone_code"></el-option>
								</block>
							</el-select>
					    <!-- </el-col> -->
					    <!-- <el-col :span="20"> -->
							<el-input v-model="ruleForm.phoneNumber" :placeholder="$t('enroll.enteraphonenumber')"></el-input>
						</div>
					    <!-- </el-col> -->
					  <!-- </el-row> -->
				</el-form-item>
				<el-form-item :label="$t('enroll.address')+':'" prop="address" :label-width="labelw">
					<el-input v-model="ruleForm.address"></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.city')+':'" prop="city" :label-width="labelw">
					<el-input v-model="ruleForm.city"></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.State')+':'" prop="state" :label-width="labelw">
					<el-input v-model="ruleForm.state"></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.Zipcode')+':'" prop="zipcode" :label-width="labelw">
					<el-input v-model="ruleForm.zipcode"></el-input>
				</el-form-item>
				<el-form-item :label="$t('enroll.country')+':'" prop="country" :label-width="labelw">
					<el-select  v-model="ruleForm.country" :placeholder="$t('enroll.selectcountry')" :filterable = "true">
					<!-- 	<el-option :label="$t('enroll.CHINA')" :value="$t('enroll.CHINA')"></el-option>
						<el-option :label="$t('enroll.MALAYSIA')" :value="$t('enroll.MALAYSIA')"></el-option>
						<el-option :label="$t('enroll.AMERICAN')" :value="$t('enroll.AMERICAN')"></el-option>
						<el-option :label="$t('enroll.JAPAN')" :value="$t('enroll.JAPAN')" ></el-option>
						<el-option :label="$t('enroll.CANADA')" :value="$t('enroll.CANADA')" ></el-option>
						<el-option :label="$t('enroll.ENGLAND')" :value="$t('enroll.ENGLAND')" ></el-option>
						<el-option :label="$t('enroll.FRANCE')" :value="$t('enroll.FRANCE')" ></el-option>
						<el-option :label="$t('enroll.GERMANY')" :value="$t('enroll.GERMANY')" ></el-option>
						<el-option :label="$t('enroll.SINGAPORE')" :value="$t('enroll.SINGAPORE')"></el-option>
						<el-option :label="$t('enroll.VIETNAM')" :value="$t('enroll.VIETNAM')" ></el-option>
						<el-option :label="$t('enroll.THAILAND')" :value="$t('enroll.THAILAND')"></el-option> -->
						<block v-for="item in phoneData">
							<block v-if="language==0">
								<el-option :label="item.chinese_name" :value="item.chinese_name"></el-option>
							</block>
							<block v-else-if="language==1">
								<el-option :label="item.chineseht_name" :value="item.chineseht_name"></el-option>
							</block>
							<block v-else="language==2">
								<el-option :label="item.english_name" :value="item.english_name"></el-option>
							</block>
						</block>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('enroll.TWGmodel')+':'" prop="paymentType" :label-width="labelw">
					<el-radio-group v-model="ruleForm.paymentType" >
						<el-radio  :label="0" >{{ $t('enroll.participate') }}</el-radio>
						<el-radio  :label="1" >{{ $t('enroll.Notinvolved') }}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item :label="$t('enroll.MembershipLevel')+':'" prop="membershipGood" :label-width="labelw">
					<el-radio-group v-model="ruleForm.membershipGood" style="">
						<block v-for="item in datas">
							<el-radio class="radioe"  :label="item.gid" :key="item.gid">
								{{ item.levelname }}
							</el-radio>
						</block>
					</el-radio-group>
				</el-form-item>
				<el-form-item :label-width="labelw">
					  <el-button type="primary" @click="submitForm('ruleForm')" :loading="loadingr">{{ $t('enroll.Createnow') }}</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</view>
</template>

<script>
	import countryCode from '@/utils/countryCodeAndPhoneCode.json'
	export default {
		props:{
			nodeid:{
				type:String,
				default:''
			},
			left:{
				type:String,
				default:''
			},
		},
		name: "reseller-registration",
		data() {
			return {
				loadingr:false,
				sendStatus:false,
				sand:this.$t('enroll.Sendverification'),
				width:'30%',
				modal:false,
				dialogVisible: false,
				labelPosition:'top',
				isresgistra:'',
				phoneData:countryCode,
				userinfoid:uni.getStorageSync('tokenArray').userinfo,
				userinfo:{},
				nodeids:'',
				ruleForm: {
					name: '',
					region: '',
					nickname:'',
					delivery: false,
					type: [],
					email:'',
					resource: '',
					desc: '',
					gender:'',
					time:'',
					filetype:'',
					number:'',
					selectedPrefix: '+86', // 默认选择的地区号码前缀
					// otp:'',
					address:'',
					city:'',
					state:'',
					zipcode:'',
					filetype:'',
					country:'',
					Recipientofreceipt:'',
					zone:'',
					paymentType:'',
					superiorID:'',
					phoneNumber: '', // 输入的电话号码		
					prefixes:'',
					membershipGood:'',
					membershipLevel:'',
					userid:'',
					nodeid:this.nodeid,
					country:'',
				},
				datas:'',
				emailCode:'', 
				code:'',
				labelw:'540rpx',
				rules: {
					name: [{
							required: true,
							message: this.$t('enroll.changefuture'),
							trigger: 'blur'
						},
					],
					email:[{
						required: true,
						message: this.$t('enroll.enteremailaddress'),
						trigger: 'blur'
					},{
						type: 'email', 
						message: this.$t('enroll.validemailaddress'),
						trigger: ['blur', 'change']
					}],
					region: [{
						required: true,
						message: this.$t('enroll.selectactivearea'),
						trigger: 'change'
					}],
					country:[{
						required: true,
						message: this.$t('enroll.selectaregion'),
						trigger: 'change'
					}],
					paymentType:[{
						required: true,
						message: this.$t('enroll.TWGTripleWin'),
						trigger: 'change'
					}],
					membershipGood:[{
						required: true,
						message: this.$t('enroll.tickmembershiptier'),
						trigger: 'change'
					}],
					gender:[{
						required: true,
						message: this.$t('enroll.selectgender'),
						trigger: 'blur'
					}],
					filetype:[{
						required: true,
						message: this.$t('enroll.selectidentification'),
						trigger: 'blur'
					}],
					number:[{
						required: true,
						message: this.$t('enroll.changefutureS'),
						trigger: 'blur'
						}
						,{
							min: 7,
							message: this.$t('enroll.lengthis7'),
							trigger: 'blur'
						}
					]
				}
			};
		},
		computed:{
			language(){
				if(uni.getLocale()=='en'){
					return 2
				}else if(uni.getLocale()=='zh-Hans'){
					return 0
				}else if(uni.getLocale()=='zh-Hant'){
					return 1
				}
			},
			// interval(){
			// 	if(uni.getLocale()=='en'){
			// 		let object = {
			// 			'width': '650rpx'
			// 		}
			// 		return object
			// 	}else{
			// 		let object = {
			// 			'width': '380rpx'
			// 		}
			// 		return object
			// 	}
			// }
		},
		mounted() {
			Array.from(document.getElementsByClassName('el-select')).forEach((item) => {
			    item.children[0].children[0].removeAttribute('readOnly')
			    item.children[0].children[0].onblur = function () {
			        let _this = this
			        setTimeout(() => {
						_this.removeAttribute('readOnly')
			        }, 200)
			    }
			})
			this.nodeids = this.left == 1 ? 'L' + this.nodeid : 'R' + this.nodeid
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getballInfo()
		},
		beforeDestroy() {
		    window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			// cancalReadOnly(onOff) {
			// 	console.log(onOff)
			//       this.$nextTick(() => {
			//         if (!onOff) {
			//           const Selects = this.$refs
			//           console.log(Selects)
			// 　　　　　　// 如果只有1个下拉框，这段就足够了---start
			//           if (Selects.agentSelect) {
			//             const input = Selects.agentSelect.$el.querySelector('.el-input__inner')
			//             input.removeAttribute('readonly')
			//           }
			// 　　　　　　// 如果只有1个下拉框，这段就足够了---end
			// 　　　　　　// 如果有多个，就加多几个，代码可以优化，我懒了
			//           if (Selects.agent2Select) {
			//             const appinput = Selects.appSelect.$el.querySelector('.el-input__inner')
			//             appinput.removeAttribute('readonly')
			//           }
			//           if (Selects.agent3Select) {
			//             const gameinput = Selects.gameSelect.$el.querySelector('.el-input__inner')
			//             gameinput.removeAttribute('readonly')
			//           }
			//         }
			//       })
			// },
			handlecolse(){
				this.loadingr = false
				this.dialogVisible = false
			},
			getballInfo(){
				// console.log('获取到nodeid',this.nodeid)
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.regstep&nodeid='+self.nodeid)
					.then(res=>{
						// console.log(res)
						const { result:{memberlevel,userinfo} } = res
						self.datas = memberlevel
						self.userinfo = userinfo
					})
					.catch(err=>{
						console.log(err)
					})
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes')
					.then(res=>{
						// console.log(res)
						const {result:{lce}} = res 
						uni.setStorageSync('lce',lce)
						// console.log(lce)
					})
					.catch(err=>{
						console.log(err)
					})
			},
			submitForm(formName) {
				let self = this
				self.$refs[formName].validate((valid) => {
					if(valid){
						self.loadingr = true
						const {credit1} = self.userinfo
						let id = self.ruleForm.membershipGood
						let data = self.datas
						console.log(data)
						const ball = data.find(res=>{
							return parseInt(res.gid) == id
						})
						// console.log(ball)
						const { price,levelname,levelid } = ball
						self.ruleForm.membershipLevel = levelid
						if(parseFloat(price)>parseFloat(credit1)){
							self.$message(this.$t('enroll.Insufficien'));
						}else{
							self.dialogVisible = true
							self.isresgistra = this.$t('enroll.usebalance')+' '+credit1+' '+this.$t('shopping.purchase')+' '+levelname+' '+this.$t('enroll.consume')+' '+price+' MYR'
						}
					}else{
						return false;
					}
				})
				
			},
			goredistration(){
				let self = this
				self.dialogVisible = false				
				self.loadingr = false
				let lce = uni.getStorageSync('lce')
				if(self.code == self.emailCode&&self.code != ''||self.code == lce){
					const { userinfo } = uni.getStorageSync('tokenArray')
					if(self.ruleForm.superiorID == ''){
						 self.ruleForm.superiorID = userinfo
					}
					// console.log(self.ruleForm)
					self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.reg',self.ruleForm)
						.then(res=>{
							const  {status} = res
							// console.log(res)
							if(status==0){
								const  {result:{message}} = res
								self.$message(message)
							}else{
								const { userinfo } = uni.getStorageSync('tokenArray')
								let array = {
									'userid' : userinfo
								}
								self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.selectTree',array)
									.then(res=>{
										// self.$message({
										// 	message: message,
										// 	type: 'success'
										// })
										const { result } = res
										uni.setStorageSync('data',result)
										// console.log('更新',result)
										// self.$emit('handlereg','6')
										uni.navigateTo({
											url:'/pages/binary-tree/binary-tree'
										})
									})
									.catch(err=>{
										console.log(err)
									})
							}
							
						})
						.catch(err=>{
							self.$message(err.message)
						})
				}
				else{
					self.$message(self.$t('reg.Email'));
				}
			},
			handlePrefixChange() {
			    // 处理地区号码前缀变化的逻辑
			},
			getScreenWidth() {
				let self = this
			    self.screenWidth = window.innerWidth;
				if(self.screenWidth<=990){
					self.labelPosition = 'top'
					self.width = '80%'
				}else {
				 	self.labelw = '540rpx'
					self.labelPosition = 'right'
					self.width = '30%'
				}
			},
			handleResize() {				
				let self = this
			    const newScreenWidth = window.innerWidth;
			    if (newScreenWidth !== self.screenWidth) {
			        self.screenWidth = newScreenWidth;
					if(newScreenWidth<=990){
						// console.log(newScreenWidth);
						self.labelPosition = 'top'
						self.width = '80%'
					}else {
						self.labelw = '540rpx'
						self.labelPosition = 'right'
						self.width = '30%'
					}
			    }
			},
			sendEamil(){
				let self = this
				if(self.ruleForm.email == ''){
					self.$message(this.$t('enroll.enteremailaddress'))
				}else{
					let array = {
						'email' : self.ruleForm.email
					}
					self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.email.ts',array)
						.then(res=>{
							console.log(res)
							// console.log(typeof(res) == 'string')
							if(typeof(res) == 'string'){
								self.$message(this.$t('enroll.codeiscorrect'))
							}else{
								const {status, result:{message} } = res
								self.emailCode = message
								if(status==1){
									self.$message({
										message: this.$t('enroll.sentagain'),
										type: 'success'
									})
									self.sendStatus = true
									self.sand = 60;
									// self.show = false;
									self.timer = setInterval(() => {
									if (self.sand > 0 && self.sand <= 60) {
										self.sand-- ;
									} else {
										self.sendStatus = false
										self.sand = self.$t('enroll.Sendverification');
										clearInterval(self.timer);
										self.timer = null;
									  }
									}, 1000);
								}else if(status == 0){
									self.$message(this.$t('enroll.codeiscorrect'))
								}
							}
							
						})
						.catch(err=>{
							self.$message(err.message)
						})
				}
				
			}
		}
	}
</script>

<style>

	
	*{
		font-size: 26rpx;
		touch-action: pan-y;
	}
	.dome {
		display: flex;
		/* justify-content: space-between; */
	}

	.text {
		font-size: 26rpx;
	}

	.item {
		padding: 36rpx 0;
	}
	.resgister {
		display: flex;
		justify-content: center;
	}
	.el-form-item__label{
		width: 100% !important;
	}
	.email{
		display: block !important;
	}
	.email div{
		margin-top: 5rpx;
	}
	/* 设置滚动条的轨道样式 */
	::-webkit-scrollbar {
		width: 5rpx;
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
	/* .sands{
		width: 20%;
		margin-top: 10rpx;
		margin-right: 12rpx;
	}
	.codes{
		margin-top: 10rpx;
		width: 79.5%;
	} */
	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		/* .sands{
			width: 41.5%;
			margin-top: 10rpx;
			margin-right: 12rpx;
		}
		.codes{
			margin-top: 10rpx;
			width: 56%;
		} */
		.girds{
			display: grid !important;
			grid-template-rows: 1fr;
		}
		
		.radioe{
			margin-top: 5rpx;
		}
		/* .sandst{
			display: flex; */
			/* justify-content: end; */
		/* } */
		
		/* .el-form-item{
			display: flex;
			flex-wrap: wrap;
		}
		.el-form .el-form-item__label{
			width: auto !important;
		}
		.el-form-item__content{
			margin-left: 0rpx;
		} */
		/* .email{
			display: grid !important;
			grid-template-columns: 1fr;
		} */
	}
</style>