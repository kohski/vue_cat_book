const app = new Vue({
  el:'#app',
  data:{
    message: "hello, world!",
    count: 0,
    show: false
  },
  methods:{
    handleClick: function(event){
      console.log(event);
    },
    handler: function(e){
      console.log(e);
    }
  }
})