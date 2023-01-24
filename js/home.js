$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    navigation:true,
    navigationPosition:'right',
    slidesNavigation:true,
    controlArrows: false,
    loopBottom: true,
    responsiveWidth: 1200, 

    // 메인에서 상단이동
		// $('#btnGoTop').click(function () {
		// 	//$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
		// 	$.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
		// 	//$.fn.fullpage.setScrollingSpeed(700); 효과를 없애고싶을때
		// });
  
    // afterRender: function () {
    //     setInterval(function () {
    //         $.fn.fullpage.moveSlideRight();
    //     }, 4500);
    // }
	});

	document.querySelector('.fp-slidesNav>ul').style.marginLeft='50%';

  // let logo = document.querySelector('.logo');
  // let L_index = 0;
  
  // if()
});