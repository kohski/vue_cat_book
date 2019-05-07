const app = new Vue({
  el:"#app",
  data:{
    scrollY: 0,
    timer: null
  },
  created: function(){
    // windowオブジェクトに付随するscrollイベントは
    // Vue.jsだとキャッチしきれない。ということで、
    // VanillaJSでaddEventListenerする
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy:function(){
    // #app外のイベントは自動で消してくれないのでメモリリーク等
    // ユーザーに迷惑をかける可能性がある。
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll: function(){
      if(this.timer === null){
        this.timer = setTimeout(function(){
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this),200)
      }
    }
  }
})