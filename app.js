const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const random = document.getElementById("random")

const buttonStart = document.getElementById("button-start");
const buttonVerifica = document.getElementById("button-verifica");


const numeriRandom=[];


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  



// function start(){

// }

function iniziaGioco(){
    // console.log("vediamo ritardo");
    buttonStart.removeEventListener("click",iniziaGioco);
    random.innerHTML= "";

    
    for(let i=0; i<5; i++){
        const numRandom=getRandomIntInclusive(1,99);
        const divNumeri = document.createElement("div");
        divNumeri.append(numRandom);
        
        random.append(divNumeri);
        // random.classList.add("numeri")
    }

    setTimeout(attesa,5000);

    
    
}


function attesa(){

    buttonVerifica.addEventListener("click",inserisciNumeri);

}

function inserisciNumeri(){
    buttonVerifica.removeEventListener("click",inserisciNumeri);
    buttonStart.addEventListener("click",iniziaGioco);
    const valNum1 = num1.value;
    const valNum2 = num2.value;
    const valNum3 = num3.value;
    const valNum4 = num4.value;
    const valNum5 = num5.value;

    console.log(valNum1,valNum2,valNum3);



}

buttonStart.addEventListener("click",iniziaGioco);