Vue.component('comp-parent',{
  template:`
    <comp-child>
      <p slot-scope="ttt">
        slotUp -> {{ ttt.text }}
      </p>
    </comp-child>
  `
})

Vue.component('comp-child', {
  template:`
    <div class="comp-child">
      <slot text="Hello"></slot>
    </div>
  `,
})


const app = new Vue({
  el: '#app',
})