import { createStore, Store, useStore as useVuexStore } from "vuex";

import login from './login/login'
import system from './main/system/system'

import {IStoreType} from './types'

const store = createStore({
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  },
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store