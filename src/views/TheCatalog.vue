<template>
  <div class="the-catalog">
    <router-link :to="{ name: 'TheCart' }">
      <div class="the-catalog__link">Cart: {{ cart.length }}</div>
    </router-link>
    <div class="the-catalog__list">
      <CatalogItem
      v-for="prod in products"
      :key="prod.article"
      :product_data="prod"
      @addToCart="addToCart"
    />
    </div>
  </div>
</template>

<script>
import CatalogItem from '../components/CatalogItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheCatalog',
  components: {
    CatalogItem
  },
  mounted () {
    this.getProductsFromApi()
  },
  computed: {
    ...mapGetters(['products', 'cart'])
  },
  methods: {
    ...mapActions([
      'getProductsFromApi',
      'ADD_toCart'
    ]),
    addToCart (arg) {
      this.ADD_toCart(arg)
    }
  }
}
</script>

<style lang="scss">
  .the-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 16px;
      border: solid 1px grey;
    }
  }
</style>