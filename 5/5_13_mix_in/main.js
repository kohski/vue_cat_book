let mixin = {
  created: function(){
    this.hello()
  },
  methods: {
    hello: function(){
      console.log('hello from mixin');
    }
  }
}

Vue.component('my-component-a',{
  mixins: [mixin],
  template: '<p>MyComponentA</p>'
})

Vue.component('my-component-b',{
  mixins: [mixin],
  template: '<p>MyComponentB</p>'
})


const app = new Vue({
  el: '#app',
  data:{

  }
})