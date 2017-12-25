import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// index.jsには、データだけ管理している。
// アプリケーションに全体に関わるデータは、store/index.jsにもたせている。
// clickでhideするとかを司るデータは、単一コンポーネント（下位のコンポーネント)に持たせれば良さそう
export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      // itemsはコメントかな？とはいえ、ここはハッシュで中身が空。
      // ということは、定義だけしていて。
      // てか、そもそもいろんなページでitemsを使うはずなのに、変数は一個で良いから、各Componentで変数の中身を随時書き換えているのだと想定される。
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}
