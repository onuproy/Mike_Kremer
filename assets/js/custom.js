jQuery(document).ready(function(){ 

	// Home owlCarousel
	jQuery('.hero_slider_area').owlCarousel({
		stagePadding: 0,
		loop: true,
		autoplay: false,
		margin: 0,
		nav: false,
		dots: true,
		items: 1,
	});

	
   //Dropdown menu 
   jQuery('.country_dropdown').click(function () {
	jQuery('.country_dropdown span').toggleClass('active_arrow');
		return false;
	});
	jQuery('.country_dropdown ul li').click(function () {
		jQuery('.country_dropdown span').removeClass('active_arrow');
		return false;
			
	});

	

		
		
	

});