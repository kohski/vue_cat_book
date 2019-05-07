const app = new Vue({
  el:"#app",
  data:{
    width: 800,
    height: 600,
    //=================
    width2: 800,
    //=================
    budget: 0,
    limit: 2,
    list:[
      {id:1, name: 'Gum', price: 100 },
      {id:2, name: 'Gummy', price: 200 },
      {id:3, name: 'Chocolate', price: 300 },
      {id:4, name: 'snack', price: 400 },
      {id:5, name: 'potato chips', price: 500 },
    ],
    order: false
  },
  computed:{
    // 内部的にはObject.definePropertyで実装
    halfWidth: function(){
      return this.width / 2
    },
    halfHeight: function(){
      return this.height / 2
    },
    halfPoint: function(){
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    //=================================
    // object = {
    //   firstName: "Tim",
    //   get: function(){
    //     return this.firstName 
    //   },
    //   set: function(val){
    //     this.firstName = val
    //   }
    // }
    // のプロパティがないversionと考える。
    halfWidth2: {
      get: function(){return this.width2 /2 },
      set: function(val){this.width2 =  val * 2}
    },
    //==================================
    // computedはキャッシュされる。
    computedData: function(){
      return Math.random();
    },
    //==================================
    matched: function(){
      return this.list.filter(function(el){
        return el.price <= this.budget
      },this)
    },
    sorted: function(){
      return _.orderBy(this.matched, 'pirce', this.order ? 'desc' : 'asc')
    },
    limited: function(){
      return this.sorted.slice(0, this.limit)
    }
  },
  methods: {
    // methodsはキャッシュされない。
    methodsData: function(){
      return Math.random();
    }
  }
})