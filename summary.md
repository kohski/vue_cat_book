# ネコ本まとめ
---
## chap1
### vue雛形
  ```js
  let app = new Vue({
    el: '#app',
    data:{
      message:
    },
    computed:{
      computedMessage: function(){
        // 算出プロパティ
      }
    },
    created:function(){
      // ライフサイクルフック
    },
    methods:{
      myMethods: function(){
        // メソッド
      }
    }
  })
  ```
  [雛形image](./1_1_template.png)
### ライフサイクルフック
  - beforeCreated
  - created
    - インスタンス生成、リアクティブデータ初期化後
    - DOMへのアクセスはまだ
  - beforeMount
  - mounted
    - DOM作成直後にHookされる
  - beforeUpdated
  - updated
  - beforeDestroy
  - destroyed
  - errorCaptured  
  [ライフサイクル1](./1_2_lifesycle1.png)  
  [ライフサイクル2](./1_3_lifecycle2.png)  
---
## chap2
### data属性
後から追加できないので必ず空でも後からアクセスできるよう初期値を設定しておく。
### Mustache構文
JS式は評価
JS文はエラーになる
三項演算子など式になるよう工夫
ダメなら算出プロパティ(computed)を検討

### v-bind
#### 基本
属性地値にはデータバインディングできないので、v-bindキーワードを使う
```html
<input type="text" value="{{ message }}">
<!-- 上記はエラー -->

<!-- 下記はOK。v-bindは頻出なので省略記法あり -->
<input type="text" v-bind:value = message>
<input type="text" :value = message>
```
#### 修飾子
- .prop
- .camel
- .sync

下例参照。divタグにtext-contentという属性はないが、
DOMにおいてはtextContentってあるよね。
v-bind先をDOMプロパティにするのが.prop修飾詞
```html
<div v-bind:text-content.prop="message"></div>
```

### thisのスコープ問題
1. 前提
  コールバック関数において、thisはグローバルのwindowを参照する
  アロー関数では、thisは定義時のコンテキストを参照する
2. コールバック関数でthisを束縛する方法
  - 関数外部で変数代入する
    ```js
    increment: function(){
      let vm = this;
      setTimeout(function(){
        //処理
        // ここでのvmは定義時のコンテキストを維持
      },3000)
    }
    ```
  - bind　thisする
    これはbindメソッドのレシーバのthisに引数をbindするという関数なので、
    常にbind(this)となる訳ではないので注意！
    ```js
      increment: function(){
        setTimeout(function(){
          // 処理
        }.bind(this),3000)
      }
    ```
### classとstyleへのbinding
bindされたclass/ style内はJS式で評価されるので、
{}オブジェクト方式でわたす。
htmlは大文字小文字識別しないので、単語の切れ目は'ケバブケース'で表現。
js側はキャメルケースが基本
```html
<p v-bind:class="{ child: isChild, 'is-active': isActive}">Text</p>
<p v-bind:style="{ color: textColor, backgroundColor: bgColor}">Text</p>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'Yellow'
  },
})
```
配列渡し、オブジェクト渡しもOK

### SVGとの相性もよい！
svgはxmlライクなタグにより、ベクター形式で図形を描画する機能
ユースケースは以下
```html
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
    <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink">
  </svg>
  <input type="range" min="0" maz="100" v-model=radius>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    radius: '50'
  }
})
```
### v-if / v-show
- v-if
  => 要素ごと切り替えるので描画コスト高い
     templateで要素をまとめることも可能。
     v-showじゃできない
- v-show
  => display:none; の切り替えるので早い

### v-for
- v-for="item in list"
- v-for="(item,key) in list"
- v-for="(item, key, index) in list"
などの類型あり。
keyについては、以下のような設定の仕方
```html
<li v-for="(item,index) in monsters" v-bind:key="item.id">
  <!-- 中略 -->
</li>
```

- 配列の変更は現状のVueでは感知できない。
  これはJSの制約。
  その場合は$setを使用のこと
```js
  doChange: function(item, index){
    this.$set(this.monsters, index, {id : index+1, name: "メタル" + item.name, hp: item.hp + 100 })
  }
```

### $el と $refs
- データバインディングしていればいいんだけど、DOMの高さや位置などは
仮想DOMではなくDOMへ直接アクセスする必要がある
- $elを使って、**mounted**以降にアクセスするとDOM全体を取れる
- 要素にref属性 / JSで$refsにてキャッチ
```html
<p ref="hello">Hello</p>
<p ref="yoko">Yoko</p>
```
```js
mounted: function(){
  console.log(`$el : ${this.$el}`);
  console.log(`$ref : ${this.$refs}`);
  console.log(`$ref : ${this.$refs.hello}`);
  console.log(`$ref : ${this.$refs.yoko}`);
}
```
### ディレクティブによるコントロール
- v-pre => 描画しない
- v-html => 文字列を最大限htmlとして評価
- v-once => 初回の描画のみ
- v-text => {{}}的に解釈
```html
<div id="app">
  <p v-bind:href="url" v-pre>
    {{ message }}
  </p>
  <p @click="increment()" v-once>{{ count }}</p>
  <p v-text="message"></p>
  <div v-html="text"></div>
  <div v-cloak>
    {{ message }}
  </div>
</div>
```
---
## chap3

### 基本は大丈夫だよね。
v-on:イベント="JS 関数名"
v-on: => @で代用可能

### 画像をふわっと表す実例
```html 
<img src="https://placehold.jp/400x400.png" alt="dummy" v-on:load="show=true" v-bind:class="{hide: !show}">
```
```css
img{
  opacity: 1;
  transition: opacity 1s;
}
img.hide{
  opacity: 0;
}
```

### v-modelじゃなくてv-on/v-bindで双方向バインディングする
v-onだと無条件で更新されるけど、値チェックを入れたい場合などに有効
```html
<div id="app">
  <input v-bind:value="messsage" v-on:input="handleInput">
  {{ message }}
</div>
```
```js
const app = new Vue({
  el: "#app",
  data:{
    messsage:"new vue js"
  },
  methods:{
    handleInput: function(event){
      if(event.target.value.length > 20){
        alert('長すぎ。やりなおし。')
      }else{
        this.message = event.target.value
      }
    }
  }
})
```

### event-modifier
イベント修飾子
- .stop => 自分の階層でイベントストップ
- .prevent => 元の挙動をストップ
- .capture => キャプチャ段階でイベントを引っ掛ける。バブリングじゃなくて
- .self => 自分のときだけやる。モーダルウィンドウにてしよう
- .native
- .once
- .passive

クリックイベントの修飾子
- .left
- .right
- .middle

key修飾子
- .enter
- .esc
- .up
- .down
- .space
=>いずれも.preventなどと併用

システム修飾子
- .shift
- .ctrl
- .meta

修飾子
- lazy
- number
- trim

---
## chap4
### computed基礎
- 算出プロパティ
- 内部的にはObject.definePropertyによって実装
- computedはキャッシュされるので、メモリ効率がいい
### watcher基礎
- けっこういろんな定義方法がある
1. watchプロパティ
```js
const app = new Vue({
  el: "#app",
  data:{
    監視対象:""
  },
  watch:{
    監視対象: function(newValue, oldValue){

    }
  }
})
``` 
2. watchプロパティかつ監視プロパティをつけたいとき
```js
watch:{
  監視対象:{
    handler:function(){
      // 処理
    },
    {
      deep: true,
      immediate: true
    }
  }
}
```
3. インスタンスメソッドでの登録
```js
created: function(){
  this.$watch('value',function(newVal,oldVal){
    // 処理
  })
}
```

### lodashについて
- インストール
  jsdeliverから該当するscriptタグを持ってくる
  npm経由でinstallする場合は、const _ = reuiqre('lodash')
- 使用方法
  ```html
  <div id="app">
    <p>{{ counter }}</p>
    <button @click="handler(); handler2();">counteUp</button>
  </div>
  ```
  ```js
  const app = new Vue({
    el: "#app",
    data:{
      counter: 0
    },
    methods:{
      // _ がlodashのインスタンス
      handler: _.debounce(function(){
        // 最後に押してから1000ms後に反映
        this.counter++
        console.log(this.counter);
      },1000),
      handler2: function(){
        // 押した分だけconsole表示
        console.log('click');
      }
    }
  })
  ```
### setTimeoutも有効みたいだけど以下に注意
- コールバックを使うので無名関数で扱う場合はthisのスコープ注意。コールバック関数をレシーバとしてbind(this)する必要あり
- 多分リクエストの遅延になるだけで間引きにはならない。
大人しくlodashのdebounceした方がいいと思う

### filtersの定義
```js
const app = new Vue({
  el: '#app',
  data:{
    price: 0
  },
  filters:{
    localeNum: function(val){
      return val.toLocaleString()
    }
  }
})
```
HTML側での呼び出しは2種類
```html
<div id="app">
  <input type="text" v-model.number="price">
  {{ price | localeNum }}
  <p v-bind:text-content.prop="price | localeNum"></p>
</div>
```
### custom directiveについて
Vueオブジェクト内で、derectivesプロパティを設定して作成する
いろいろフックが使えるけどこの辺はおって。
```js
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
```
---
## chap5
### props down!!(親子から子へ)
親テンプレート内でvalue属性等を記述
子コンポーネントのpropsプロパティで値を受ける

** 親コンポーネント **
```js
Vue.component('comp-parent',{
  template: `
    <ul>
      <comp-child v-for="item in list" 
        v-bind:key = "item.id"
        v-bind:name = "item.name"
        v-bind:hp = "item.hp"
      ></comp-child>    
    </ul>
  `,
  data: function(){
    return {
      list: [
        { id:1, name:"tim", hp:1000 },
        { id:2, name:"tum", hp:1200 },
        { id:3, name:"tom", hp:1300 },
        { id:4, name:"tem" },
      ]  
    }
  }
})
```
そして、子コンポーネントは以下
propsプロパティで、
- 配列として変数名のみを受け取る
- 連想配列として
- 
```js
Vue.component('comp-child',{
  template:`
    <li>{{ name }} HP.{{ hp }}
      <button @click="doAttack"></button>
    </li>`,
  props: {
    name: String,
    hp: {
      type: Number,
      required: true,
      default: 900
    }
  },
  methods:{
    doAttack: function(){
      this.hp -= 10
    }
  }
})
```
### EventUp(子から親へ)
** 子コンポーネント **
this.$emitを呼び出すフックは任意に作る。
this.$emitは
- 第一引数 => 親コンポーネントのフック名
- 第二引数以降 => それでフックされたイベントに渡す引数
```js
Vue.component('comp-child',{
  template:`
    <li>id:{{ id }} / {{name}} / hp: {{hp}}
      <button @click="handleClick">attack</button>
    </li>
  `,
  props: {
    //省略
  },
  methods:{
    handleClick: function(){
      this.$emit('child-events',this.id)
    }
  }
}
```
** 親コンポーネント **
```js
Vue.component('comp-parent',{
  template:`
  <ul>
    <comp-child
      // ...省略...
      @child-events= "doAttack"
    ></comp-child>
  </ul>
  `,
  data:function(){
    // ...省略
  },
  methods: {
    // ここの引数は$emitの第二引数
    doAttack: function(id){
      let item = this.list.find(elm =>{
        return elm.id === id
      })
      if( item !== undefined && item.hp > 0){
        item.hp -= 10
      }
    }
  }
}) 
```
### event bus(子から子へ)
まずは中継役Vueインスタンスを生成
**中継する側**
```js
const bus = new Vue()
```

送り出す側はbusに登録されている（あとでmountedフックで登録する）メソッドを$emitする
第二引数以降でemitされたメソッドへの引数を渡せる。
**送り出す側**
```js
const MyComp1 = {
  template:`
    <div>
      <input type="text" v-model="message">
      <button @click="handler">送信</button>
    </div>
  `,
  data: function(){
    return {
      message: ''
    }
  },
  methods:{
    handler: function(){
      bus.$emit('bus-event',this.message)
    }
  }
}
```
**もらう側**
mountedのタイミングでbusに'bus-event'イベントを登録。
$onメソッドでいける。第二引数にはそのイベントで呼ばれるメソッドを登録。
```js
const MyComp2 = {
  template:`
    <p>受け取り側:{{ message }}</p>
  `,
  mounted: function(){
    bus.$on('bus-event',this.changeMethod)
  },
  methods:{
    changeMethod: function(message){
      this.message = message
    }
  },
  data: function(){
    return {
      message: 'motomoto'
    }
  }
}
```
### slot
**親側**
親側で子コンポーネントを指定
その内側に書いてある内容が反映される
```js
Vue.component('comp-parent',{
  template:`
  <comp-child>slotに反映する内容</comp-child>
  `
})

```
**子側供**
子側ではslotタグにて待ち受けている。
親側で何も指定がない場合はslotタグの内容が反映される
```js
Vue.component('comp-child',{
  template:`
    <div class="comp-child">
      ここにslot -> <slot>親側にslot関連がない！</slot>
    </div>
  `,
})
```
### 名前付きslot 他Tips
**親側**
slot属性に任意の値を設定。
子側で<slot name="">で呼び出せる
slot設定の親側の過分は問題なし。
まとめたいときは<template>タグをつかう
```js
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
```
**子側**
```js
Vue.component('comp-child',{
  template:`
    <div class="comp-child">
      miyamoto slot -> <slot name="miyamoto"></slot>
    </div>
  `,
})
```

### component間の双方向binding
**親**
親コンポーネントで子コンポーネントを呼び出すときに親側のデータとv-modelすると
子コンポーネント側でprops:valueで受け取ることができる。
```js
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
```
**子コンポーネント**
子コンポーネント側のprops:valueは忘れがちなので注意
```js
Vue.component('my-calender',{
  template:`
    <div class="my-calender">{{ value }}</div>
  `,
  props: {
    value: {
      type: String
    }
  }
})
```
また、propsでvalueが使用済み、もっとふさわしい名前をつけたいなどの
場合は、modelプロパティにて属性変更が可能
```js
Vue.component('my-calender',{
  model:{
    // ここでpropをcurrentに変更
    // $emitするときの親側のイベントをchangeに割り当て
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
    // 省略
    this.$emit('change',initial)
  }
})
```
### .syncプロパティを使う
**親**
v-modelだと単一の値しか渡せないので、v-bind:値.syncで双方向いける。
```js
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
```
**子**

```js
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
```

### いろいろな機能
- functionalコンポーネント　... 軽いらしい
- dynamcコンポーネント ... toggleできるらしい
- 


---
## chap6
---
## chap7
---
## chap8
---
## chap9