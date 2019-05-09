Vue.component('comp-parent',{
  template: `
    <ul>
      <comp-child v-for="item in list" 
        v-bind:key = "item.id"
        v-bind:name = "item.name"
        v-bind:hp = "item.hp"
      ></comp-child>    
    </ul>
  `,
  data: function(){
    return {
      list: [
        { id:1, name:"tim", hp:1000 },
        { id:2, name:"tum", hp:1200 },
        { id:3, name:"tom", hp:1300 },
        { id:4, name:"tem" },
      ]  
    }
  }
})

Vue.component('comp-child',{
  template:`
    <li>{{ name }} HP.{{ hp }}
      <button @click="doAttack"></button>
    </li>`,
  props: {
    name: String,
    hp: {
      type: Number,
      required: true,
      default: 900
    }
  },
  methods:{
    doAttack: function(){
      this.hp -= 10
    }
  }
})

new Vue({
  el: '#app',
  data: {
  }
})