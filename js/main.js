(function(){
	var cont = [];
	var jqxhr = $.getJSON("json/portfolio.json")
		.success(function(data){
			for (var i = 0; i < data.length; i++) {
				cont.push('<li>'+data[i]+': '+data[i].title+'</li>');
			}
		})
		.error(function(e) { console.log('Error to receive json');})
		.complete(function(){
			console.log('complete');
			$('<ul/>',{
				"class":"test",
				html:cont.join('')
			}).appendTo('#result');
		});
})();