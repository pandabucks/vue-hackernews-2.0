import Vue from 'vue'

// mutationはcommit経由で呼ばれて、stateのデータを編集する。
export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  // stateのlistsにデータを格納するmutationなのである。
  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  // ここでSET_ITEMSをしているから、mutationsでデータの更新をしている
  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
