//Getting the buttons ID and declaring a variable
var buttons = document.getElementById("buttons");

//Ok button
var oK = document.createElement("button");
oK.setAttribute("id","OK");
oK.setAttribute("onClick","passOk()");
oK.innerText = "OK";
buttons.appendChild(oK);

//Cancel Button
var cancel = document.createElement("button");
cancel.setAttribute("id","cancel");
cancel.setAttribute("onClick","winCan()");
cancel.innerText = "Cancel";
buttons.appendChild(cancel);

var okImage = document.createElement("img");

//Function for Ok button
function passOk(){
	let userName = document.getElementById("username").value;
	let passWord = document.getElementById("password").value;
	let box = document.getElementById("box");
	if (userName == "Lawnmower Man"){
		if(passWord == "7.3942"){
			box.remove();
			okImage.setAttribute("src","http://i.imgur.com/IUVDNyp.jpg.");
			document.body.appendChild(okImage);
		}
		else{
			document.body.style.backgroundColor = "red";
			userName.value = "";
			passWord.value = "";
		}
	}
}

//Function for Cancel Button
function winCan(){
	document.location = 'index.html';
}