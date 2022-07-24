const numbers=document.querySelectorAll('.btn');
const Result=document.querySelector('input');
const operations=document.querySelectorAll('.operation-btn');
const AC=document.querySelector('.AC');
const C=document.querySelector('.C');
const equalBtn=document.querySelector('.equal');


let inputValue='';

numbers.forEach(btn => {
    btn.addEventListener('click',function(){
        // console.log(btn)
   inputValue += this.innerText;
   Result.value=inputValue; 
    })
});


// eventListner for operators
operations.forEach(operators => {
    operators.addEventListener('click',function(){
        console.log('workin');
    })
});
