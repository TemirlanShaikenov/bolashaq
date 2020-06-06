var	checker = 1;
function giveAnswer(){

if (checker == 1) {
	document.querySelector('#inputTaskCode').value = "</body>";
	checker = 2;
} else {
	document.querySelector('#inputTaskCode').value = " ";
	checker = 1;
}

}



function checkAnswer(){
	var textChecker = document.querySelector('#inputTaskCode').value;
	if (textChecker == "</body>") {
		document.querySelector('#rightCodeOneHtmlOne').style.zIndex = "999";
		document.querySelector('#wrongCodeOneHtmlOne').style.zIndex = "0";
		document.querySelector('#backgroundOneCodeHtmlTask').style.zIndex = "0";
	} else {
		document.querySelector('#wrongCodeOneHtmlOne').style.zIndex = "999";
		document.querySelector('#rightCodeOneHtmlOne').style.zIndex = "0";
		document.querySelector('#backgroundOneCodeHtmlTask').style.zIndex = "0";
	}
}

function closeBanner(){
	document.querySelector('#wrongCodeOneHtmlOne').style.zIndex = "-1";
	document.querySelector('#rightCodeOneHtmlOne').style.zIndex = "-1";
}