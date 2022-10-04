const body = document.body; const square = body.querySelector(".square"); 
const link = square.querySelector(".btn"); 
let n = 0;
square.style.backgroundColor = getColor(50, 0, 100)//50% прозрачности 

function changeBg(el){
    el.style.backgroundColor = getColor(50, 256, 0, 256)
}

// square.onclick = function(){

// }

square.addEventListener('click',function(e){
    n++;
    e.stopPropagation()
    let span = document.createElement('span');
    span.innerText = `Clicker ${n} times`
    // this.innerHTML = link.outerHTML + `Clicked ${n} times`;
    this.innerHTML = '';
    this.append(link, span)
    // console.log(link.parentElement)
})

square.addEventListener('click', e =>{
    // console.log(e);
    changeBg(e.target)
})

link.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault() //отменить действия , заданые для тега по умолчанию
    e.target.style.border = `2px solid ${getColor()}`
})

body.addEventListener('click',function(){
    this.style.backgroundColor = getColor(30, 0, 256, 0)
})