//your JS code here. If required.
let btn=document.getElementById("enterBtn");
let para=document.getElementById("status");

function changePara(){
	para.innerHTML= "<h1>Entered Metaverse</h1>"
	
}

btn.addEventListener("click",changePara)