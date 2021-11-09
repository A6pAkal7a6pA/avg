$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();

	var naavy = $(".menu__link");

naavy.click(function() {
    naavy.removeClass("active");
    $(this).addClass('active');
});
if ($('#aside').hasClass('active')) {
	$('#aside').removeClass('active');
	$('.header__burger').removeClass('active');
} else {
	$('#aside').addClass('active');
	$('.header__burger').addClass('active');
}
});
new Vivus('my-svg', {
	type: 'oneByOne',
	duration: 100,
	animTimingFunction: Vivus.EASE_IN,
	forceRender: /^((?!chrome|android).)*(msie|edge|trident|safari)/i.test(window.navigator.userAgent)
}, function (myVivus) {
	setTimeout(function () {
		myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
	}, 0);
})

new Vivus('planet', {
	type: 'oneByOne',
	duration: 100,
	animTimingFunction: Vivus.EASE,
	forceRender: /^((?!chrome|android).)*(msie|edge|trident|safari)/i.test(window.navigator.userAgent)
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




document.querySelector('.header').addEventListener('click', () => {
	let aside = document.getElementById('aside');
	let burger = document.querySelector('.header__burger');
	if(aside.classList.contains('active')) {
		aside.classList.remove('active');
		burger.classList.remove('active');
	} else {
		aside.classList.add('active');
		burger.classList.add('active');
	}
	

})