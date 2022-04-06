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

//Function for Ok button
function passOk(){
	let userName = document.getElementById("username").value;
	let passWord = document.getElementById("password").value;
	let box = document.getElementById("box");
	alert(userName);
	alert(passWord);
	if (userName == "Lawnmower Man"){
		if(passWord == "7.3942"){
			box.remove();
			alert("Show Image Here");
		}
		else{
			document.location= 'index.html';
			body.setAttribute("background-color","red");
		}
	}
}

//Function for Cancel Button
function winCan(){
	document.location = 'index.html';
}