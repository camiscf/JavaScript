let altura
let peso

function calcular_icm(peso, altura) {
    icm = peso / (altura*altura)    
    if(icm < 18.5){
        console.log("Abaixo do peso");
    }
    else if(icm > 18.5 && icm < 24.9 ){
        console.log("Normal");
    }
    else if(icm > 25 && icm < 29.9 ){
        console.log("Sobrepeso");
    }
    else if(icm > 30 && icm < 34.9 ){
        console.log("Obesidade Grau I");
    }
    else if(icm > 35 && icm < 39.9 ){
        console.log("Obesidade Grau II");
    }
    else if(icm >= 40 ){
        console.log("Obesidade Grau III");
    }
}


