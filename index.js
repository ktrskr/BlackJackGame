
let cards=[]
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let looseEl=document.getElementById("loose-el");
let winEl=document.getElementById("win-el");
let newGameEl=document.getElementById("newGame-el")
let player={
    name:"shiva kumar",
    chips : '$ 200'
}

let message="";

function startGame(){
    isAlive=true
    let firstCard=getRandomCard();
    let secoundCard=getRandomCard();
    cards=[firstCard,secoundCard]
    sum=firstCard+secoundCard
    renderGame();
}

function renderGame(){
    cardsEl.textContent="Cards : " ;
    for (i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] +" , "
    }
    sumEl.textContent="SUM : "+sum
    if ( sum<=20){
        message="do you want to Draw a new card ?"

    }
    else if  (sum===21) {
        message="wohoo , you've got a blackJack !";
        hasBlackJack=true;
        winEl.textContent=player.name + " : "+player.chips+" won "


    }
    else {
        message="you're out of the game!";
        isAlive=false;
        looseEl.textContent='you loose the Game !';

    }
    messageEl.textContent=message;

}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card=getRandomCard();
        sum+=card;
        cards.push(card)
        renderGame();
    

    }
   
    


}

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1;
    if (randomCard === 1) {
        return 11;
    }
    else if (randomCard>10 ) {
        return 10;
    }
    else{
        return randomCard

    }

}
function newGame(){
    location.reload(true);

}