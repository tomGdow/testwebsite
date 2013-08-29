var mystring = './images/';
var myApparatusObject, myCockcroftObject, myWaltonOldObject, myWaltonYoungObject;

/*Create the Array of Images*/
	
var myImageArray = new Array();

	myImageArray[0] = 'apparatusOne.jpg';
	myImageArray[1] = 'apparatusTwo.jpg';
	myImageArray[2] = 'cockcroftOne.jpg';
	myImageArray[3] = 'cockcroftTwo.jpg';
	myImageArray[4] = 'WaltonOldOne.jpg';
	myImageArray[5] = 'WaltonOldTwo.jpg';
	myImageArray[6] = 'waltonOne.jpg';
	myImageArray[7] = 'waltonTwo.jpg';
	
/*Basic Function Definition*/

function myChangeSource(myObject, mySource) {
		myObject.src =  mystring + mySource;
			};
			
/*Attach Event Handlers*/

	/*Walton apparatus Rollover */
myApparatusObject = document.getElementById('apparatus');
	myApparatusObject.onmouseover = function () {
								myChangeSource(myApparatusObject, myImageArray[1]) //MouseOver
											};	

	myApparatusObject.onmouseout = function() {
								myChangeSource(myApparatusObject, myImageArray[0]) //MouseOut
											};	

/*Cockcroft  Rollover */
myCockcroftObject = document.getElementById('cockcroft');
	myCockcroftObject.onmouseover = function () {
								myChangeSource(myCockcroftObject, myImageArray[3]) //MouseOver
											};	

	myCockcroftObject.onmouseout = function() {
								myChangeSource(myCockcroftObject, myImageArray[2]) //MouseOut
											};	

/*Walton Old  Rollover */
myWaltonOldObject = document.getElementById('waltonOld');
	myWaltonOldObject.onmouseover = function () {
								myChangeSource(myWaltonOldObject, myImageArray[5]) //MouseOver
											};	

	myWaltonOldObject.onmouseout = function() {
								myChangeSource(myWaltonOldObject, myImageArray[4]) //MouseOut
											};	
											
/*Walton Young  Rollover */
myWaltonYoungObject = document.getElementById('waltonYoung');
	myWaltonYoungObject.onmouseover = function () {
								myChangeSource(myWaltonYoungObject, myImageArray[7]) //MouseOver
											};	

	myWaltonYoungObject.onmouseout = function() {
								myChangeSource(myWaltonYoungObject, myImageArray[6]) //MouseOut
											};												
												
											