const bus = new Vue({
  data:{
    count: 0
  }
})

Vue.component('conponent-b',{
  template: '<p>bus: {{ bus.count }}</p>',
  computed:{
    bus: function(){
      return bus.$data
    }
  },
  created: function(){
    bus.$on('bus-event',function(){
      this.count++
    })
  }
})


const app = new Vue({
  el: '#app',
  data:{
    message: "timtim"
  }
})