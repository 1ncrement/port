(function(){
	var cont = [];
	var jqxhr = $.getJSON("json/portfolio.json")
		.success(function(data){
			for (var i = 0; i < data.length; i++) {
				var div = '<div class="col-md-4 col-sm-6 text-center">';
				div += '<i class="fa fa-4x '+data[i].fa+'"></i>';
				div += '<div class="port-content">';
				div += '<h5>'+data[i].title+'</h5>';
				div += '<p>'+data[i].description+'</p>';
				div += '</div></div>';
				cont.push(div);
			}
		})
		.error(function(e) { console.log('Error to receive json');})
		.complete(function(){
			console.log('complete');
			$('<div/>',{
				"class":"row",
				html:cont.join('')
			}).appendTo('#portfolio .container');
		});
})();