Vue.component('my-circle', {
  template: '<circle cs="80" cy="75" r="50" v-bind:fill="fill"/>',
  props:{
    fill: String
  }
})

const app = new Vue({
  el: '#app',
  data:{
    toggle: false
  },
  computed: {
    fill: function(){
      return this.toggle? 'lightpink' : 'skyblue'
    }
  }
})