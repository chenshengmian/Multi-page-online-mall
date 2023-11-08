<template>
	<view>
		<el-card v-show="homeStatus">
			<el-skeleton :rows="20" animated />
		</el-card>
		<div class="grid-container" v-show="!homeStatus">
			<el-card class="box-card frist">
				<div class="fristcard">
					<el-avatar class="atvatone" :src="avatarUrl"
						style="width: 300rpx;height: 300rpx;background-color: #d9ecff;" />
					<div>
						<span class="spanone"
							style="font-size: 48rpx;color: #5B626B;margin-top: 70rpx;display:inline-block "><b>{{nickname}}</b></span><br />
						<span style="color:#74626B;font-size: 30rpx;font-weight: 500;">{{Account}}</span><br />
						<!-- <span style="color:#60626B;font-weight: 600;">Five Fortunes Package</span><br /> -->
					</div>
				</div>
				<div style="margin-top: 60rpx;">
					<div class="fristcardbottom">{{$t('home.registerPoint')}}</div>
					<div class="fristcardbottomtwo">MYR {{registerPoint}}</div>
				</div>
				<div>
					<div class="fristcardbottom">{{$t('home.joiningDate')}}</div>
					<div class="fristcardbottomtwo">{{joiningDate}}</div>
				</div>
				<div>
					<div class="fristcardbottom">{{$t('home.productPoint')}}</div>
					<div class="fristcardbottomtwo">MYR {{credit2}}</div>
				</div>
				<div>
					<div class="fristcardbottom">{{$t('home.totalCashPoint')}}</div>
					<div class="fristcardbottomtwo">MYR  {{credit5}}</div>
				</div>
				<div style="margin-top: 20rpx;">
					<!-- <el-tag @tap="handleAdstatus(0)"
						style="margin-right: 20rpx;">{{$t('home.reviewagreement')}}</el-tag> -->
					<div><el-tag @tap="handleAdstatus(1)"
							style="margin-top: 20rpx;">{{$t('home.Checkthepopupwindow')}}</el-tag></div>
				</div>
			</el-card>
			<el-card class="box-card second">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					{{$t('home.Groupmembership')}}
				</div>
				<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">{{flevelchildrennum}}
				</div>
			</el-card>
			<el-card class="box-card three">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					{{$t('home.Groupsales')}}
				</div>
				<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">{{childrenordermoney}}
				</div>
			</el-card>
			<el-card class="box-card four" >
				<div style="cursor: pointer;" @tap="handleBous">
					<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
						{{$t('home.commission')}}
					</div>
					<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">{{commissionmoney}}
					</div>
				</div>
			</el-card>
			<el-card class="box-card wu">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					<b>{{$t('home.Bonustype')}}</b>
				</div>

				<div v-for="item in typesArray" style="font-size: 28rpx;margin-top: 20rpx;">
					<div class="bonustype">
						<div v-show="levelName">{{item.levelname_en}}</div>
						<div v-show="!levelName">{{item.levelname}}</div>
						<div><b>{{item.bonus}}</b> <i style="margin-left: 10rpx;color:#b36d61" class="el-icon-success"
								v-if="item.bonus"></i> 
								<!-- <i style="margin-left: 10rpx;color:#b36d61"
								class="" v-else></i> -->
								</div>
					</div>
				</div>
			</el-card>
			<el-card class="box-card sex">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					<b>{{$t('home.Monthlyincome')}}</b>
				</div>
				<div v-for="item in weeksArray" style="font-size: 28rpx;margin-top: 20rpx;">
					<div class="bonustype">
						<div>{{$t('home.clause')}} {{item.num}} {{$t('home.weeks')}}</div>
						<div><b>{{item.sumordermoney}}</b></div>
					</div>
				</div>
				<div class="bonustype" style="font-size: 28rpx;margin-top: 20rpx;">
					<div>{{$t('home.totalCashPoint')}}</div>
					<div><b>{{sumbonus}}</b></div>
				</div>
				<div class="bonustype" style="font-size: 28rpx;margin-top: 20rpx;">
					<div>{{$t('home.Totalwithdraw')}}</div>
					<div><b>{{totalWithdraw}}</b></div>
				</div>
			</el-card>


			<el-card class="box-card news" style="padding: 0;">
				<div slot="header" class="clearfix headers">
					<div class="yearmonth" style="display: flex;justify-content: space-between;">
						<div style="font-size: 24rpx;font-weight: 600;line-height: 72rpx;">
							{{$t('home.news')}}
						</div>
						<!-- <div class="gt" style="display: flex;"> -->
						<!-- <div class="monthright" style="font-size: 24rpx;line-height: 60rpx;">{{$t('home.yearmonth')}}：</div> -->
						<!-- <div class="year">
								<el-select v-model="year" slot="prepend" :placeholder="$t('home.year')" size="mini"
									>
									<div v-for="(item,index) in yearArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
							<div class="month" >
								<el-select v-model="mouth" slot="prepend" :placeholder="$t('home.month')" size="mini"
									>
									<div v-for="o in 12" :key="o" class="text item">
										<el-option :label="o" :value="o"></el-option>
									</div>
								</el-select>
							</div> -->
						<!-- </div> -->
					</div>
				</div>
				<announcement-table />
			</el-card>
		</div>
	</view>
</template>

<script>
	import AnnouncementTable from '@/components/announcement-table/announcement-table.vue'
	export default {
		components: {
			AnnouncementTable
		},
		name: "my-home",
		data() {
			return {
				avatarUrl: uni.getStorageSync('logo'),
				// mouth: 0,
				// year: 0,
				yearArr: [],
				joiningDate: '',
				RetailBonus: '',
				nickname: '',
				Account: '',
				credit2: '',
				registerPoint: '',
				credit5: '',
				typesArray: [],
				weeksArray: [],
				sumbonus: '',
				totalWithdraw: '',
				homeStatus: true,
				childrenordermoney: 0,
				flevelchildrennum: '',
				commissionmoney: '',
			};
		},
		mounted() {
			this.getMounth()
			this.getinfo()
		},
		computed: {
			levelName() {
				if (uni.getLocale() == 'en') {
					return true
				} else {
					return false
				}
			},
		},
		methods: {
			handleBous(){
				uni.navigateTo({
					url:'/pages/bonus-description/bonus-description'
				})
			},
			handleAdstatus(type) {
				// console.log(type)
				const array = {
					'type': type,
					'ad': true
				}
				this.$emit('changeAd', array)
			},
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				// this.mouth = this.$t('home.year')
				// this.year = this.$t('home.month')
			},
			getinfo() {
				let _this = this
				const {
					userinfo
				} = uni.getStorageSync('tokenArray')
				let array = {
					'userid': userinfo
				}
				_this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.selectTree',
						array)
					.then(res => {
						const {
							result
						} = res
						uni.setStorageSync('data', result)
						console.log('更新', res)
					})
					.catch(err => {
						console.log(err)
					})
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes')
					.then(res => {
						console.log(res)
						const {
							status,
							result: {
								jointime,
								nickname,
								childrenordermoney,
								commissionmoney,
								credit2,
								credit1,
								credit5,
								flevelchildrennum,
								allglobonus,
								alllevelmes,
								lastmormoney,
								monthmes,
								mlevel,
								email,
								bonuslevelmes: {
									bonus,
									level,
									levelname,
									levelname_en,

								}
							}
						} = res
						if (status == 1) {
							uni.setStorageSync('email', email)
							// uni.setStorageSync('mlevel',mlevel)
							_this.childrenordermoney = childrenordermoney
							_this.commissionmoney = credit5
							_this.flevelchildrennum = flevelchildrennum
							_this.typesArray = alllevelmes
							_this.joiningDate = jointime
							_this.nickname = nickname
							_this.credit2 = credit2
							_this.Account = email
							_this.registerPoint = credit1
							_this.credit5 = credit5
							_this.weeksArray = monthmes
							_this.sumbonus = lastmormoney
							_this.totalWithdraw = allglobonus
							_this.homeStatus = false
						}
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	/deep/table {
		width: auto !important;
	}

	/deep/.el-table__empty-block {
		width: auto !important;
	}

	.bonustype {
		display: flex;
		justify-content: space-between;
	}

	.lastcard {
		font-size: 20rpx;
	}

	.lastcard div {
		margin-top: 24rpx;
	}

	.lastcard div a {
		text-decoration: none;
		color: #8273BE;
	}

	.headers {
		/* display: flex;
		justify-content: space-between; */
	}

	.month,
	.year {
		margin-right: 20rpx;
	}

	.yearmonth {
		display: flex;
		justify-content: space-between;
	}


	.fristcardbottomtwo a {
		text-decoration: none;
		color: #8273BE;
	}

	.monthright {
		display: inline-block;
	}

	.container {
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		/* 每行两个等分的列 */
		justify-items: center;
		/* 在水平方向上居中对齐 */
		align-items: center;
		/* 在垂直方向上居中对齐 */
		gap: 20rpx;
		/* 盒子之间的间距，可根据实际需求调整 */
		text-align: center;
	}

	.box {
		margin-top: 40rpx;
	}

	.boxtwo {
		font-weight: 600;
		color: #5B626B;
	}

	.fivetwo {
		font-size: 24rpx;
		color: #6c757d;
	}

	.second,
	.three,
	.four,
	.wu,
	.sex {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.second::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 65%;
		height: 65%;
		background-image: url("../../static/img/card-logo.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
		pointer-events: none;
	}

	.three::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 65%;
		height: 65%;
		background-image: url("../../static/img/GROUP.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
		pointer-events: none;
	}

	.four::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 65%;
		height: 65%;
		background-image: url("../../static/img/COMMISSION.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
		pointer-events: none;
	}

	.wu::after {
		content: "";
		position: absolute;
		bottom: 0;
		/* left: 20%; */
		/* right: 0; */
		width: 100%;
		height: 100%;
		filter: alpha(opacity=40);
		-moz-opacity: 0.4;
		-khtml-opacity: 0.4;
		opacity: 0.4;
		background-image: url("../../static/img/Bonus.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom;
		/* background-position: center; */
		pointer-events: none;
	}

	.sex::after {
		content: "";
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 60%;
		filter: alpha(opacity=50);
		-moz-opacity: 0.4;
		-khtml-opacity: 0.4;
		opacity: 0.4;
		background-image: url("../../static/img/Monthly.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center bottom;
		pointer-events: none;
	}

	.fristcard {
		display: flex;
		justify-content: space-around;
	}

	.grid-container {
		display: grid;
		grid-template-rows: 250rpx 1500rpx;
		grid-template-columns: 28% 23% 23% 23%;
		gap: 30rpx;
	}

	.news {
		grid-column: span 4;
		background-color: #fff;
		padding: 20rpx;
	}

	.box-card:nth-child(1) {
		grid-column: 1;
		grid-row: 1 / span 2;
	}

	.sex {
		grid-column: span 2;
	}

	.fristcardbottom {
		font-size: 24rpx;
		color: #5B626B;
		margin-top: 20rpx;
	}

	.fristcardbottomtwo {
		font-size: 32rpx;
		color: #323232;
		font-weight: 600;
		/* margin-top: 20rpx; */
	}

	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		.wu::after {
			content: "";
			position: absolute;
			bottom: 0;
			right: 0;
			width: 40%;
			height: 40%;
			background-image: url("../../static/img/Bonus.png");
			background-size: contain;
			background-repeat: no-repeat;
			background-position: bottom right;
			pointer-events: none;
		}

		.sex::after {
			content: "";
			position: absolute;
			bottom: 0;
			right: 0;
			width: 60%;
			height: 60%;
			background-image: url("../../static/img/Monthly.png");
			background-size: contain;
			background-repeat: no-repeat;
			background-position: bottom right;
			pointer-events: none;
		}

		.grid-container {
			grid-template-columns: 100%;

		}

		.box-card {
			grid-column: 1 / span 1;
		}

		.fristcard {
			display: grid;
			grid-template-columns: 1fr;
		}

		.yearmonth {
			display: grid;
			grid-template-columns: 1fr;
		}

		.monthright {
			width: 160rpx;

		}
	}

	@media screen and (min-width: 990px) and (max-width: 1500px) {
		.fristcard {
			display: grid;
			grid-template-columns: 1fr;
		}

		.atvatone span {
			width: 200rpx;
			height: 200rpx;
		}
	}
</style>