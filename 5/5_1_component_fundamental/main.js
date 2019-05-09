// Globale登録
Vue.component('my-component',{
  template: '<p>MyComponent</p>'
})

const app = new Vue({
  el: "#app",
  data:{
    message:"timtim"    
  }
})