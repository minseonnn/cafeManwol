$(document).ready(function(){

  let cate_no = get_url_info("cate");

  make_sec(cate_arr[cate_no]);
  
  const show_oneTime_qty = 3 * 3;
  let tmp_one_shot = 0 
  load_list(cate_no, tmp_one_shot, show_oneTime_qty )
  tmp_one_shot+=show_oneTime_qty;


})
