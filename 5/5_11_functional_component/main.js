Vue.component('functional-component',{
  // ライフサイクルを持たなかったり早いらしい。
  // コンパイルの問題があるなどけっこうハードル高げ。
  functional:true,
  render: function(createElement, context){
    return createElemtn('div',contenxt.props.message)
  },
  props:{
    message: String
  }
})


const app = new Vue({

})