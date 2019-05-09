MyComponent = {
  // 必ず単一の要素になるように最後はdivタグで囲む。
  // 複数要素を許したら収集つかなくなりそう...だしね。
  template: `<div>
      <p>{{ person }}</p>
      <p>{{ hello() }}</p>
    </div>`,
  // dataは必ずfunctionで返す。
  data:function(){
    return {
      person: 'timtim'
    }   
  },
  methods: {
    hello: function(){
      return `hello,${this.person}`
    }
  }
}

const app = new Vue({
  el:'#app',
  components:{
    'my-component': MyComponent
  }
})