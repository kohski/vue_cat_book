const app = new Vue({
  el: '#app',
  data:{
    video1:false,
    video2: false
  },
  directives:{
    focus: {
      inserted: function(el){
        el.focus()
      }
    },
    video(el,binding){
      binding.value? el.play() : el.pause();
    }
  }
})