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




---
## chap4
---
## chap5
---
## chap6
---
## chap7
---
## chap8
---
## chap9