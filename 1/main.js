const app = new Vue({
  el: '#app',
  data:{
    message:"Hello, Vue.js",
    women:['Yoko', 'Miyamoto', 'Tomowo'],
    message2: "",
    isShow:true,
    toggleShow: true,
  },
  methods:{
    handleClick: function(e){
      alert(e.target)
    }
  }
})