/**
 *	Project Name:	Vannkorn (Personal Website)
 *	Date		:	09-Aug-2014
 *	Author		:	Tepken Vannkorn
 */
 
$( function() {
	var Vannkorn = {
		init: function() {
			this.test();
		},
		
		test: function() {
			alert('It works!');
		}
	}
	
	$(document).ready( function() {
		Vannkorn.init();
	});
});