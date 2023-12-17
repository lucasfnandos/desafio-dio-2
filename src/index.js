var win = 300
var loss = 222

function calcRankeadas(win, loss){
    let rankeadas = win - loss
    return rankeadas
}

var score = calcRankeadas(win, loss)

if(score >= 101){
    var level = "Imortal"
}else if(score >= 91){
    var level = "Lendario"
}else if(score >= 81){
    var level = "Diamante"
}else if(score >= 51){
    var level = "Ouro"
}else if(score >= 21){
    var level = "Prata"
}else if(score >= 11){
    var level = "Bronze"
}else{
    var level = "Ferro"
}

console.log("O Herói tem de saldo de "+score+" está no nível de "+level)