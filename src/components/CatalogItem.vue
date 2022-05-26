<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src="require('../assets/img/' + product_data.image)" alt="img">
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }}</p>
    <button class="catalog-item__btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>