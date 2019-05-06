const app = new Vue({
  el:"#app",
  data:{
    message: "Hello Vue.js"
  },
  mounted: function(){
    console.log(`$el : ${this.$el}`);
    console.log(`$ref : ${this.$refs}`);
    console.log(`$ref : ${this.$refs.hello}`);
    console.log(`$ref : ${this.$refs.yoko}`);
  }
})