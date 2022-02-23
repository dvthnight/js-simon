const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const random = document.getElementById("random");
const contInserisci = document.querySelector(".container-inserisci");
contInserisci.classList.add("non_mostrare");
const titolo2 = document.querySelector(".titolo2");
titolo2.classList.add("non_mostrare");

const timer = document.getElementById("timer");

const buttonStart = document.getElementById("button-start");
const buttonVerifica = document.getElementById("button-verifica");


const numeriRandom=[];
const divNumeriRandom=[];

let time = 5;

timer.innerHTML = time;

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
        numeriRandom[i]=numRandom;

        if(!numeriRandom.includes(numRandom)){
        divNumeri.append(numRandom);

        } else{
            i--;
        }       
        random.append(divNumeri);
        // random.classList.add("numeri")

        divNumeriRandom[i]=divNumeri;
    }

    let clock = setInterval(()=>{
        time--;
        timer.innerHTML=time;

        if(time == 0){
            clearInterval(clock);
        }
    },1000);

    setTimeout(attesa,5000);

    
    
}

function attesa(){
    contInserisci.classList.remove("non_mostrare");
    titolo2.classList.remove("non_mostrare");
    random.classList.add("non_mostrare");
    timer.classList.add("non_mostrare");
    for(let i=0; i<5; i++){
        divNumeriRandom[i].classList.add("red");
    }
    abilitazioneVerifica();


}

function abilitazioneVerifica(){

    buttonVerifica.addEventListener("click",inserisciNumeri);

}

function inserisciNumeri(){
    buttonVerifica.removeEventListener("click",inserisciNumeri);
    buttonStart.addEventListener("click",iniziaGioco);
    random.classList.remove("non_mostrare");

    const valNum1 = parseInt(num1.value);
    const valNum2 = parseInt(num2.value);
    const valNum3 = parseInt(num3.value);
    const valNum4 = parseInt(num4.value);
    const valNum5 = parseInt(num5.value);

    console.log(valNum1,valNum2,valNum3,valNum4,valNum5);
    console.log(numeriRandom[2],typeof(numeriRandom[2]));
    console.log(valNum2,typeof(valNum2));


    if(
        numeriRandom.includes(valNum1)&&
        numeriRandom.includes(valNum2)&&
        numeriRandom.includes(valNum3)&&
        numeriRandom.includes(valNum4)&&
        numeriRandom.includes(valNum5)
    ){
        alert("hai vinto la partita bravo hai tants memoria")
    }

    numeriUtente=[valNum1,valNum2,valNum3,valNum4,valNum5];

    let k=0;

    for(let i=0; i<5; i++){
        if(numeriRandom.includes(numeriUtente[i])){
            for(let j=0; j<5; j++){
                if(numeriRandom[j]==numeriUtente[i]){
                    divNumeriRandom[j].classList.remove("red");
                    divNumeriRandom[j].classList.add("green");
                    k++;
                }
            }
        }
    }


}

buttonStart.addEventListener("click",iniziaGioco);