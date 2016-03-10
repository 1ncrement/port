var d = document,
	c = d.getElementById('cards'),
	start = d.getElementById('start'),
	arr = [],
	cards = 12,
	count = 20, countStart = 3,
	time = 5000,
	topPos = (3+count)*110;

//create array of cards
	for(var i = 0;i<=cards;i++){
		//var img = '<img src="images/r'+i+'.gif">';
		arr.push('<img src="images/r'+i+'.gif">');
	}
	//console.log(arr);

//add Start count collection cards
	for(var i = 0;i<countStart;i++){
		c.innerHTML += arr[random(cards)];
	}

//Event click in start
	start.addEventListener('click', function (e) {
		start.setAttribute('disabled','disabled');
	//add collection cards
		for(var i = 0;i<count;i++){
			c.innerHTML += arr[random(cards)];
		}
	//concat win card
		c.innerHTML += win();

	//animate scroll
		$(c).animate({
			top: '-='+topPos+'px'
		}, time, 'swing', function(){
			start.removeAttribute('disabled');
		});
	});

//random
	function random(r){
		//var ra = Math.floor(Math.random() * r);
		//console.log(ra);
		return Math.floor(Math.random() * r);
	}

//win combo
	function win(){
		var win = [arr[1],arr[1],arr[12]], res = '', rand;
	//random win cards
		for(var i = 0;i<2;i++){
			rand = random(win.length);
			res += win[rand];
			win.splice(rand, 1);
		}
	//last card in array
		res += win[0];
		return res;
	}