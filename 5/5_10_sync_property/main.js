Vue.component('comp-parent',{
  template:`
  <comp-child 
    v-bind:name.sync="name"
    v-bind:hp.sync="hp"
  ></comp-child>
  `,
  data: function(){
    return {
      name: 'slime',
      hp: 100
    }
  }
})
Vue.component('comp-child', {
  template:`
    <div class="my-component">
      <p>名前.{{ name }} / HP{{ hp }}</p>
      <p><input v-model="localName"></p>
      <p><input size=5 v-model.number="localHp"></p>
    </div>
  `,
  props: {
    name: String,
    hp: Number
  },
  computed: {
    localName: {
      get: function(){
        return this.name
      },
      set: function(val){
        this.$emit('update:name',val)
      }
    },
    localHp: {
      get: function(){
        return this.hp
      },
      set: function(val){
        this.$emit('update:hp',val)
      }
    }
  }
})
const app = new Vue({
  el:'#app',
})