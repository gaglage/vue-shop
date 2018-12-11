import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage";

import VuexPersistence from 'vuex-persist'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

// LocalStorage
// https://github.com/championswimmer/vuex-persist#readme
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
//   modules: ['cart']
// })


// IdexedDB
//https://github.com/localForage/localForage

const vuexLocal = new VuexPersistence({
  storage: localForage,
  modules: ['cart']
})


export default new Vuex.Store({
  modules: {
    products,
    cart

  },
  plugins: [vuexLocal.plugin]

})