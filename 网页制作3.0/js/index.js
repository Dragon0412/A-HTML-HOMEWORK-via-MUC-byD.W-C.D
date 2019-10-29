$(function(){
	$("#listshow").KinSlideshow({
			moveStyle:"down",
			intervalTime:2,
			titleBar:{titleBar_height:30,titleBar_bgColor:"#000000",titleBar_alpha:0.5},
			mouseEvent:"mouseover",
			titleFont:{TitleFont_size:8,TitleFont_color:"#FF0000"},
			btn:{btn_bgColor:"#666666",btn_bgHoverColor:"#f00",  
      btn_fontColor:"#fff",btn_fontHoverColor:"#fff",btn_fontFamily:"Verdana",  
      btn_borderColor:"#999999",btn_borderHoverColor:"#FF0000",  
      btn_borderWidth:1,btn_bgAlpha:0.9}
	});
})


function picfloat(){
speed=20;
var div=document.getElementById("pichezi");
var h1=document.getElementById("hezi1");
var h2=document.getElementById("hezi2");
h2.innerHTML=h1.innerHTML;
function xunhuan(){
if(h2.offsetWidth-div.scrollLeft<=0)
div.scrollLeft-=h1.offsetWidth;
else
div.scrollLeft++;
}
var timer=setInterval(xunhuan,speed);
div.onmouseover=function(){clearInterval(timer);}
div.onmouseout=function(){timer=setInterval(xunhuan,speed);}
}
picfloat();


$(document).ready(function(){
	$(".mappic").hover(function(){
	$(".zoom").show();
	$(".zoom").animate({marginTop:"50px"},"fast");
	$(".maplink").slideToggle();
	},function(){
	$(".zoom").animate({marginTop:"-40px"},100);
	$(".maplink").slideToggle();
	$(".zoom").hide();
	})	
	
$(function(){
$(window).scroll(function(){
var scroH = $(this).scrollTop();
$("#top").click(function(){
    var dsq=setInterval(scrollMove,20);
     function scrollMove(){
	 var x=document.documentElement.scrollTop;
		document.documentElement.scrollTop = x/1.1;
        if(x<1)clearInterval(dsq);
		}
	})
if(scroH>=50){
    $("#top").show();
	}
else if(scroH<50){
		$("#top").hide();
   }
	})
	})
})

