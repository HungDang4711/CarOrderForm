function FirstName() { //test input for 2-15 allowed characters
   var fName = document.getElementById("firstName").value;
   var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

   if (re1.test(fName)) {//if input is valid, update page to show successful entry
	document.getElementById("firstNamePrompt").style.color = "green";
	document.getElementById("firstNamePrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("firstNamePrompt").style.color = "red";
	document.getElementById("firstNamePrompt").innerHTML = "<b>Enter 2-15 characters</b>";
	return false;
   }
}
function LastName() { //test input for 2-25 allowed characters
   var lName = document.getElementById("lastName").value;
   var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;

   if (re2.test(lName)) {//if input is valid, update page to show successful entry
	document.getElementById("lastNamePrompt").style.color = "green";
	document.getElementById("lastNamePrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("lastNamePrompt").style.color = "red";
	document.getElementById("lastNamePrompt").innerHTML = "<b>Enter 2-25 characters</b>";
	return false;
   }
}
function Street() { //test input for 5-15 allowed characters
   var lStreet = document.getElementById("street").value;
   var re4 = /^[a-zA-Z0-9\s\'\-]{5,55}$/;

   if (re4.test(lStreet)) {//if input is valid, update page to show successful entry
	document.getElementById("streetPrompt").style.color = "green";
	document.getElementById("streetPrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("streetPrompt").style.color = "red";
	document.getElementById("streetPrompt").innerHTML = "<b>Enter 5-55 characters and numbers</b>";
	return false;
   }
}
function PostalCode() { //test input for 5-15 allowed characters
   var posCode = document.getElementById("postalCode").value;
   var re5 = /^[0-9]{5,5}$/;

   if (re5.test(posCode)) {//if input is valid, update page to show successful entry
	document.getElementById("postalCodePrompt").style.color = "green";
	document.getElementById("postalCodePrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("postalCodePrompt").style.color = "red";
	document.getElementById("postalCodePrompt").innerHTML = "<b>Enter 5 numbers</b>";
	return false;
   }
}
function City() { //test input for 2-25 allowed characters
   var lCity = document.getElementById("city").value;
   var re6 = /^[a-zA-Z\s\'\-]{2,25}$/;

   if (re6.test(lCity)) {//if input is valid, update page to show successful entry
	document.getElementById("cityPrompt").style.color = "green";
	document.getElementById("cityPrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("cityPrompt").style.color = "red";
	document.getElementById("cityPrompt").innerHTML = "<b>Enter 2-25 characters</b>";
	return false;
   }
}
function Phone() { //test input for 2-15 allowed characters
   var phoneNumber = document.getElementById("phone").value;
   var re3 = /^\d{3}-\d{3}-\d{4}$/;

   if (re3.test(phoneNumber)) {//if input is valid, update page to show successful entry
	document.getElementById("phonePrompt").style.color = "green";
	document.getElementById("phonePrompt").innerHTML = "<b>valid</b>";
	return true;
   }
   else {//if input is invalid, update page to prompt for new input
	document.getElementById("phonePrompt").style.color = "red";
	document.getElementById("phonePrompt").innerHTML = "<b>Number with this format xxx-xxx-xxxx</b>";
	return false;
   }
}

function formName() {
   var name = document.forms["RegForm"]["Name"];
   if (name.value == "") {
   window.alert("Please enter your name.");
   return false;
   }
}
			
function formAddress() {
   var address = document.forms["RegForm"]["Address"];
   if (address.value == "") {
   window.alert("Please enter your address.");
   }
}
			
function formEMail() {
   var email = document.forms["RegForm"]["EMail"];
   if (email.value == "") {
   window.alert("Please enter your E-mail address.");
   return false;
   }
}