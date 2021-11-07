new Vivus('my-svg', {
	type: 'oneByOne',
	duration: 100,
	animTimingFunction: Vivus.EASE_IN
}, function (myVivus) {
	setTimeout(function () {
		myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
	}, 0);
})

new Vivus('planet', {
	type: 'oneByOne',
	duration: 100,
	animTimingFunction: Vivus.EASE
}, function (myVivus) {
	setTimeout(function () {
		myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
	}, 100);
})

let modeButton = document.querySelector('#toggle');
let mode = document.querySelector('.wrapper');

modeButton.addEventListener('click', (e) => {
	if (modeButton.checked === false) {
		mode.classList.add('dark');
		mode.classList.remove('light');
	} else {
		mode.classList.add('light');
		mode.classList.remove('dark');
	}
});
$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});
});
