jQuery(window).bind('load', function() {
	jQuery('.foreground').toggle('slow');
});
jQuery(function() {
	jQuery('.view-portfolio .views-field-field-portfolio-image a').hide();
});
jQuery(window).bind('load', function() {
	 var i = 1;
	 var imgs = jQuery('.view-portfolio .views-field-field-portfolio-image a').length;
	 var int = setInterval(function() {
		 //console.log(i); check to make sure interval properly stops
		 if(i >= imgs) clearInterval(int);
		 jQuery('.view-portfolio .views-field-field-portfolio-image a:hidden').eq(0).fadeIn(300);
		 i++;
	 }, 300);
});


jQuery(function(){
	jQuery('.view-portfolio .views-row .views-field-field-portfolio-image a, .banner').hover(function(){
		jQuery(this).find('img').stop().animate({opacity:'.4'})
	},

	function(){
		jQuery(this).find('img').stop().animate({opacity:'1'})
	})
})
jQuery(function(){
	jQuery('a.follow-link, #back-top span#button').hover(function(){
		jQuery(this).stop().animate({opacity:'.5'},100)
	},
		function(){
			jQuery(this).stop().animate({opacity:'1'},100)
		}
	)
	jQuery('.page-gallery .view-portfolio .views-row:nth-child(4), .page-gallery .view-portfolio .views-row:nth-child(8), .page-gallery .view-portfolio .views-row:nth-child(12), .page-gallery-3-cols .view-portfolio .views-row:nth-child(3), .page-gallery-3-cols .view-portfolio .views-row:nth-child(6), .page-gallery-3-cols .view-portfolio .views-row:nth-child(9)').addClass('last')
})