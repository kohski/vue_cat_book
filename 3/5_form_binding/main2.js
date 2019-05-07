
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('analog_ip').addEventListener('keyup',function(e){
    document.getElementById('analog_op').textContent = e.target.value
  })
})