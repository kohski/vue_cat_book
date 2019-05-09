Vue.component('comp-parent',{
  template:`
  <ul>
    <comp-child v-for="item in list" 
      v-bind:key = item.id
      v-bind:id = item.id
      v-bind:name = item.name
      v-bind:hp = item.hp
      @child-events= "doAttack"
    ></comp-child>
  </ul>
  `,
  data:function(){
    return {
      list: [
        {id: 1, name: 'キメラ', hp: 100},
        {id: 2, name: 'スライム', hp: 200},
        {id: 3, name: 'ダンビラムーチョ', hp: 150},
      ]
    }
  },
  methods: {
    doAttack: function(id){
      let item = this.list.find(elm =>{
        return elm.id === id
      })
      if( item !== undefined && item.hp > 0){
        item.hp -= 10
      }
    }
  }
}) 

Vue.component('comp-child',{
  template:`
    <li>id:{{ id }} / {{name}} / hp: {{hp}}
      <button @click="handleClick">attack</button>
    </li>
  `,
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    hp:{
      type: Number,
      required: true,
      default: 100
    }
  },methods:{
    handleClick: function(){
      // $emitメソッドは第一引数に親コンポーネントで発火させるイベント名
      // 第二引数は以降は発火した親コンポーネントの関数の引数を渡す
      this.$emit('child-events',this.id)
    }
  }

})


const app = new Vue({
  el: '#app',
  data:{

  }
})