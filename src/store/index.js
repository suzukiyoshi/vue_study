import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるよう定義する
const state = {
  auth: {
    token: null,
    userId: null
  },
  board: { // 状態`Board`
    lists: []
  }
}

export default new Vuex.Store({
  state, // 定義したstateを`state`オプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
