var mystring = './images/';
var myWaltonImageObject, myAllThreeImageObject,schrodingerImageObject;

/*Create the Array of Images*/
	
var myImageArray = new Array();

	myImageArray[0] = 'waltonOne.jpg';
	myImageArray[1] = 'waltonTwo.jpg';
	myImageArray[2] = 'waltonAndFriendsOne.jpg';
	myImageArray[3] = 'waltonAndFriendsTwo.jpg';
	myImageArray[4] = 'schrodingerOne.jpg';
	myImageArray[5] = 'schrodingerTwo.jpg';
	

/*Basic Function Definition*/

function myChangeSource(myObject, mySource) {
		myObject.src =  mystring + mySource;
			};
			
/*Attach Event Handlers*/

	/*Walton Image Rollover */
myWaltonImageObject = document.getElementById('waltonImage');
	myWaltonImageObject.onmouseover = function () {
								myChangeSource(myWaltonImageObject, myImageArray[1]) //MouseOver
											};	

	myWaltonImageObject.onmouseout = function() {
								myChangeSource(myWaltonImageObject, myImageArray[0]) //MouseOut
											};		
	
	/*Three Scientists Rollover */
myAllThreeImageObject = document.getElementById('threeScientistsImage'); 
	myAllThreeImageObject.onmouseover = function () {
								myChangeSource(myAllThreeImageObject, myImageArray[3]) //MouseOver
											};	

	myAllThreeImageObject.onmouseout = function() {
								myChangeSource(myAllThreeImageObject, myImageArray[2]) //MouseOut
											};	
											
	/*Schrodinger Rollover */
schrodingerImageObject = document.getElementById('schrodingerImage'); 
	schrodingerImageObject.onmouseover = function () {
								myChangeSource(schrodingerImageObject, myImageArray[5]) //MouseOver
											};	

	schrodingerImageObject.onmouseout = function() {
								myChangeSource(schrodingerImageObject, myImageArray[4]) //MouseOut
											};


											
												
											