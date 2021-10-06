function calculator(numberOne, operator, numberTwo){ 

    switch(operator){
        
        case "+" : resultado = numberOne + numberTwo;
        break;

        case "-" : resultado = numberOne - numberTwo;
        break;

        case "*" : resultado = numberOne * numberTwo;
        break;
        
        case "/" : resultado = numberOne / numberTwo;
        break;
        
}
    
    return resultado
    
}

console.log (calculator(20000, "*" ,1500))