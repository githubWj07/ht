import { createStore } from "vuex";

import login from './login/login'


const store = createStore({
  mutations: {},
  actions: {},
  modules: {
    login
  },
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store