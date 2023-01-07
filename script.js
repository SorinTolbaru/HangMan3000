//setting up main vars
let tries = 6;
let parts= [document.getElementById("head"),document.getElementById("torso"),document.getElementById("arm1"),document.getElementById("arm2"),document.getElementById("leg1"),document.getElementById("leg2")];
let randomWord =Math.floor(Math.random() * 3000);
let underlines = "_";


if(words[randomWord].length <= 2 ){
        console.log("2 letter word:",words[randomWord]);
         location.reload();
}


for(let i = 0; i < words[randomWord].length - 3;i++){
    underlines += "_";
}

let finalWord = words[randomWord][0] + underlines +  words[randomWord][words[randomWord].length - 1]
document.getElementById("word").innerHTML = finalWord;

let lost = document.getElementById("lost");
let won = document.getElementById("won");

let partNr = 0;
console.log(words[randomWord]);


let proccesedWord = words[randomWord];




function killTries(e){
    let letter = e.toLowerCase();
        if(proccesedWord.includes(letter)){
           let holder = Array.from(finalWord);
           for(let position = 0; position < words[randomWord].length;position++ ){
            if(words[randomWord][position] == letter){
                holder[position] = letter;
            }
           }
           finalWord = holder.join("");
           document.getElementById("word").innerHTML = finalWord;
           
            if(!finalWord.includes("_")){
                won.style.visibility = "visible";
                document.getElementById("word").innerHTML = words[randomWord];
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
             return;
            } 

    tries--;
    parts[partNr].style.visibility = "hidden";
    partNr++;
    console.log("you got",tries,"tries");
    if(tries <= 0){
    lost.style.visibility = "visible";
    document.getElementById("word").innerHTML = words[randomWord];
    setTimeout(() => {
        location.reload();
    }, 2000); }

}