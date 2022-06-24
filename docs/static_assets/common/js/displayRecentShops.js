/**
 * 最近見た店舗を表示する関数 (jQuery, jQuery Cookie必須)
 * @param string selector 表示するセレクタ
 * @param integer num 最近見た店舗の数
 */
function displayRecentShops(selector) {
    if(jQuery(selector).data('recent-shops-extracted')){
        return ;
    }
    var cookies, filtered;
    cookie = jQuery.cookie;
    cookie.defaults={secure:true};
    cookies = cookie();
    filtered = Object.keys(cookies).filter(
        function(element, index, array){
            var match = element.match(/^recent-shop-[0-9]+$/);

            return match === null ? false : true;
        }
    );

    var is_shopdetail = location.pathname.search(/shop\/.+/);
    var is_current_browsing_shop = 0;
    filtered.sort();
    filtered.map(
      function(element, index, array){
        var i, cnt, json, data, keys, shop_data;
        json = jQuery.cookie(element);
        data = jQuery.parseJSON(json);
        keys = Object.keys(data);
        for(i = 0, cnt = keys.length; i < cnt; ++i){
          shop_data = data[keys[i]];
          jQuery(this.selector).each(
            function(e_index, element) {
              if (is_shopdetail == 1) { //店舗ページでは今見ている店舗を除いて3件表示
                if (index < 3) {
                  if (location.pathname != ('/' + shop_data.href)) {
                    jQuery(this).append('<li><a href="/'+shop_data.href+'">'+shop_data.name+'</a></li>');
                  } else {
                    ++is_current_browsing_shop;
                  }
                } else if (index == 3 && is_current_browsing_shop > 0) {
                  jQuery(this).append('<li><a href="/'+shop_data.href+'">'+shop_data.name+'</a></li>');
                }
              } else { //店舗ページ以外では上位3件のみ表示
                if (index < 3) {
                  jQuery(this).append('<li><a href="/'+shop_data.href+'">'+shop_data.name+'</a></li>');
                }
              }
            }
          );
        }
      }, {'selector' :selector}
    );
    jQuery(selector).data('recent-shops-extracted', true);

    jQuery(document).ready(function($) {
        /*　最近見た店舗がある場合は表示にする */
        if( $(".contents_footer_first ul.list_003 li").length > 0 ) { //PC共通フッター
          $(".item5.recent-shop").css('display', 'block');
        }
        if( $(".block_recent ul li").length > 0 ) { //PCフロント,静的共通サイドバー
          $(".block_recent").css('display', 'block');
          $(".recent-shop").css('display', 'block');
        }
        if( $(".recent-shop ul.list_001 li").length > 0 ) { //SP共通フッター
          $(".recent-shop").css('display', 'block');
          $(".recently").css('display', 'block');
        }

    });
}
