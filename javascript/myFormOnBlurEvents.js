var myName=document.getElementById("name");
var myEmailAlt=document.getElementById("confirmEmail");
var myEmail=document.getElementById("email");
var myArea = document.getElementById("myTextArea");

document.write(myArea.value)
/*Name field*/
myName.onfocus = function() {
	if ( myName.value == "") {
		myName.value = "Insert your name";
	}
};

myName.onblur = function() {
	if ( myName.value == "Insert your name") {
		myName.value = "";
	}
};

/*Email field*/
myEmail.onfocus = function() {
	if ( myEmail.value == "") {
		myEmail.value = "Insert Your Email address";
	}
};

myEmail.onblur = function() {
	if ( myEmail.value == "Insert Your Email address") {
		myEmail.value = "";
	}
};

/*Confirm email field*/
myEmailAlt.onfocus = function() {
	if ( myEmailAlt.value == "") {
		myEmailAlt.value = "Confirm Your Email";
	}
};

myEmailAlt.onblur = function() {
	if ( myEmailAlt.value == "Confirm Your Email") {
		myEmailAlt.value = "";
	}
};


/*TextArea message*/
myArea.onfocus = function() {
	if ( myArea.value == "") {
		myArea.value = "\n\tWe Welcome Your Comments....";
	}
};

myArea.onblur = function() {
	if ( myArea.value == "\n\tWe Welcome Your Comments....") {
		myArea.value = "";
	}
};


