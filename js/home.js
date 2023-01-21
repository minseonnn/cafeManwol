

//스크롤 이벤트 
window.addEventListener("wheel", function(e){
  e.preventDefault();
},{passive : false});

var page = 1;
var $html = $('html')
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e) {
  if($html.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
    // deltaY값이 양수라면 휠이 아래로 간 것 = 페이지 내림
      if(page == 4) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
    // deltaY값이 음수라면 휠을 위로 = 페이지 올림
      if(page == 1) return;
      page--;
  }

  var posTop = $(window).height() * (page-1);
  $html.animate({scrollTop : posTop});
  //휠을 한번 내릴 때 마다 뷰포트의 크기만큼 움직임
})
