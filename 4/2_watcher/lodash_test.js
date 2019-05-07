const app = new Vue({
  el: "#app",
  data:{
    counter: 0
  },
  methods:{
    handler: _.debounce(function(){
      this.counter++
      console.log(this.counter);
    },1000),
    handler2: function(){
      console.log('click');
    }
  }
})