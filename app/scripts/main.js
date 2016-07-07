// jshint devel:true
//console.log('\'Allo \'Allo!');

//index.html
var el = document.querySelector("#create-app-btn");
if (el) {
  el.addEventListener("click", function(){
    document.querySelector("#create-app").style.display = "block";
		var appname = document.getElementsByTagName("input")[0].value;
		alert(appname);
		console.log('appname: '+appname);
		localStorage.setItem("app-name", appname);
  });
}


//detail_app_page.html
var getname = localStorage.getItem("app-name");
console.log('getname: ' + getname );

$(function() {
	//change app name
	$('#js-change-appname').on('click', function () {
		var changed = $('#rename-app').val();
		$('#name-app').text( changed );
	});

	//toggle start/stop button
	$('#main-button').on('click', function () {
		var $el = $(this),
		textNode = this.lastChild;

		$el.find('span').toggleClass('glyphicon-play glyphicon-stop');
		textNode.nodeValue = ($el.hasClass('main-button') ? 'Stop' : 'Start')
		$el.toggleClass('main-button');
	});

});
