const app = new Vue({
  el: "#app",
  data:{
    message: "",
    message2:"",
    val: true,
    vals:[],
    val2:"",
    val3:"",
    vals2:[],
    preview:"",
    val4:50,
    color:""
  },
  methods:{
    doChange: function(e){
      this.message2 = e.target.value
    },
    handleEvent: function(e){
      let file = event.target.files[0]
      console.log(file.type);
      
      if(file && file.type.match(/^image\/(png|jpeg)$/)){
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})

// vue.jsを使わない場合の記載
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('analog_ip').addEventListener('keyup',function(e){
    document.getElementById('analog_op').textContent = e.target.value
  })
})