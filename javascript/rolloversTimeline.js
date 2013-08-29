var mystring = './images/';
var myLonsdaleTLObject;

/*Create the Array of Images*/
	
var myImageArray = new Array();

	myImageArray[0] = 'LondsdaleTimeOne.jpg';
	myImageArray[1] = 'lonsdaleTimeTwo.jpg';
	myImageArray[2] = 'burnellOne.jpg';
	myImageArray[3] = 'burnellTwo.jpg';

	
/*Basic Function Definition*/

function myChangeSource(myObject, mySource) {
		myObject.src =  mystring + mySource;
			};
			
/*Attach Event Handlers*/

	/*Lonsdale  Rollover */
myLonsdaleTLObject = document.getElementById('lonsdaleInTimeLine');
	myLonsdaleTLObject.onmouseover = function () {
								myChangeSource(myLonsdaleTLObject, myImageArray[1]) //MouseOver
											};	

	myLonsdaleTLObject.onmouseout = function() {
								myChangeSource(myLonsdaleTLObject, myImageArray[0]) //MouseOut
											};	

/*Burnell Rollover */
myCockcroftObject = document.getElementById('burnellImage');
	myCockcroftObject.onmouseover = function () {
								myChangeSource(myCockcroftObject, myImageArray[3]) //MouseOver
											};	

	myCockcroftObject.onmouseout = function() {
								myChangeSource(myCockcroftObject, myImageArray[2]) //MouseOut
											};	

											