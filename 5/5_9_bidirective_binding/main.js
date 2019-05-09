Vue.component('comp-parent',{
  template:`
    <div>
      <input type="date" v-model="mydate">
      <my-calender v-model="mydate"></my-calender>
    </div>
  `,
  data: function(){
    return {
      mydate: String
    }
  }
})

Vue.component('my-calender',{
  model:{
    prop: 'current',
    event: 'change'
  },
  template:`
    <div class="my-calender">{{ current }}</div>
  `,
  props: {
    current: {
      type: String
    }
  },
  created: function(){
    date = new Date
    initial = ''
    initial += date.getFullYear()+'-'
    initial += ("0"+(date.getMonth() + 1)).slice(-2) + '-'
    initial += ("0"+date.getDate()).slice(-2)
    this.$emit('change',initial)
  }
})

const app = new Vue({
  el: '#app',
})