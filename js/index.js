const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");


let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;

// Agar dot aik dfa print go gaya ha tu dubara ni print hona chhaiya 


numbers.forEach(number=>{
    number.addEventListener('click',(g)=>{
        try {
            if(g.target.innerText==='.' && !haveDot){
                haveDot=true
            }
            else if (g.target.innerText==='.'  && haveDot){
                return;
            }

            dis2Num+=g.target.innerText;
            display2.innerText=dis2Num;

        } catch (error) {
            alert(error.message)
        }
    })
});



operation.forEach(operation=>{
    operation.addEventListener('click',(g)=>{
        try {
            // console.log('working')
            if()
        } catch (error) {
            alert(error.message)
        }
    })
})