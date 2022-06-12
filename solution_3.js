function calc(firstNum, secondNum){
    let ops = prompt("Enter expression")
   
   if(firstNum === "" && secondNum === "" && ops === ""){
      return 0;
   }
    if (ops === "+"){
     return `${firstNum} + ${secondNum} = ${Number(firstNum)+Number(secondNum)}`;
    }
    else if (ops === "-"){
     return ` ${firstNum} - ${secondNum} = ${Number(firstNum)-Number(secondNum)}`;
    }
    else if (ops === "*"){
     return `${firstNum} * ${secondNum} = ${Number(firstNum)*Number(secondNum)}`;
    }
    else if (ops === "/"){
     return `${firstNum} / ${secondNum} = ${Number(num1)/Number(secondNum)}`;
    }
    else if (ops === ""){
     return secondNum
    }
   }
   
   let firstNumber = prompt("first number")
   let secondNumber = prompt("second number")
   calculator(firstNumber, secondNumber)
