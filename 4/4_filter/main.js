const app = new Vue({
  el: '#app',
  data:{
    price: 0,
    num:0
  },
  filters:{
    localeNum: function(val){
      return val.toLocaleString()
    },
    dividedNum: function(val, devider, round='down'){
      if(round === 'up'){
        return Math.ceil(val / devider);
      }else if(round === 'down'){
        return Math.floor(val / devider);
      }else{
        return val / devider;
      }
    }
  }
})