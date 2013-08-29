var mySubmitObject = document.getElementById('myform'); 


/*The basic form validation function */

function validateForm(){
	
	var myEmail=document.getElementById("email").value;
	var myEmailAlt=document.getElementById("confirmEmail").value;
	var myPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if (document.getElementById("name").value < 1) 
			
			{alert("You must insert your name. ");
				return false;}
				
	
	if (document.getElementById("email").value < 3) 
		
			{alert("You must insert a valid e-mail address");
				return false;}

    if(myPattern.test(myEmail)){         
		
    							}
	else{   
		alert("This is not a valid e-mail address"); 
		return false;
    }
	
	if(myEmail===myEmailAlt){         
		return true;   
    }
	
	else{   
		alert("The 'email' and 'confirm email' fields do not agree"); 
		return false;
	}

return true;
	
}


/*Attach Event Handler*/
	
	mySubmitObject.onsubmit = function () {
		
		return validateForm()
						
						}
			
			
