window.onload = function(argument) {

	// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
	var lyric = "i try it if it feels right this feels nice ive been down and lost for days glad i found you on the way when the day gets better the night gets brighter i always feel this way through the hills i hear you callin miles and miles away we up all night from dawn to dusk its always poppin i fell in love fell outta love we both had options i played the drums she rolled the drugs i rocked the club we both throw up we was the band you never heard before you got that tat above your crack and on your cat you be right back your momma never know we were rollin rollin rollin rollin stones when im all alone i wish you had a clone i take that puff you take that puff you know we never care to overdose i try it if it feels right oh this feels nice ive been down and lost for days glad i found you on the way when the day gets better the night gets brighter i always feel this way through the hills i hear you callin miles and miles away shit i try it if it feels nice shit this kinda feels nice mmiles and miles away miles and miles away when youre home alone in the mood i know you wanna move i know you wanna dance i know you gettin ready to take the night away when youre home alone in the mood i know you wanna move i know you wanna dance i know youre gettin ready to chase the night away oooh you love me darling";
	var words = {};
	var words_attr = [];
	string_handle(lyric);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = '#300a13';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px arial'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}