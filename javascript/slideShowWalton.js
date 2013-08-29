/* Acknowledgement.  The original code is for this slideshow was obtained 
	on the World-Wide Web at the following URL: 
		
		http://javascriptsource.com/miscellaneous/image-slideshow.html
		
It has been extensively modified here */


var mySlideElement = document.getElementById('slide');
var mySlideButtonElement = document.getElementById('slidebutton');
var myImageElement = document.getElementById('showImage');
var rotate_delay = 3000; // delay in milliseconds 
var current = 0;
var mySlideObject, 	mylessThan2BarObject, mylessThan2Object, mySlideButtonObject, mygreaterThan2Object, mygreaterThan2BarObject;
	
/*Create Slide Show Functions */
function next() {
  if (mySlideElement[current+1]) {
  myImageElement.src = mySlideElement[current+1].value;
  mySlideElement.selectedIndex = ++current;
	 }
	 
	else first();
  }
  
  
  function previous() {
  if (current-1 >= 0) {
  myImageElement.src = mySlideElement[current-1].value;
  mySlideElement.selectedIndex = --current;
	 }
  else last();
  }
  
  
function first() {
  current = 0;
  myImageElement.src = mySlideElement[0].value;
  mySlideElement.selectedIndex = 0;
  }
  
  
function last() {
  current = mySlideElement.length-1;
  myImageElement.src = mySlideElement[current].value;
  mySlideElement.selectedIndex = current;
  }
  
  
function ap(text) {
  mySlideButtonElement.value = (text == "Stop") ? "Start" : "Stop";
  rotate();
  }
  
function change() {
  current = mySlideElement.selectedIndex;
  document.images.showImage.src = mySlideElement[current].value;
  }
  
  
function rotate() {
  if (mySlideButtonElement.value == "Stop") {
	current = (current == mySlideElement.length-1) ? 0 : current+1;
	myImageElement.src = mySlideElement[current].value;
	mySlideElement.selectedIndex = current;
	window.setTimeout("rotate()", rotate_delay);
	 }
}


/*Attach Event Handlers */
mySlideObject = document.getElementById('slide');
	mySlideObject.onchange = function () {
								return change();
											};	
				
mylessThan2BarObject = document.getElementById('lessThan2Bar');
	mylessThan2BarObject.onclick = function () {
								return first();
											};	
											
											
mylessThan2Object = document.getElementById('lessThan2'); 
	mylessThan2Object.onclick = function () {
								return previous();
											};	
											
mySlideButtonObject = document.getElementById('slidebutton'); 
	mySlideButtonObject.onclick = function () {
								return ap(this.value);
											};	
											
mygreaterThan2Object = document.getElementById('greaterThan2'); 
	mygreaterThan2Object.onclick = function () {
								return next();
											};
											
mygreaterThan2BarObject = document.getElementById('greaterThan2Bar'); 
	mygreaterThan2BarObject.onclick = function () {
								return last();
											};