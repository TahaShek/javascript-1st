const numbers=document.querySelectorAll('.btn');
const Result=document.querySelector('input');
const operations=document.querySelectorAll('.operation-btn');
const AC=document.querySelector('.Ac');
const C=document.querySelector('.Clear');
const equalBtn=document.querySelector('.equal');


let inputValue='';
// let haveDot=false;

numbers.forEach(btn => {
    btn.addEventListener('click',function(){
        // console.log(btn)
        // if(Result.innerText==='.' && !haveDot){
        //     haveDot=true;
        // }
        // else if ( Result.innerText ==='.'&& have){
        //     return;
           
        // }
   inputValue += this.innerText;
   Result.value=inputValue; 
    })
});


// eventListner for operators
operations.forEach(operations => {
  operations.addEventListener('click', function () {
    // console.log(this.textContent);
    
    inputValue +=this.innerText ;
    Result.value = inputValue;
  });
});




AC.addEventListener('click', function () {
Result.value = '0';
    inputValue = '';
  });



 C.addEventListener('click',function(){
    try {
        if(Result.value.length===1){
            Result.value='0';
            inputValue=''
        }
        else{inputValue =Result.value.slice(0,-1)
            Result.value=inputValue;  
        }

    } catch (error) {
        alert(error.message);
    }
 });

 equalBtn.addEventListener('click',function(){
Result.value=eval(inputValue);
inputValue='';
 } );





