<template>
  <div class="product">
    <h1>{{ detail.name }}}</h1>
    <nav>
      <router-link :to="{name: 'product-home'}">商品詳細</router-link>
      <router-link :to="{name: 'product-review'}">レビュー</router-link>
    </nav>
    <router-view />
    <p>このページは ID.{{ id }}の詳細を表示する</p>
  </div>
</template>
<script>
import mapGetters from 'vuex'
export default {
  props: {
    id: String
  },
  computed: mapGetters('product',['detail']),
  watch: {
    id: {
      handler(){
        this.$store.dispatch('product/load', this.id)
      },immediate: true
    }
  },
  beforeDestroy(){
    this.$store.dispatch('product/destroy')
  }
}
</script>
