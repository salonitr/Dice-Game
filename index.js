var a=Math.random()*6+1 
var b=Math.floor(a)
var c=Math.random()*6+1
var d=Math.floor(c)
document.querySelector("#i").src="image"+b+".jpg"
document.querySelector("#j").src="image"+d+".jpg"
if(b>d){
    document.querySelector(".c").innerHTML="😎 Player 1 wins"
}
else if(b<d){
    document.querySelector(".c").innerHTML="😎 Player 2 wins"
}
else{
    document.querySelector(".c").innerHTML="😎 Draw"
}