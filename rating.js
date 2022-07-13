
let text = document.getElementById("input");
 var rating = document.getElementById("thanks");
var container = document.getElementById("container");
const submit = document.getElementById("submit");
  function input(num){
  text.value ='you selected ' + num + ' out of 5'
 }
 num = document.querySelectorAll('#click').value

 submit.addEventListener('click',  ()=>{
container.style.display = 'none'
rating.style.display = 'grid'
    
 })
 