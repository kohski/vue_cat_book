let bus = new Vue()

Vue.component('my-comp1',{
  template:`
    <div><button v-on:click="handler">child to child</button></div>
  `,
  data: function(){
    return {
      message: '11111'
    }
  },
  methods: {
    handler: function(){
      bus.$emit('bus-event',this.message)
    }
  }
})

Vue.component('my-comp2',{
  template:`
    <p>component2でcompnent1のデータを表示:{{ message }}</p>
  `,
  data: function(){
    return {
      message: '元データ'
    }
  },
  mounted: function(){
    bus.$on('bus-event',this.changeMethod)
  },
  methods: {
    changeMethod: function(message){
      console.log(message);
      this.message = message;
    }
  }
})

const app = new Vue({
  el:'#app',
  data:{
    message: ""
  }
})