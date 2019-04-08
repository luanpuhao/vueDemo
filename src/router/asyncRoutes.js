//后台返回的菜单json数组

const staticRoutes = [ {
	id: 5,
	router_path: "/home",
	component_path: "home.vue",
	title: " 首页",
	name: "",
	icon: "",
	children: []
}, {
	id: 1,
	router_path: "", //路由路径
	component_path: "", //路由对于组件路径
	title: "视频监控", //菜单名称,
	name: "", //路由的name
	icon: "",
	children: [{ //子菜单
		id: 2,
		router_path: "/one",
		component_path: "one.vue",
		title: "勘察单",
		name: "",
		icon: "",
	}, {
		id: 3,
		router_path: "/two",
		component_path: "two.vue",
		title: "未交费",
		name: "",
		icon: "",
	}, {
		id: 4,
		router_path: "/three",
		component_path: "three.vue",
		title: "已缴费",
		name: "",
		icon: "",
	}, {
		id: 5,
		router_path: "/three",
		component_path: "three.vue",
		title: "已派单",
		name: "",
		icon: "",
	}]
},{
	id: 6,
	router_path: "/five",
	component_path: "five.vue",
	title: "导航3",
	name: "",
	icon: "",
	children: []
}]
export default staticRoutes