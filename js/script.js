var lastName = document.getElementById('lastName');
var firstName = document.getElementById('firstName');
var birthDate = document.getElementById('birthDate');
var male = document.getElementById('male');
var female = document.getElementById('female');
var mail = document.getElementById('mail');
var message = document.getElementById('message');
var submit = document.getElementById('submit');

	submit.addEventListener("click", function(){
		console.log("coucou");
		if (!lastName.value)
			lastName.style.border = "1px solid red";
		if (!firstName.value)
			firstName.style.border = "1px solid red";
		if (!birthDate.value)
			birthDate.style.border = "1px solid red";
		if (!mail.value)
			mail.style.border = "1px solid red";
		if (!message.value)
			message.style.border = "1px solid red";
	});
