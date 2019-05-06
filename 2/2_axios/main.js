const app = new Vue({
  el: '#app',
  data:{
    list:[]
  },
  created: function(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response,reject)=>{
      console.log(response.data)
      this.list = response.data
    })
    .catch(e => {
      console.log(e);
    })
  }
})