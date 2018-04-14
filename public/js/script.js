$(document).ready(function () {
		
	$('.select-wrap select').select2({
		minimumResultsForSearch: -1
	});
	
	$('#select-currency select').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $("#select-currency")
	});
	
	

	$(".crypto-active .show-more").on("click", function (e) {
		e.preventDefault();
		$(".crypto-table tr.hidden").slideDown();
	});

	$('.news-slider-1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});
	
	$(".period-tabs li a").on("click", function (e) {
		e.preventDefault();
		$(".period-tabs li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".period-content .tab-content").removeClass("active");
		$(".period-content .tab-content").eq(index).addClass("active");
	});
	
	$(".ico-tabs li a").on("click", function (e) {
		e.preventDefault();
		$(".ico-tabs li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".project-wrapper").removeClass("active");
		$(".project-wrapper").eq(index).addClass("active");
	});
	
	$(".news-tabs li a").on("click", function (e) {
		e.preventDefault();
		$(".news-tabs li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".news-body .news-tab-content").removeClass("active");
		$(".news-body .news-tab-content").eq(index).addClass("active");
		
		if(!$(".news-body .news-tab-content").eq(index).find('.news-slider').hasClass("slick-initialized")){
			$(".news-body .news-tab-content").eq(index).find('.news-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
			});
		 }
	});
	
	$(".crypto-tab-menu li a").on("click", function (e) {
		e.preventDefault();
		$(".crypto-tab-menu li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".tab-content-wrap .tab-content").removeClass("active");
		$(".tab-content-wrap .tab-content").eq(index).addClass("active");
		
		if($(".tab-content-wrap .tab-content.active").hasClass("news-wrapper") && !$('.tab-content-wrap .tab-content.active .news-slider').hasClass("slick-initialized")){
			$('.tab-content-wrap .tab-content.active .news-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
			});
		 }
	});
	
	$(".news-body .show-more").on("click", function(e){
		e.preventDefault();
		$(this).closest(".news-tab-content").find(".news-hidden").removeClass("news-hidden");
	});
	
	$(".show-exchange").on("click", function(e){
		e.preventDefault();
		$(".overview-table-wrap table tr.hidden").slideDown(0);
	});
	
	$(".show-comments").on("click", function(e){
		e.preventDefault();
		$(".comment-items li").removeClass("hidden");
	});
	
	$(".news-wrapper .show-more").on("click", function(e){
		e.preventDefault();
		$(this).closest(".news-wrapper").find(".news-hidden").removeClass("news-hidden");
	});
	
	$(".ico-content .show-more").on("click", function(e){
		e.preventDefault();
		$(".project-block").removeClass("hidden");
	});
	
	$('.card-menu li a, .project-title .comments').smoothScroll({
		speed: 600
	});
	
	
	//  popup init
	$('.follow').magnificPopup({
	  removalDelay: 500,
	  callbacks: {
		beforeOpen: function() {
		   this.st.mainClass = this.st.el.attr('data-effect');
		}
	  },
	  midClick: true
	});

	
});
