<template>
	<div class="left_box">
		<header>

		</header>
		<el-menu router :default-active="$route.path" class="el-menu-vertical-demo" background-color="#2F3B53" active-text-color="#fff" text-color="#fff">
			<template v-for="(a, b) in menus">
				<template v-if="a.children.length > 0">
					<el-submenu :index="a.router_path">
						<template slot="title">
							<i :class="a.icon"></i>
							<span>{{a.title}}</span>
						</template>
						<template v-for="(k, i) in a.children">
							<el-menu-item :index="k.router_path" :key="k.id">{{ k.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="a.router_path" :key="a.id">
						<i :class="a.icon"></i>
						<span slot="title">{{ a.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>
<script>
	import { mapState } from "vuex"
	export default {
		data(){
			return {}
		},
		computed:{
			...mapState({
				menus: state => state.user.menus
			})
		},
		methods:{}
	}
</script>
<style scoped>
	header {
		width: 100%;
		height: 67px;
		background: rgb(11, 224, 100);
	}
	
	.left_box {
		position: absolute;
		height: 100%;
		width: 200px;
		background: #2F3B53;
	}
	
	.left_box i {
		color: #fff;
	}
	
	.el-menu {
		border-right: none;
	}
</style>