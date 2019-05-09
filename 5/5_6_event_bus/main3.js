const bus = new Vue()

const MyComp1 = {
  template:`
    <div>
      <input type="text" v-model="message">
      <button @click="handler">送信</button>
    </div>
  `,
  data: function(){
    return {
      message: ''
    }
  },
  methods:{
    handler: function(){
      bus.$emit('bus-event',this.message)
    }
  }
}

const MyComp2 = {
  template:`
    <p>受け取り側:{{ message }}</p>
  `,
  mounted: function(){
    bus.$on('bus-event',this.changeMethod)
  },
  methods:{
    changeMethod: function(message){
      this.message = message
    }
  },
  data: function(){
    return {
      message: 'motomoto'
    }
  }
}






const app = new Vue({
  el: '#app',
  components:{
    'my-component1': MyComp1,
    'my-component2': MyComp2
  }
})