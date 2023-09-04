const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber ="####-####-####-####";
const maskDate ="##/##";
const maskCVV = "###";

let current = "";
let cardNumber =[];
let dateNumber =[];
let CVVNumber =[];

inputCard.addEventListener("keydown", (e) => {
    if(e.key=='Tab'){
        return; //Realmente no hace nada
    }

    e.preventDefault(); //Prevenimos cualquier comportamiento normal 
    handleInput(maskNumber, e.key, cardNumber); //Función para el procesamiento de los datos
    inputCard.value = cardNumber.join(""); //Convertimos los elementos del arreglo cardNumber en un string el cual se asigna en el input
}); 

inputDate.addEventListener("keydown", (e) => {
    if(e.key=='Tab'){
        return;
    }

    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
});

inputCVV.addEventListener("keydown", (e) => {
    if(e.key=='Tab'){
        return;
    }

    e.preventDefault();
    handleInput(maskCVV, e.key, CVVNumber);
    inputCVV.value = CVVNumber.join("");
});

function handleInput(mask, key, arr){
    //Elementos permitidos para su procesamiento. Los demás serán ignorados
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if(key =='Backspace' && arr.length>0 ){
        arr.pop();
        return;
    }

    if(numbers.includes(key) && arr.length +1 <= mask.length){
        if(mask[arr.length] === "-" || mask[arr.length]=="/"){
            arr.push(mask[arr.length], key);
        } else{
            arr.push(key);
        }
    }
}