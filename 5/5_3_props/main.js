Vue.component('my-component',{
  template:`
  <div>
    <comp-child val="AAA"></comp-child>
    <comp-child val="BBB"></comp-child>
    <comp-child name="CCC"></comp-child>
  </div>
  `,
})

Vue.component('comp-child',{
  template: `
    <div>
      <p>{{ val }}</p>
      <p>{{ name }}</p>
    </div>
  `,
  props:['val','name']
})

const app = new Vue({
  el: '#app',
  data:{
    
  },
})