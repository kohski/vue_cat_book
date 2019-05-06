const monsters=[
  {id:1,name:'スライム',hp:100},
  {id:2,name:'キメラ',hp:200},
  {id:3,name:'ダンビラムーチョ',hp:500},
  {id:10,name:'ルブルムドラゴン',hp:1000}
];

const s_id = 10

ans = monsters.findIndex((elm)=>{
  return elm.id === s_id
})
ans