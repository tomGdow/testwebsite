var myDefaultId ="standardStyleSheet";
var myAltId = "altStyleSheet";

var defaultStyleLink = document.getElementById(myDefaultId);
var otherStyleLink = document.getElementById(myAltId);

/*Main Function*/

function setActiveStyleSheet (myStyleId){
	var i = 0;
	var linkItem, linkArray;
	
	linkArray = document.getElementsByTagName("link");
	
	for (i = 0; i < linkArray.length; i++) {
				linkItem = linkArray[i];
		
				if (linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title")) {
			
					linkItem.disabled = true;
			
			if (linkItem.getAttribute("title") === myStyleId){
				linkItem.disabled = false;
			}
		}
	}
}

/*Event Handlers*/

defaultStyleLink.onclick = function () {
	setActiveStyleSheet(myDefaultId);
					};

otherStyleLink.onclick = function () {
	setActiveStyleSheet(myAltId);
	};






