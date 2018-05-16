$(document).ready(function () {
		
	$('.select-wrap select').select2({
		minimumResultsForSearch: -1
	});
	
	$('#select-currency select').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $("#select-currency")
	});
	 $("#select-age").on("click", function(e){
	  e.preventDefault();
	  if(!$("#select-age .select-items").hasClass("open")){
	     $("#select-age .select-items").addClass("open");
	   $("#select-age .select").addClass("open");
	  }
	  else{
	   $("#select-age .select-items").removeClass("open");
	   $("#select-age .select").removeClass("open")
	  }
	 });
	 $("#select-algo").on("click", function(e){
	 	console.log('123123123123123');
	  e.preventDefault();
	  if(!$("#select-algo .select-items").hasClass("open")){
	     $("#select-algo .select-items").addClass("open");
	   $("#select-algo .select").addClass("open");
	  }
	  else{
	   $("#select-algo .select-items").removeClass("open");
	   $("#select-algo .select").removeClass("open")
	  }
	 });
	 $(".select-wrapper").on("click", function(e){
	  e.preventDefault();
	  if(!$(".select-items").hasClass("open")){
	     $(".select-items").addClass("open");
	   $(".select").addClass("open");
	  }
	  else{
	   $(".select-items").removeClass("open");
	   $(".select").removeClass("open")
	  }
	 });
	

	$('.news-list .news-block').equalHeights();


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
	
	$(".mining-tabs li a").on("click", function (e) {
		e.preventDefault();
		$(".mining-tabs li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".project-wrapper").removeClass("active");
		$(".project-wrapper").eq(index).addClass("active");
	});
	
	$(".mining-content .show-more").on("click", function(e){
		e.preventDefault();
		$(".project-block").removeClass("hidden");
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
	
	$(".interview-tabs li a").on("click", function (e) {
		e.preventDefault();
		$(".interview-tabs li").removeClass("active");
		$(this).closest("li").addClass("active");

		var index = $(this).closest("li").index();

		$(".interview-body .interview-tab-content").removeClass("active");
		$(".interview-body .interview-tab-content").eq(index).addClass("active");
		
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
	
	$(".show-btn").on("click", function(e){
		e.preventDefault();
		$(".history-table table tr.hidden").slideDown(0);
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
	
	$(".interview-tab-content .show-more").on("click", function(e){
		e.preventDefault();
		$(".comment").removeClass("hidden");
	});
	
	$('.card-menu li a, .project-title .comments, .bottom-line .comments').smoothScroll({
		speed: 600
	});
	
	
	//  popup init
	$('.popup-link').magnificPopup({
	  removalDelay: 500,
	  callbacks: {
		beforeOpen: function() {
		   this.st.mainClass = this.st.el.attr('data-effect');
		}
	  },
	  midClick: true
	});
	
	$("#follow-popup .add-portfolio").on("click", function(e){
		e.preventDefault();
		$("#follow-popup form").removeClass("hidden");
	});
	
	$(".close-text").on("click", function(e){
		e.preventDefault();
		$.magnificPopup.close();
	});
	
	$("#follow-popup form button").on("click", function(e){
		e.preventDefault();
		var title = $("#follow-popup form input").val();
		console.log(title);
		
		var listItem = '<div class="checkbox-wrap">' +
							'<input type="checkbox" id="c">' +
							'<label for="c">' +
								'<span></span>' + title
							'</label>' +
						'</div>';
		$("#follow-popup .checkbox-list").append(listItem);
	});
	
	$(".add").on("click", function(e){
		e.preventDefault();
		$(this).closest("td").find("form").show();
	});
	
	$(".add").dblclick( function(e){
		e.preventDefault();
		$(this).closest("td").find("form").hide();
	});
	
	$(".top-head .menu-btn").on("click", function(e){
		e.preventDefault();
		$(".top-menu-wrap").addClass("opened");
		$("html, body").addClass("overflow");
	});
	
	$(".top-menu-wrap .menu-close").on("click", function(e){
		e.preventDefault();
		$(".top-menu-wrap").removeClass("opened");
		$("html, body").removeClass("overflow");
	});
	
	$(".search-btn").on("click", function(e){
		e.preventDefault();
		$(".top-search").css({
			display: "block"
		});
	});
	
	$(".top-search .input-close").on("click", function(e){
		e.preventDefault();
		$(".top-search").css({
			display: "none"
		});
	});
	
	$(window).on("resize", function(){
		if($(window).width() > 600){
			$('.main-news-slider').slick('unslick');
		}
		else{
			$('.main-news-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
			});
		}
	});
	
	if($(window).width() <= 600){
		$('.main-news-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
		});
		
	}
	
		
	$('.interview-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
		});
	
$('.active').click(function() {
  $(this ).child('img').css('transform', ' rotate(180deg)');
});

});

