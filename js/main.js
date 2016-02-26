(function(){
	var jqxhr = $.getJSON("json/portfolio.json")
		.success(function() { alert("Success"); })
		.error(function() { alert("Error"); })
		.complete(function() { alert("End complete"); });
})();