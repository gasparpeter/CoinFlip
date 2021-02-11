const coin = document.getElementById("coin");
const text = document.getElementById("text");



coin.addEventListener("click", fejVagyIras);

function fejVagyIras() {
  
    

    // coin.classList.add("coinflip");

    // for(let i=0; i < 5; i++){
    //     addScore = myScore;
    //     addScore++;
    // }

    if (Math.random() < 0.5){
        console.log("fej");
        coin.classList.remove("iras");
        coin.classList.remove("fej");
        coin.classList.add("fej");
        coin.classList.add("rotate");

        const renderedText = text.innerText;
        text.innerText = "Heads";

        var score = 0;
        var infinity = 100;
    
        for(i=0 ;i <= infinity ; i++){
            score++;
    
            document.getElementById("my-score").innerHTML = score;
          
        }


    }else{
        console.log("iras");
        coin.classList.remove("fej");
        coin.classList.remove("iras");
        coin.classList.add("iras");
        coin.classList.add("rotate");

        const renderedText = text.innerText;
        text.innerText = "Tails";
       
    }

    
    
}

