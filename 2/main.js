const app = new Vue({
  el: "#app",
  data:{
    message: 'Yoko',
    url: "https://google.com",
    count: 0,
    text: "<p>Yoko Miyamoto</p>"
  },
  methods:{
    increment: function(){
      this.count++;
    }
  }
})