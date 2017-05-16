$(document).ready(function(){
	$('#fullpage').fullpage({
		verticalCentered:false,
		sectionsColor:['white'],
		resize:true,	//随着窗口的大小而改变
		scrollingSpeed:1000,
		controlArrows:false,
		loopHorizontal:true,//silde循环滚动
		navigation:true,//小圆点导航
		navigationPosition:'right',//导航位置在右边
		slidesNavigation:true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		afterLoad: function(anchorLink, index){
		 	if(index == 2){

			}

			if(index == 3){

				var winW = $(window).width();
				if(winW <= 1440){
					var phoneH=$(".phoneImg").height() * 0.7;
				}else if(winW > 1440 && winW < 1920){
					var phoneH=$(".phoneImg").height();
				}
				$("#phone").height(phoneH);
				var phoneContenW=$("#phoneConten").width();
				$("#list").width((phoneContenW+7)*4);
				$('#list .phoneConImg').width(phoneContenW);
				var photoIndex=document.getElementById('divleft').getElementsByTagName('img');



				$("#part1").animate({
					marginLeft: "0%",
					opacity: "0",
					marginTop: "10%",
				});
				$("#part2").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#part3").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#part4").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#list #longPic").css({marginTop: "0px"});
				$('#sec_ji').css({"border":"0"});
				$('#sec_yi').css("border","0");
				$('#sec_liu').css("border","0");
				$('#sec_xia').css("border","0");


				$("#part1").animate({marginTop: "10%", marginLet: "0%", opacity: 1});
				$("#part2").animate({marginTop: "20%", marginLet: "30%"});
				$("#part3").animate({marginTop: "20%", marginLet: "30%"});
				$("#part4").animate({marginTop: "20%", marginLet: "30%"});
				$('.rightBg1').fadeIn().siblings().fadeOut();
				$('#sec_ji').css({"border":"1px solid #ffffff"});
				$(".pageBg .bg1").animate({opacity: 1});

				$('.rightBg').css({"background": "url(img/xy_map.png) center no-repeat","background-size":"contain"});


				for(var i=0;i<photoIndex.length;i++){
			  		(function(){
			  			var index = i;
			  			photoIndex[index].onclick=function(){
							var offset=index*(phoneContenW+7);			
							console.log(list);
							console.log($("#list"));
							list.style.left=-offset+'px';
							if(index==0){
								$("#part1").animate({
									marginLeft: "0",
									opacity: "1",
									marginTop: "10%",
								});
								$("#part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "0px"});
								$('.pageBg .bg1').fadeIn().siblings().fadeOut();
								$('#sec_ji').css({"border":"1px solid #ffffff"});
								$('#sec_yi').css("border","0");
								$('#sec_liu').css("border","0");
								$('#sec_xia').css("border","0");

								$('.rightBg').css({"background": "url(img/xy_map.png) center no-repeat","background-size":"contain"});
							}
							else if(index==1){
								$("#part2").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "0px"});
								$('.pageBg .bg2').fadeIn().siblings().fadeOut();
								$('#sec_yi').css({"border":"1px solid #ffffff"});
								$('#sec_ji').css("border","0");
								$('#sec_liu').css("border","0");
								$('#sec_xia').css("border","0");

								$('.rightBg').css({"background": "url(img/xy_share_big.png) center no-repeat"});
								
							}
							else if(index==2){
								$("#part3").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "-712px"});
								$('.pageBg .bg3').fadeIn().siblings().fadeOut();
								$('#sec_liu').css({"border":"1px solid #ffffff"});
								$('#sec_ji').css("border","0");
								$('#sec_yi').css("border","0");
								$('#sec_xia').css("border","0");
								
								$('.rightBg').css({"background": "url(img/xy_longPic_big.png) center bottom no-repeat","background-size":"contain"});

							}
							else if(index==3){
								$("#part4").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "-712px"});
								$('.pageBg .bg4').fadeIn().siblings().fadeOut();
								$('#sec_xia').css({"border":"1px solid #ffffff"});
								$('#sec_ji').css("border","0");
								$('#sec_yi').css("border","0");
								$('#sec_liu').css("border","0");
								
								$('.rightBg').css({"background": ""});

							}
						}
			  		})(i);		//闭包
				}

			}

			if(index == 4){

				var winW = $(window).width();
				if(winW <= 1440){
					var phoneH=$(".phoneImg").height() * 0.7;
				}else if(winW > 1440 && winW < 1920){
					var phoneH=$(".phoneImg").height();
				}
				
				$("#four_phone").height(phoneH);
				var phoneContenW=$("#four_phoneConten").width();
				$("#four_list").width((phoneContenW+7)*4);
				$('#four_list .phoneConImg').width(phoneContenW);
				var photoIndex=document.getElementById('four_divleft').getElementsByTagName('img');


				$("#four_part1").animate({
					marginLeft: "0%",
					opacity: "0",
					marginTop: "10%",
				});
				$("#four_part2").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#four_part3").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#four_part4").animate({
					marginLeft: "30%",
					marginTop: "20%",
					opacity:'0',
				});
				$("#list #longPic").css({marginTop: "0px"});
				$('#four_ji').css({"border":"0"});
				$('#four_yi').css("border","0");
				$('#four_liu').css("border","0");
				$('#four_xia').css("border","0");


				$("#four_part1").animate({marginTop: "10%", marginLet: "0", opacity: 1});
				$("#four_part2").animate({marginTop: "20%", marginLet: "30%"});
				$("#four_part3").animate({marginTop: "20%", marginLet: "30%"});
				$("#four_part4").animate({marginTop: "20%", marginLet: "30%"});
				$('.rightBg1').fadeIn().siblings().fadeOut();
				$('#four_ji').css({"border":"1px solid #ffffff"});
				

				for(var i=0;i<photoIndex.length;i++){
			  		(function(){
			  			var index = i;
			  			photoIndex[index].onclick=function(){
							var offset=index*(phoneContenW+7);			
							console.log(list);
							console.log($("#list"));
							four_list.style.left=-offset+'px';
							if(index==0){
								$("#four_part1").animate({
									marginLeft: "0%",
									opacity: "1",
									marginTop: "10%",
								});
								$("#four_part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#four_part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#four_part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "0px"});
								$('.pageBg .bg1').fadeIn().siblings().fadeOut();
								$('#four_ji').css({"border":"1px solid #ffffff"});
								$('#four_yi').css("border","0");
								$('#four_liu').css("border","0");
								$('#four_xia').css("border","0");
							}
							else if(index==1){
								$("#four_part2").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#four_part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#four_part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#four_part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "0px"});
								$('.pageBg .bg2').fadeIn().siblings().fadeOut();
								$('#four_yi').css({"border":"1px solid #ffffff"});
								$('#four_ji').css("border","0");
								$('#four_liu').css("border","0");
								$('#four_xia').css("border","0");

								
								
							}
							else if(index==2){
								$("#four_part3").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#four_part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#four_part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#four_part4").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "-712px"});
								$('.pageBg .bg3').fadeIn().siblings().fadeOut();
								$('#four_liu').css({"border":"1px solid #ffffff"});
								$('#four_ji').css("border","0");
								$('#four_yi').css("border","0");
								$('#four_xia').css("border","0");
								
								

							}
							else if(index==3){
								$("#four_part4").animate({
									opacity: "1",
									marginLeft: "0",
								});
								$("#four_part1").animate({
									marginLeft: "30%",
									marginTop: "10%",
									opacity:'0',
								});
								$("#four_part2").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#four_part3").animate({
									marginLeft: "30%",
									marginTop: "20%",
									opacity:'0',
								});
								$("#list #longPic").css({marginTop: "-712px"});
								
								$('#four_xia').css({"border":"1px solid #ffffff"});
								$('#four_ji').css("border","0");
								$('#four_yi').css("border","0");
								$('#four_liu').css("border","0");
								
								
							}
						}
			  		})(i);		//闭包
				}

			}

		},

		onLeave: function(index, direction){

			if(index == '2'){

				
			}

			if(index == '3'){
				
			}

			if(index == '4'){

				
			}
		},
		slidesNavPosition:'top'
	});//激活fullpage效果

	var ji=document.getElementById("ji");

	$("#ji").animate({
		top:'13%',
		opacity:'1',
	},1000);
	$("#yi").animate({
		left:'51%',
		opacity:'1',
	},1200);
	$("#liu").animate({
		left:'5%',
		opacity:'1',
	},1500);
	$("#xia").animate({
		top:'59%',
		opacity:'1',
	},1200);
}); 

	

	
