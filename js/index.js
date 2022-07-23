const  display1=document.querySelector('.display-1');
const  display2=document.querySelector('.display-2');
const  TemResult=document.querySelector('.temp-result');
const Allnumber=documnet.querySelectorAll('.numbers');
const operations=document.querySelectorAll('.operations')
const equal=document.querySelector('.equal');
const clear=document.querySelector('.all-clear');
const lastEntityClear=document.querySelector('.last-entity-clear');



let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;

Allnumber.array.forEach(number => {
    number.addEventListner('click',(g)=>{
        try {
            
        } catch (error) {
            alert(error.message)
        }

    })
});