<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show1')
			Array.from(document.getElementsByClassName('el-select')).forEach((item) => {
			    item.children[0].children[0].removeAttribute('readOnly')
			    item.children[0].children[0].onblur = function () {
			        let _this = this
			        setTimeout(() => {
						_this.removeAttribute('readOnly')
			        }, 200)
			    }
			})
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			//修改获取全局变量  getApp().globalData.app = ''
			access_token:'',
			refersh_token:'',
			userinfo:0
		}
	}
</script>

<style>

	/*每个页面公共css */
	.el-scrollbar {
		.el-scrollbar__bar {
			opacity: 1 !important;
		}
	}
	* { touch-action: pan-y; } 
	@media screen and (max-width: 990px) {
		.el-message-box{
			width: 700rpx !important;
		}
	}
	*{
		font-family: '微软雅黑';
	}
	
</style>
