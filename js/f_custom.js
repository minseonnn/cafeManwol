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
    anchors: ['section1', 'section2', 'section3', 'section4'],

    afterRender: function () {
      setInterval(function () {
          $.fn.fullpage.moveSlideRight();
      }, 4500);
  }
  

	});

  

});
  
