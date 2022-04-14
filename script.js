function setup(){
	//Getting the userName and passWord and setting it as an id.
	let inputs = document.getElementsByTagName("input"); //refers to all of the elements with an input. Is now an array with each input(value or not);
	inputs[0].setAttribute("id","username");
	inputs[1].setAttribute("id","password");
	let userName = document.getElementById("username");
	let passWord = document.getElementById("id","password");

	//Interface Div
	let buttons = document.getElementById("buttons");

	//Ok Button
	let okButton = document.createElement("button");
	okButton.setAttribute("id","OK");
	okButton.setAttribute("onClick","passOk()");
	okButton.innerText = "OK";
	buttons.appendChild(okButton);

	//Cancel button
	let cancelButton = document.createElement("button");
	cancelButton.setAttribute("id","cancel");
	cancelButton.setAttribute("onClick","cancel()");
	cancelButton.innerText = "Cancel";
	buttons.appendChild(cancelButton);

	let testButton = document.createElement("button");
	testButton.setAttribute("onClick","replaceBox()");
	testButton.innerText = "Test";
	document.body.appendChild(testButton);
}

var okImage = document.createElement("img");

function passOk(){
	alert("OK clicked");
}

function cancel(){
	alert("Cancel clicked");
}

function replaceBox(){
	let box = document.getElementsByClassName("box");
	alert(box);
	box.setAttribute("id","box");
	box.remove();
	okImage.setAttribute("src","http://i.imgur.com/IUVDNyp.jpg.");
}
