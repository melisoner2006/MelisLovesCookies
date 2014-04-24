console.log("Hi baby!");

var tabUrl;
chrome.tabs.getSelected(null, function(tab){	
	tabUrl = tab.url;
	console.log(tabUrl);
});

  var cookieName;
  var cookieValue;
  var cookieCount;
  var cookieNames = "";
  var cookieSet = false;

function display()
{	

   chrome.cookies.getAll({url: tabUrl}, function(cookies) {
   cookieCount = cookies.length;
   console.log("cookies.length == " + cookieCount);
      if(cookieCount < 1)
	{
	cookieNames = "there's no cookie here!";
	}
    else{
      for (var i = 0; i < cookies.length; i++) 
	{
	 if (cookieSet) {
		cookieName = "";
	 }
	 cookieName = cookies[i].name;
	 cookieValue = cookies[i].value;
	 console.log("name == " + cookies[i].name);
	 cookieNames = cookieNames.concat(cookieName +": "+cookieValue + "\r\n");
    	}
	}
	document.getElementById("demo").innerHTML=cookieNames;
  });
}

document.getElementById("bDisplay").onclick = display;	 

/*document.getElementById("bDisplay").onclick = function foo() {
  
};
*/

 
 console.log("Hi baby! 2");
 function deleteFunction()
 {
   var deleteMessage;
	console.log("function:delete");
	chrome.cookies.getAll({url: tabUrl}, function(cookies){
		cookieCount = cookies.length;
		if(cookieCount < 1){
			deleteMessage = "There is no cookie here!";
 		}
		else{
		for(var i = 0; i<cookies.length; i++){
			chrome.cookies.remove({url:tabUrl, name:cookies[i].name});
		 }
			deleteMessage = "All cookies are deleted!";
		}
		document.getElementById("demo").innerHTML=deleteMessage;
	}
	);

document.getElementById("demo").innerHTML="cookies are deleted!";
 }

 document.getElementById("bDelete").onclick = deleteFunction;
	 

console.log("Hi baby 3");

function fakeProfile1(){

  console.log("function:fakeProfile1");

  var newValue = prompt("Please enter a new value", "newValue");

  chrome.cookies.getAll({url: tabUrl}, function(cookies){
			console.log("function:fakeProfile1 // getAllCookies");

			chrome.cookies.remove({url:tabUrl, name:cookies.name});
			console.log("function:fakeProfile1 // removedCookies");
	}
	);
  chrome.cookies.set({url:tabUrl, name:cookieName, value:newValue}, function(cookie){

		cookieSet = true;
		console.log("function:fakeProfile1 // cookieName:" + cookieName);
	});


}
document.getElementById("p1").onclick = fakeProfile1;	 




 
