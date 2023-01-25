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

    afterRender: function () {
      setInterval(function () {
          $.fn.fullpage.moveSlideRight();
      }, 4500);
  }
  

	});

	document.querySelector('.fp-slidesNav>ul').style.marginLeft='50%';

});
  
