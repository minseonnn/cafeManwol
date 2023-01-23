let s1 = $('#btn1').offset().top;
let s2 = $('#btn2').offset().top;
let s3 = $('#btn3').offset().top;
let s4 = $('#btn4').offset().top;

$('#btn1').click(function(){
  $(window).scrollTo(s1);
});
$('#btn2').click(function(){
  $(window).scrollTo(s2);
});
$('#btn3').click(function(){
  $(window).scrollTo(s3);
});
$('#btn4').click(function(){
  $(window).scrollTo(s4);
});
