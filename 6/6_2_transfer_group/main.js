const app = new Vue({
  el:'#app',
  data:{
    list :[
      { id: 1, name:'Miyamoto' },
      { id: 2, name:'Yoko' },
      { id: 3, name:'Nagamine' },
      { id: 4, name:'Yuki' }
    ]
  },
  methods:{
    listOrder: function(){
      this.list.reverse();
    }
  }
})