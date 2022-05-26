<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <TheCatalog />
    <TheCart
      v-if="cart.length"
      :cart_data="cart"
    />
  </div> -->
</template>

<script>
// import TheCatalog from '../views/TheCatalog.vue'
// import TheCart from '../views/TheCart.vue'
// import { mapGetters } from 'vuex'

export default {
  name: 'MainWrapper',
  // components: {
  //   TheCatalog,
  //   TheCart
  // },
  // computed: {
  //   ...mapGetters(['cart'])
  // }
}
</script>

<style lang="scss">
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>