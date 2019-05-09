Vue.component('comp-parent',{
  template:`
    <comp-child v-on:childs-event="parentsMethod"></comp-child>
  `,
  methods:{
    parentsMethod: function(){
      alert('shthsox')
    }
  }
})

Vue.component('comp-child',{
  template:`
    <button v-on:click="handleClick">fire</button>
  `,
  methods:{
    handleClick: function(){
      this.$emit('childs-event')
    }
  }

})


const app = new Vue({
  el:'#app',
  data:{
    message:"tim"
  }
})