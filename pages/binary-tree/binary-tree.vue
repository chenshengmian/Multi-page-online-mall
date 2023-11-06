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
				transmit:15
			}
		},
		mounted() {
			
			
		},
		methods: {
			
		}
	}
</script>
<style>
	
</style>