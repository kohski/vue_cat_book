const app = new Vue({
  el:'#app',
  data:{

  },
  methods:{
    handler: function(event){
      console.log(event.key);
    },
    doShift: function(event){
      alert('Shift!')
    },
    doCtrl: function(){
      alert('Ctrl')
    }
  }
})