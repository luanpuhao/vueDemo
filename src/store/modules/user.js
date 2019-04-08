import asyncRoutes from "@/router/asyncRoutes"
const state = {
	menus: []
}

const mutations = {
	//存菜单列表
	setMenus: (state, data) => {
		state.menus = data
	}
}

const actions = {
	// 获取菜单
	async getMenus({
		commit
	}) {
		commit("setMenus", asyncRoutes)
		return asyncRoutes
	}
}

export default {
	namespaced: true,
	actions,
	state,
	mutations
}