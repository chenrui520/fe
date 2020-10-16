import Cookies from 'js-cookie'
import { apiGetLeftMenu } from '@api/app'

const state = {
  sidebar: {
    isMenuCollapse: Cookies.get('isMenuCollapse') === 'true',
    isSubMenuCollapse: Cookies.get('isSubMenuCollapse') === 'true',
    menus: [],
    subMenus: []
  }
}

const mutations = {
  UPDATE_SIDEBAR(state, payload) {
    state.sidebar = {
      ...state.sidebar,
      ...payload
    }
  }
}

const actions = {
  // 获取菜单数据
  async fecthGetMenus({ commit }) {
    try {
      const { data } = await apiGetLeftMenu()
      const cookieMenuId = Cookies.get('menuId')
      const menus = []
      let subMenus = []

      if (data && data !== null && typeof data === 'object') {
        for (const key in data) {
          const menuItem = data[key]
          menus.push(menuItem)

          if (!!cookieMenuId && menuItem.id === cookieMenuId) {
            subMenus = menuItem.children || []
          }
        }
      }

      commit('UPDATE_SIDEBAR', { menus, subMenus })
    } catch (err) {
      throw err
    }
  },

  // 设置sidebar
  setSidebar({ commit }, { payload }) {
    if (payload && payload !== null && typeof payload === 'object') {
      commit('UPDATE_SIDEBAR', payload)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
