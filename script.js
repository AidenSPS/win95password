//Getting the buttons ID and declaring a variable
let buttons = document.getElementById("buttons");

//Ok button
let oK = document.createElement("body");
oK.setAttribute("id","ok");
oK.setAttribute("onClick","passConfirm()");
oK.innerText = "OK";
buttons.appendChild(oK);

//Cancel Button