$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    navigation:true,
    navigationPosition:'right',
    slidesNavigation:true,
    controlArrows: false,
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      if(slideIndex == ) {
        $('.logo').css('background-image', 'url(../img/logo2.png)');
      }
    },
	});

	document.querySelector('.fp-slidesNav>ul').style.marginLeft='50%';


});