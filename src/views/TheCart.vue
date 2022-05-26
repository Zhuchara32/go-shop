<template>
  <div class="the-cart">
    <router-link :to="{ name: 'TheCatalog' }">
      <div class="the-catalog__link">Back to Catalog</div>
    </router-link>
    <CartItem
      v-for="(item, index) in cart"
      :key="item.article"
      :cart_item_data="item"
      :idx="index"
      @deleteFromCart="deleteFromCart(index)"
      @incrementItem="incrementItem(index)"
      @decrementItem="decrementItem(index)"
    />
    <div class="the-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheCart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart']),
    cartTotalCost() {
      let result = []
      if (this.cart.length) {
        for (let item of this.cart) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => sum + el)
        return result
      } else {
        return 0
      }
      
    }
  },
  methods: {
    ...mapActions(['DELETEFromCart', 'decrementItem', 'incrementItem']),
    deleteFromCart (index) {
      this.DELETEFromCart(index)
    }
  }
}
</script>

<style lang="scss">
  .the-cart {
    margin-bottom: 100px;

    &__total {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      font-size: 20px;
      background: green;
      color: #ffffff;
    }
    .total__name {
      margin-right: 16px;
    }
  }
</style>