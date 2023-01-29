$(document).ready(function(){
  let rs = "";
  function load_data(cate, item) {
    rs = ITEM_LIST[cate][item]; 

    console.log(rs); 

    $('.detail_img_box > #deal_img').attr('src', rs.src)
    $('.pro_title').text(rs.title);
    $('#s_price').text(rs.s_price.toLocaleString('ko'));

    // 색 옵션 버튼 생성
    // rs.opt_color => "red,green,blue"
    
    rs_opt_color=rs.opt_color.split(",");  
    
    console.log(rs_opt_color);

    for(let i=0; i<rs_opt_color.length; i++) {
        let tmp_el = `<div class="btn_color ${rs_opt_color[i]}" style="background-color:${rs_opt_color[i]}" id="${rs_opt_color[i]}"></div>`;
        $('.opt_box').append(tmp_el);
    }

}

  let cate_no = get_url_info('cate');
  let item_no = get_url_info('item');
  load_data(cate_no, item_no);

  $(document).on('click','.btn_color', function(){ 
    // 클릭할 당시의 리스크 알맹이 개수
    let list_count = $('.opt_selected').children().length;
    // 현재 클릭한 버튼의 아이디
    let tmp_id =$(this).attr("id");

    // 리스트에 한개라도 있으면
    if(list_count > 0) {
        let class_dupl_chk = false; // 이미 있을때-true, 없으면-false

        // 리스트 개수만큼 돌면서 현재 클릭한 버튼 관련된게 있는지 확인
        for(let i=0; i<list_count; i++) {              
            class_dupl_chk = $('.opt_selected').children('.sel_color_box').eq(i).hasClass(tmp_id);
            
            if(class_dupl_chk) break;
        } 

        if(class_dupl_chk) {
            alert("이미 선택한 옵션 입니다.")
        }
        else {
            make_opt_list(tmp_id)
        }
    }
    // 처음. 리스트에 하나도 없는 경우
    else {
        make_opt_list(tmp_id)
    }

    // $('#p_tot').text($('.txt_qty').val() * rs.s_price + "원");
    total();
    
  }); 

  $(document).on('click','.btn_qty', function(){
    qty_chg($(this).val(), $(this));
    total();
  }) 
  $(document).on('click','.btn_price_delete', function(){
    $(this).parent().parent('.sel_color_box').remove();
    total();
  }); 


  function total() {
    let final_total = 0;
    let final_qty=0;
    // 1. 클릭할 당시의 리스크 알맹이 개수
    let list_count = $('.opt_selected').children().length;
    
    // 리스트에 한개라도 있으면
    if(list_count > 0) {
        // 2. 각각의 알맹이 마다의 개수 * 값(rs.s_price)
        // 3. 변수에 각각 알맹이 돌면서 나온 값을 저장
        for(let i=0; i<list_count; i++) {
            final_qty += +$('.opt_selected').children('.sel_color_box').eq(i).children('.opt_qty').children('.txt_qty').val();
            final_total += +$('.opt_selected').children('.sel_color_box').eq(i).children('.opt_qty').children('.txt_qty').val() * rs.s_price;
        }
        
        // 4. 출력
        
        // $('#p_tot').text(final_total.toLocaleString('kr') + "원");
        let p_tot = final_total.toLocaleString('kr');
        $('.price_total').html(`<div>TOTAL: <span id="p_tot">${p_tot} 원</span> (${final_qty}개)</div>`)
        
    }
  }

  

  function qty_chg(tmp_mark, el) {


    if(tmp_mark=="+") {
        console.log(el.prev()); //'.txt_qty'
  
        let curr_qty= +el.prev().val();
        el.prev().val(curr_qty+1)
    }
    else if(tmp_mark=="-") { 
        console.log(el.next()) // '.txt_qty'
  
        let curr_qty= +el.next().val();
  
        if(curr_qty - 1 <1) {
            alert("최소 주문 수량은 1개 입니다.");
        }
        else {
            el.next().val(curr_qty-1)
        }
    }
  }
  

});






