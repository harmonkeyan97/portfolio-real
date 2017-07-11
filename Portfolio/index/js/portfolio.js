//Fade in content
$(document).ready(function() {
	$('#nav').fadeIn(6000);
    $('#container').fadeIn(6000);
});
//Click for 'About' section scroll animation
$("#pdown1").click(function(){
    $("html, body").animate({
        scrollTop: $('#about').offset().top 
    }, 2000);
});
//Click for 'Skills' section scroll animation
$("#pdown2").click(function(){
    $("html, body").animate({
        scrollTop: $('#skills').offset().top 
    }, 3000);
});
//Click for 'Portfolio' section scroll animation
$("#pdown3").click(function(){
    $("html, body").animate({
        scrollTop: $('#portfolio').offset().top 
    }, 5000);
});
//Click for 'Contact' section scroll animation
$("#pdown4").click(function(){
    $("html, body").animate({
        scrollTop: $('#contact').offset().top 
    }, 5000);
});
//Start at top of page on refresh
window.onbeforeunload = function() {window.scrollTo(0,0);};