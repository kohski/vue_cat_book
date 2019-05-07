const app = new Vue({
  el: "#app",
  data:{
    message: "modifier"
  },
  methods:{
    handler: function(event){
      console.log(event);
    },
    outer: function(event){
      console.log(`outer: ${event}`);
    },
    inner: function(event){
      console.log(`inner:${event}`);
    },
    innerinner: function(event){
      console.log(`inner * inner /${event}`);
    }
  }
})