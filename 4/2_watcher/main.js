const app = new Vue({
  el:"#app",
  data:{
    message:'',
    oldVal:'',
    newVal:'',
    message2:"",
    oldVal2:'',
    newVal2:'',
  },
  watch: {
    message: {
      handler: function(newValue, oldValue){
        this.oldVal = oldValue;
        this.newVal = newValue;
        this.message = newValue;
      },
      deep: true
    },
    message2: function(newVal, oldVal){
      setTimeout(function(){
        this.newVal2 = newVal
        this.oldVal2 = oldVal  
      }.bind(this),1000)
    }
  }
})