/**
 *	Project Name:	Vannkorn (Personal Website)
 *	Date		:	09-Aug-2014
 *	Author		:	Tepken Vannkorn
 */
 
$( function() {
	var Vannkorn = {
		init: function() {
			this.closeNavbar();
		},
		
		closeNavbar: function() {
			$('.navbar-collapse li a').each( function() {
				$(this).click( function( e ) {
					var mq = window.matchMedia( "(max-width: 767px)" );
					if ( mq.matches ) {
						// Call to native toggle action of Bootstrap 3
						$(".navbar-toggle").click();
					}
				});
			});
		}
	}
	
	$(document).ready( function() {
		Vannkorn.init();
	});
});