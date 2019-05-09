// const CompParent = {
//   template:`
//     <comp-child>スロットコンテンツ</comp-child>
//   `
// }

// const CompChild = {
//   template:`
//     <div class="comp-child">
//       <slot></slot>
//     </div>
//   `,
// }

Vue.component('comp-parent',{
  template:`
  <comp-child>
    <template slot="miyamoto">
      <ul>
        <li v-for="item in ['mi','ya','mo','to']">{{ item }}</li>
      </ul>
    </template>
    <p slot="yoko">yoko</p>
  </comp-child>
  `
})

Vue.component('comp-child',{
  template:`
    <div class="comp-child">
      miyamoto slot -> <slot name="miyamoto"></slot>
    </div>
  `,
})


const app = new Vue({
  el: '#app',
})