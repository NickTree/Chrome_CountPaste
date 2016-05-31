// var app = chrome.runtime.getBackgroundPage();
var buttonOn = chrome.extension.getBackgroundPage().exec_count_on;

var d = document.getElementsByClassName("top-bar")[0];
var c = d.getElementsByTagName("i")[0]

if( buttonOn == 1 ){
	d.style.setProperty("background","#29CDB5")
	c.setAttribute("class","fa fa-check-circle-o");
}else {
	d.style.setProperty("background","#CD3829")
	c.setAttribute("class","fa fa-times-circle-o");
}

function hello() {
   if( buttonOn == 1 ){
	d.style.setProperty("background","#CD3829")
	c.setAttribute("class","fa fa-times-circle-o");
	buttonOn = 0;
   }else {
	d.style.setProperty("background","#29CDB5")
	c.setAttribute("class","fa fa-check-circle-o");
	buttonOn = 1;
   }

  chrome.runtime.sendMessage(buttonOn);
  chrome.tabs.executeScript(null,
                 {code:"exec_count_on = "+ buttonOn + "; console.log('" + buttonOn + "')", allFrames: true})
}

document.getElementById('clickme').addEventListener('click', hello);
