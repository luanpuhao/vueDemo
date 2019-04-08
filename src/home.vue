<template>
	<div class="about">
		<header-menu></header-menu>
		<left-menu></left-menu>
		<div class="content">
			<el-breadcrumb separator="/" class="breadcrumb">
				<el-breadcrumb-item v-if="parent">{{ parent }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
			</el-breadcrumb>
			<transition name="move" mode="out-in">
				<router-view class="centerView"></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import leftMenu from "@/components/menu/leftMennu";
	import headerMenu from "@/components/menu/headerMennu";
	import { mapState } from "vuex"
	export default {
		name: "home",
		data() {
			return {
				//bread: []
			}
		},
		mounted() {},
		computed: {
			...mapState({
				menus: state => state.user.menus
			}),
			parent() {
				return this.$route.meta.parent;
			}
		},
		components: {
			leftMenu,
			headerMenu
		},
		methods: {}
	};
</script>

<style scoped>
	header {
		width: 100%;
		height: 65px;
		position: fixed;
		background: #5B5B5B;
		overflow: hidden;
		zoom: 1;
		z-index: 999;
	}
	
	.content {
		background: none repeat scroll 0 0 #f8f8f8;
		position: absolute;
		left: 203px;
		right: 0;
		top: 70px;
		bottom: 0;
		width: calc(100% - 205px);
		padding: 15px;
		box-sizing: border-box;
		overflow-y: scroll;
		min-width: 1110px;
	}
	
	.full {
		/* left: 0; */
		width: calc(100% + 10px);
		min-width: 1310px;
		padding-bottom: 0;
	}
	
	#wrapper {
		height: 100%;
		position: relative;
	}
	.breadcrumb{
		margin-bottom: 15px;
	}
	.centerView{
    height: calc(100% - 35px);
}
</style>