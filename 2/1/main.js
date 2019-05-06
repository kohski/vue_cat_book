const app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue.js!',
    scroll: 0,
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'Yellow',
    radius: '50',
    condition: 'A',
    perAttack: 10,
    monsters_before:[
      {id:1,name:'スライム',hp:100},
      {id:2,name:'キメラ',hp:200},
      {id:3,name:'ダンビラムーチョ',hp:500}
    ],
    monsters:[
      {id:1,name:'スライム',hp:100},
      {id:2,name:'キメラ',hp:200},
      {id:3,name:'ダンビラムーチョ',hp:500}
    ],
    name:'monsterA'
  },
  mounted:function(){
    this.scroll = 100
  },
  methods: {
    countUp: function(){
      this.count++
    },
    attack: function(id){
      tgt = this.monsters_before.find(elm => elm.id === id);
      tgt.hp -= this.perAttack
      if(tgt.hp <= 0){
        window.alert(`${tgt.name}を倒した！`)
        idx = this.monsters_before.findIndex(elm => elm.id === tgt.id );
        this.monsters_before.splice(idx,1);
        if(this.monsters_before.length > 0){
          window.alert(`レベルアップ`);
          this.perAttack += 20;  
        }else{
          console.log('終了！！');
        }
      }
    },
    doAdd: function(){
      let max = this.monsters.reduce((a,b)=>{
        return a > b.id? a : b.id
      },0)
      this.monsters.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index){
      this.monsters.splice(index,1)
    },
    doChange: function(item, index){
      this.$set(this.monsters, index, {id : index+1, name: "メタル" + item.name, hp: item.hp + 100 })
    }
  },
})