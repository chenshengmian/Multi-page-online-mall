<template>
	<view class="content">
		<home-common :transmit="transmit"/>
	</view>
</template>

<script>
	import HomeCommon from '@/components/common/home-common.vue'
	export default {
		components: {
			HomeCommon
		},
		data() {
			return {
				transmit:16
			}
		},
		methods: {
			
		}
	}
</script>
<style>
	
</style>