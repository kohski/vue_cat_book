const app = new Vue({
  el: "#app",
  data:{
    messsage:"new vue js"
  },
  methods:{
    handleInput: function(event){
      if(event.target.value.length > 20){
        alert('長すぎ。やりなおし。')
      }else{
        this.message = event.target.value
      }
    }
  }
})