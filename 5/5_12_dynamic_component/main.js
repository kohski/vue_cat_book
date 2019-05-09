// Vue.component('comp-parent',{
//   template:`
//     <button v-on:click="current^=1">toggle</button>
//     <div v-bind:is="component"></div>
//   `
// })

Vue.component('my-component-a',{
  template: '<div class="my-component-a">component A</div>'
})

Vue.component('my-component-b',{
  template: '<div class="my-component-b">component B</div>'
})

const app = new Vue({
  el: '#app',
  data:{
    componentTypes: ['my-component-a','my-component-b'],
    current: 0
  },
  computed: {
    component: function(){
      return this.componentTypes[this.current]
    }
  }
})