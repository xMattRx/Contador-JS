function decrement(){
  let element = document.getElementById('currentNumber')
 let value = Number.parseInt(element.innerHTML)

 if(value <= 0){
   value = value
 }else{
   value -= 1
 }
 value = value.toString();
 element.innerHTML = value
}

function increment(){
let element = document.getElementById('currentNumber')
let value = Number.parseInt(element.innerHTML)
value += 1;
value = value.toString();
element.innerHTML = value
}