import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    products(state) {
      return state.products
    },
    cart(state) {
      return state.cart
    }
  },
  mutations: {
    getProductsFromApi(state, products) {
      state.products = products
      state.products.forEach(item => item.quantity = 1)
    },
    ADD_toCart(state, prod) {
      if (state.cart.length) {
        let isProductEx = false
        state.cart.map((item) => {
          if (item.article === prod.article) {
            isProductEx = true
            item.quantity++
          }
        })
        if (!isProductEx) {
          state.cart.push(prod)
        }
      } else {
        state.cart.push(prod)
      }
    },
    DELETEFromCart(state, idx) {
      state.cart.splice(idx, 1)
    },
    decrementItem(state, idx) {
      if (state.cart[idx].quantity > 1) {
        state.cart[idx].quantity--
      }
    },
    incrementItem(state, idx) {
      state.cart[idx].quantity++
    }
  },
  actions: {
    getProductsFromApi({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then(products => {
          commit('getProductsFromApi', products.data)
          return products
        })
        .catch(err => {
          console.log(err)
          return err
        })
    },
    ADD_toCart({ commit }, prod) {
      commit('ADD_toCart', prod)
    },
    addProp({ commit }) {
      commit('addProp')
    },
    DELETEFromCart({ commit }, index) {
      commit('DELETEFromCart', index)
    },
    decrementItem({ commit }, idx) {
      commit('decrementItem', idx)
    },
    incrementItem({ commit }, idx) {
      commit('incrementItem', idx)
    }
  }
})