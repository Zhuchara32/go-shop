<template>
  <div class="cart-item">
    <img :src="require('../assets/img/' + cart_item_data.image)" alt="img">
    <div class="cart">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
          {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart')
    },
    decrementItem () {
      this.$emit('decrementItem')
    },
    incrementItem () {
      this.$emit('incrementItem')
    }
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0;
    padding: 16px;
    margin-bottom: 16px;

    .quantity__btn {
      cursor: pointer;
    }
  }
</style>