(function(){
	$.getJSON('json/portfolio.json')
		.success(function(data){
			var cont = [];
			for (var i = 0; i < data.length; i++) {
				var w = '<div class="col-md-3 col-sm-4 col-xs-6 wrapper">';
				w += '<a href="'+data[i].link+'">';
				w += '<div class="img-title">';
				w += '<img src="'+data[i].img+'" alt="'+data[i].name+'">';
				w += '<div class="title">';
				w += '<h4>'+data[i].name+'</h4>';
				w += '<p>'+data[i].descr+'</p>';
				w += '</div></div></a></div>';
				cont.push(w);
			}
			$('<div/>',{class:'row',html:cont.join('')}).appendTo('#works');
		})
		.error(function(e, status){
			console.log('Error to request json: '+status);
			console.log('Insoming text doc.: '+e.responseText);
			$('<div/>',{class:'row',html:'<h2 class="text-center">Ошибка получения данных для портфолио.</h2>'}).appendTo('#works');
		});
})();