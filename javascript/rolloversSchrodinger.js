var mystring = './images/';
var mySchrodingerSepiaObject, myWhatIsLifeObject, mySchrodingerAltObject;

/*Create the Array of Images*/
	
var myImageArray = new Array();

	myImageArray[0] = 'scrodingerSepiaOne.jpg';
	myImageArray[1] = 'scrodingerSepiaTwo.jpg';
	myImageArray[2] = 'whatIsLifeOne.jpg';
	myImageArray[3] = 'whatIsLifeTwo.jpg';
	myImageArray[4] = 'scrodingerAltOne.jpg';
	myImageArray[5] = 'scrodingerAltTwo_alt.jpg';

/*Basic Function Definition*/

function myChangeSource(myObject, mySource) {
		myObject.src =  mystring + mySource;
			};
			
/*Attach Event Handlers*/

	/*Schrodinger Sepia Rollover */
mySchrodingerSepiaObject = document.getElementById('schrodingerSepia');
	mySchrodingerSepiaObject.onmouseover = function () {
								myChangeSource(mySchrodingerSepiaObject, myImageArray[1]) //MouseOver
											};	

	mySchrodingerSepiaObject.onmouseout = function() {
								myChangeSource(mySchrodingerSepiaObject, myImageArray[0]) //MouseOut
											};	

/*What is Life Rollover */
myWhatIsLifeObject = document.getElementById('whatIsLifePict');
	myWhatIsLifeObject.onmouseover = function () {
								myChangeSource(myWhatIsLifeObject, myImageArray[3]) //MouseOver
											};	

	myWhatIsLifeObject.onmouseout = function() {
								myChangeSource(myWhatIsLifeObject, myImageArray[2]) //MouseOut
											};	

/*Schrodinger Alt  Rollover */
mySchrodingerAltObject = document.getElementById('scrodingerAltPict');
	mySchrodingerAltObject.onmouseover = function () {
								myChangeSource(mySchrodingerAltObject, myImageArray[5]) //MouseOver
											};	

	mySchrodingerAltObject.onmouseout = function() {
								myChangeSource(mySchrodingerAltObject, myImageArray[4]) //MouseOut
											};	
											
										
												
											