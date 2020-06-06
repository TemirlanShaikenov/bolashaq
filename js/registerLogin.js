function registrationForm() {
 document.getElementById('loginForm').style.zIndex = "0";
 document.getElementById('registrationForm').style.zIndex = "1";
}

function loginForm() {
	document.getElementById('loginForm').style.zIndex = "1";
	document.getElementById('registrationForm').style.zIndex = "0";
	
}


document.getElementById('submitButton').addEventListener('click', submitForRegistration);
function submitForRegistration(e) {
	e.preventDefault();

	let name = document.getElementById('fullName').value;
	let nameSplit = name.split(' ');
	let nameMain = nameSplit[0];
	let surname = nameSplit[1];
	let date = document.getElementById('date').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;


	fetch('http://64.227.120.78:8000/api/users/register/',{
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-type': 'application/json'
		},
		body:JSON.stringify({email:email, first_name:nameMain, last_name:surname, birth_date:date, password:password})
	})
	.then((res) => res.json())
	.then((data) => console.log(data))


	document.getElementById('fullName').value = '';
	document.getElementById('date').value = '';
	document.getElementById('email').value = '';
	document.getElementById('password').value = '';
}









document.getElementById('submitButtonLogin').addEventListener('click', getTokenData);
/*function submitForRegistration(e) {
	e.preventDefault();

	let email = document.getElementById('emailLogin').value;
	let password = document.getElementById('passwordLogin').value;

	fetch('http://64.227.120.78:8000/api/users/register/',{
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, *//*',
			'Content-type': 'application/json'
		},
		body:JSON.stringify({email:email, password:password})
	})
	.then((res) => res.json())
	.then((data) => console.log(data))


	
	document.getElementById('emailLogin').value = '';
	document.getElementById('passwordLogin').value = '';
}*/



var tokenUser = "";


function getTokenData(e) {
	e.preventDefault();
	var email = document.getElementById('emailLogin').value;
    var password = document.getElementById('passwordLogin').value;

    fetch('http://64.227.120.78:8000/api/users/auth/', {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Accept': 'application/json, text/plain, */*',
			'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username:email,
            password:password
        }),
    })
        .then((res) => {
            
            return res.json();
            
            //tokenUser = JSON.stringify(console.log(tokenData)); // сохраняем полученный токен в sessionStorage, с помощью функции, заданной ранее
            //console.log(tokenUser);
            
            
        })
        .then((data) => {
        	tokenUser = data['token'];
        	console.log(tokenUser);
        	window.localStorage.setItem('tokenSave',tokenUser);
        	getData();
        	
        });


    document.getElementById('emailLogin').value = '';
	document.getElementById('passwordLogin').value = '';
}

/*function testClick() {
	console.log('token ' + tokenUser);
}*/



//document.getElementById('EnterGoogleLogin').addEventListener('click', getData);



function getData() {
	var sendToken = 'Token '+ window.localStorage.getItem('tokenSave');
	console.log(window.localStorage.getItem('tokenSave'));
	console.log(sendToken);
	fetch('http://64.227.120.78:8000/api/users/profile/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log(data.first_name);
		document.getElementById('profileMain').innerHTML = data.first_name;
		window.localStorage.setItem('userId',data.id);
		}
	})
	
}










//document.getElementById('submitHelp').addEventListener('click', submitForHelp);
function submitForHelp() {
	

	
	let textH = document.getElementById('textareaHelp').value;
	var sendToken = 'Token '+ window.localStorage.getItem('tokenSave');


	fetch('http://64.227.120.78:8000/api/support/',{
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-type': 'application/json',
			'Authorization' : sendToken
		},
		body:JSON.stringify({text:textH})
	})
	.then((res) => res.json())
	.then((data) => console.log('data'))


	document.getElementById('textareaHelp').value = '';
	
}














function profileLoad(){
	console.log('done');
	var sendToken = 'Token '+ window.localStorage.getItem('tokenSave');
	console.log(window.localStorage.getItem('tokenSave'));
	console.log(sendToken);
	fetch('http://64.227.120.78:8000/api/users/profile/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{

		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log(data.first_name);
		document.getElementById('t1').innerHTML = data.first_name;
		document.getElementById('t2').innerHTML = data.score;
		document.getElementById('fourTextProfile').innerHTML =  data.first_name + ' ' + data.last_name;
		document.getElementById('fifteenTextProfile').innerHTML =  data.email;
		document.getElementById('dateB').innerHTML =  data.birth_date;

		}
	});

	fetch('http://64.227.120.78:8000/api/courses/1/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('s1').innerHTML = 'HTML: ' + data.passed_on + '%';
		}
	});

	fetch('http://64.227.120.78:8000/api/courses/2/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('s2').innerHTML = 'CSS: ' + data.passed_on + '%';
		}
	});

	fetch('http://64.227.120.78:8000/api/courses/3/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('s3').innerHTML = 'JS: ' + data.passed_on + '%';
		}
	});








}


var yourID = 0;
function ratingLoad(){
	console.log('done');
	var sendToken = 'Token '+ window.localStorage.getItem('tokenSave');
	console.log(window.localStorage.getItem('tokenSave'));
	console.log(sendToken);
	fetch('http://64.227.120.78:8000/api/users/profile/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log(data.first_name);
		
		window.localStorage.setItem('scoreYour',data.score);
		}
		
	});

	fetch('http://64.227.120.78:8000/api/rating/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		let output = " ";
		console.log(data.results[0].id);
		for (var i = 0; i < 5; i++) {
			output += data.results[i].first_name + '   ' + data.results[i].last_name + '   ' + data.results[i].score+'<br/><br/>';
		}
		let your = window.localStorage.getItem('scoreYour');



		document.getElementById('yourScore').innerHTML = data.results[0].score - your;
		document.getElementById('ratingStudents').innerHTML = output;
	}
	});

	fetch('http://64.227.120.78:8000/api/courses/1/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('html1').innerHTML = data.passed_on;
		}
	});

	fetch('http://64.227.120.78:8000/api/courses/2/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('css1').innerHTML = data.passed_on;
		}
	});

	fetch('http://64.227.120.78:8000/api/courses/3/progress/',
		{credentials:'same-origin',
		mode:'cors',
		headers:{'Accept': 'application/json, text/plain, */*',
		'Authorization' : sendToken}
	})
	.then((res) => res.json())
	.then((data) =>{
		if(data.detail !== "Invalid token header. No credentials provided."){
		console.log('courses');
		console.log(data);
		



		document.getElementById('js1').innerHTML = data.passed_on;
		}
	});
	
}




function logoutFunction(){
	window.localStorage.setItem('tokenSave'," ");
}