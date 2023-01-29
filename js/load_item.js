const cate_arr = ['all', 'manwol_base', 'manwol_goods', 'gift', 'group_order']; 

function make_sec(product_id) {  
  let list = `<div class="product" id="${product_id}">
                  <div class="pro_body"></div>
              </div>`;
  $('.main .pro_container').append(list)
}

function load_list(cate_idx, start_idx, show_qty) { 
  
  let rs = ITEM_LIST[cate_idx]; 


  let tmp_qty = start_idx+show_qty;
  if(tmp_qty > rs.length) {
      tmp_qty = rs.length
  }

  for(let i=start_idx; i<tmp_qty; i++) {
      let list = `<div class="item_box">
                      <div class="item_img">
                          <a href="deal.html?cate=${cate_idx}&item=${rs[i].item_no}"> 
                              <img src="${rs[i].src}" alt="">`;

              if(cate_idx == 1)
                  list += `   <img src="${rs[i].covered_src}" alt=""> `;

                  list += `</a> 
                      </div>
                      <div class="item_info">
                        <a href="deal.html?cate=${cate_idx}&item=${rs[i].item_no}"> 
                          <div class="item_title">${rs[i].title}</div>
                          <div class="item_s_price"><div>${rs[i].s_price}</div></div>
                        </a>  
                      </div>
                  </div>`;
      $(`#${cate_arr[cate_idx]} > .pro_body`).append(list); 

    
  }
}

function get_url_info(key) {
  let url = location.href; 
  url = url.split("?"); 

  if(url.length > 1) { 
      url = url[1];           
      url = url.split('&');   

      for(let i=0; i<url.length; i++) {
          let tmp_url = url[i].split("="); 
         

          if(tmp_url[0] == key) {
              return tmp_url[1]
          }
      }
      return -1;
  }

  url = url[1]; 
  url = url.split("=");

  if(url[0] == key) { 

  }
} 