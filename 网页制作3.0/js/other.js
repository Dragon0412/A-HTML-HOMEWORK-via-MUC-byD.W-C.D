$(document).ready(function(){
	$(".mappic").hover(function(){
	$(".zoom").show();
	$(".zoom").animate({marginTop:"50px"},"fast");
	$(".maplink").slideToggle();
	},function(){
	$(".zoom").animate({marginTop:"-40px"},100);
	$(".maplink").slideToggle();
	$(".zoom").hide();
	}