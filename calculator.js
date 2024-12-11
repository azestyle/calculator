let numberBtn = document.querySelectorAll(".number-btn");
let input = document.querySelector(".input");
let totalBtn = document.querySelector(".count-btn");
let remoweAll = document.querySelector(".delete-btn");
let remowe = document.querySelector(".delete-one-btn");
let operatorBtn=document.querySelectorAll('.operator-btn');
let pracent=document.querySelector('.interest-btn');
input.innerText = '0';



numberBtn.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    let startLength=input.innerText
    let count = el.target.value;
    if(startLength.length === 1 &&startLength[0]==='0' && count==='0'){
        input.innerText = '0';
    }else if(startLength.length===1 && startLength[0]==='0'&& count!=='0' && count !== '.'){
       input.innerText = `${count}`;  
    }else if (startLength.length === 1 && startLength[0] === '0' && count === '.') {
        input.innerText += `${count}`;  
    }else{
        input.innerText += `${count}`;  
    }  
});
});       
    
   
  


operatorBtn.forEach((btn)=>{
    btn.addEventListener('click',(el)=>{
        let type=el.target.value
        let regex= /^[+\-*/]$/;
        let check=input.innerText
     if(!regex.test(check[check.length-1])){
        input.innerText+=`${type}`
     }
        
    })
})

totalBtn.addEventListener("click", () => {
  let data = input.innerText;
  calculate(data);
});

function calculate(element) {
  let number = element.match(/\d+(\.\d+)?/g).map(Number);
  console.log(number);
  
  let operator = element.match(/[+\-*/]/g);
  let total = number[0];
  for (let b of operator) {
    let index = 0;
    if (b === "+") {
      total = total + number[index + 2];
    } else if (b === "-") {
      total = total - number[index + 2];
    } else if (b === "*") {
      total = total * number[index + 2];
    } else if (b === "/") {
      total = total / number[index + 2];
    }
  }
  input.innerText = total;
}

remoweAll.addEventListener("click", () => {
  input.innerText = 0;
});

remowe.addEventListener("click", () => {
  let strFile = input.innerText;
  let newStr = "";

  for (let a = 0; a < strFile.length - 1; a++) {
    newStr += strFile[a];
  }

  if (!newStr) {
    input.innerText = 0;
  } else {
    input.innerText = newStr;
  }
});


pracent.addEventListener('click',()=>{
  let information=input.innerText
  let regex= /^[+\-*/]$/;
  let checkNumber=''
  let newNumber=''
  let testnm=''
  for(let a=information.length-1;a>=0;a--){
        if (regex.test(information[a])) {
        testnm=information.slice(0,a+1)
          break;
          
        }else{
          checkNumber+=information[a]
        }
        
  } 
  for(let b=checkNumber.length-1;b>=0;b--){
     newNumber+=checkNumber[b]
  }
  
  calculateInterest(newNumber,testnm)
})


function calculateInterest(element,string){
  if(element){
     let num=Number(element)
     num=num/100
     string+=num
     input.innerText=string
  }
 
  
  
}
// for (let b in operator){
//     if(operator[b]==='+'){
//         b++;
//        total=total+number[b]

//     }else if(operator[b]==='-'){
//         b++;
//         total=total-number[b]

//     }else if(operator[b]==='*'){
//         b++;
//         total=total*number[b]

//     }else if(operator[b]==='/'){
//         b++;
//         total=total/number[b]
//     }
// }

// let strins='salam'
// let d=strins[strins.length-1]
// console.log(d);
