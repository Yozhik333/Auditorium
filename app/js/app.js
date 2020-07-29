document.addEventListener("DOMContentLoaded", function () {

	new fullpage('#fullpage', {
		autoScrolling: true,
		controlArrows: true,
		slidesNavigation: true,
		showActiveTooltip: true,
		slidesNavPosition: 'bottom',
	})

	for (let i = 0; i < 7; i++) {
		$('.triangle').clone().appendTo('.triangle-wrapper')
	}

	$('.btn-on-off').click(function() {
		$(this).toggleClass('on')
		$('.section-one').toggleClass('off')
		$('.btn-on-off__text').html() == 'вкл' ? $('.btn-on-off__text').html('выкл') : $('.btn-on-off__text').html('вкл')
	})

	$("[data-media]").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		var videoUrl = $this.attr("data-media");
		var popup = $this.attr("href");
		var $popupIframe = $(popup).find("iframe");

		$popupIframe.attr("src", videoUrl);

		$this.closest(".page").addClass("show-popup");
	});

	$(".popup-youtube").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();

		$(".page").removeClass("show-popup");
	});

	$(".popup-youtube > iframe").on("click", function (e) {
		e.stopPropagation();
	});

	BackgroundCheck.init({
		targets: '.link-tel',
		images: '.demo-css'
	});


});

BackgroundCheck.refresh();