var number = 1;
function changeColorFirst() {
	if (number == 1) {
		document.querySelector('#sectionMain').style.backgroundColor = "#FAFAFA";
		document.querySelector('#sectionMain2').style.backgroundColor = "#FAFAFA";
		document.querySelector('#sectionMain3').style.backgroundColor = "#FAFAFA";
		document.querySelector('#sectionMain4').style.backgroundColor = "#FAFAFA";
		document.querySelector('#sectionMain5').style.backgroundColor = "#FAFAFA";
		document.querySelector('#sectionMain6').style.backgroundColor = "#FAFAFA";

		document.querySelector('#headerTop').style.backgroundColor = "#0078C2";
		document.querySelector('#headerTop').style.opacity = "1.0";


		document.querySelector('#selectMain').style.backgroundColor = "#0078C2";
		document.querySelector('#startNow').style.background = "#0078C2";
		document.querySelector('#changeColor').style.background = "#0078C2";


		document.getElementsByTagName("p")[0].style.color = "#2F444D";
		document.getElementsByTagName("p")[1].style.color = "#2F444D";
		document.getElementsByTagName("p")[2].style.color = "#2F444D";
		document.getElementsByTagName("p")[3].style.color = "#2F444D";
		document.getElementsByTagName("p")[4].style.color = "#2F444D";
		document.getElementsByTagName("p")[5].style.color = "#2F444D";
		document.getElementsByTagName("p")[6].style.color = "#2F444D";
		document.getElementsByTagName("p")[7].style.color = "#2F444D";
		document.getElementsByTagName("p")[8].style.color = "#2F444D";
		document.getElementsByTagName("p")[9].style.color = "#2F444D";
		document.getElementsByTagName("p")[10].style.color = "#2F444D";
		document.getElementsByTagName("p")[11].style.color = "#2F444D";
		document.getElementsByTagName("p")[12].style.color = "#2F444D";
		document.getElementsByTagName("p")[13].style.color = "#2F444D";
		document.getElementsByTagName("p")[14].style.color = "#2F444D";
		document.getElementsByTagName("p")[15].style.color = "#2F444D";
		document.getElementsByTagName("p")[16].style.color = "#2F444D";
		document.getElementsByTagName("p")[17].style.color = "#2F444D";
		document.getElementsByTagName("p")[18].style.color = "#2F444D";
		document.getElementsByTagName("p")[19].style.color = "#2F444D";
		document.getElementsByTagName("p")[20].style.color = "#2F444D";
		document.getElementsByTagName("p")[21].style.color = "#2F444D";
		document.getElementsByTagName("p")[22].style.color = "#2F444D";
		document.getElementsByTagName("p")[23].style.color = "#2F444D";
		document.getElementsByTagName("p")[24].style.color = "#2F444D";
		document.getElementsByTagName("p")[25].style.color = "#2F444D";
		document.getElementsByTagName("p")[26].style.color = "#2F444D";
		document.getElementsByTagName("p")[27].style.color = "#2F444D";
		
		


		number = 2;
	} else {
		console.log("hi");
		document.querySelector('#sectionMain').style.backgroundColor = "#0D1E27";
		document.querySelector('#sectionMain2').style.backgroundColor = "#0D1E27";
		document.querySelector('#sectionMain3').style.backgroundColor = "#0D1E27";
		document.querySelector('#sectionMain4').style.backgroundColor = "#0D1E27";
		document.querySelector('#sectionMain5').style.backgroundColor = "#0D1E27";
		document.querySelector('#sectionMain6').style.backgroundColor = "#0D1E27";

		document.querySelector('#headerTop').style.backgroundColor = "#FAFAFA";
		document.querySelector('#headerTop').style.opacity = "0.1";


		document.querySelector('#selectMain').style.backgroundColor = "rgba(250,250,250,0)";
		document.querySelector('#startNow').style.background = "linear-gradient(180deg, #4776E6 0%, #8E54E9 100%)";
		document.querySelector('#changeColor').style.background = "linear-gradient(180deg, #4776E6 0%, #8E54E9 100%)";


		document.getElementsByTagName("p")[0].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[1].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[2].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[3].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[4].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[5].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[6].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[7].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[8].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[9].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[10].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[11].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[12].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[13].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[14].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[15].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[16].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[17].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[18].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[19].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[20].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[21].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[22].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[23].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[24].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[25].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[26].style.color = "#FAFAFA";
		document.getElementsByTagName("p")[27].style.color = "#FAFAFA";
		
		








		number = 1;

	}
};





function showMenu(event) {
	event.style.display = "none";
	document.getElementById('mainMenu').style.display = "inline";

}

function stayMenu(event) {
	event.style.display = "inline";
	document.getElementById('leftBar').style.display = "none";

}


function closeMenu(event) {
	event.style.display = "none";
	document.getElementById('leftBar').style.display = "inline";
}