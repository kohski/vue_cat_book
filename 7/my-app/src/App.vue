<template>
  <div id="app">
    <nav>
      <router-link to="/" class="btn">home</router-link>
      <router-link to="/product" class="btn">product</router-link>
      <router-link to="/access" class="btn">access</router-link>
    </nav>
    <p>{{ message }}</p>
    <EditForm />
    <router-view></router-view>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'app',
  components: {
    EditForm
  },
  computed: {
    message(){ return this.$store.getters.message }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.router-link-exact-active{
  background-color: #e25193;
}
</style>
