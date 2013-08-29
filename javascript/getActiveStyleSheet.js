

function getActiveStyleSheet () {
	
	var i =0;
	var linkItem, linkArray;
	
	linkArray = document.getElementsByTagName("link");
	
	for (i = 0; i < linkArray.length; i++)  {
		
		linkItem = linkArray[i];
		
		if (linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title") && !linkItem.disabled){
			
			
			return linkItem.getAttribute("title")
			
		}
		
		
	}
	
	return null;
	
}


window.onload = function () {
	var cookie = readCookie ("style");
	var title;
	
	if (cookie) {
		
		title = cookie;
		setActiveStyleSheet (title);
		
		
	}
}

window.onunload = function () {
	var title = getActiveStyleSheet();
	createCookie("style", title, 30);
		
		
	}
