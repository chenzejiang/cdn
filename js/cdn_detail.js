// 所有模块都通过 define 来定义
define(['Clipboard'],function(Clipboard){
  return {
    base_url:"//chenzejiang.com/cdn/frame/",
    domClick:function(data){
       var cdn_detail = $("#cdn_detail");
       var _this = this; // 这里作用域的this
       $("#cdn_list a").bind("click",function(){
         var that = $(this);
         var _id = that.attr("id");
         cdn_detail.show(); // 遮罩层显示
         cdn_detail.find("h2").html(that.html()); // 标题

         var _html = '';
         var _data = data[_id];

         for (var i = 0; i < _data.length; i++) {
           var txt_url = _this.base_url+_id+'/'+_data[i];
           var copy_url  = txt_url;
           // 区分 js || css
           if(copy_url.substring(copy_url.length-2,copy_url.length) === 'js'){
              var copy_link = '&lt;script src=&quot;'+ txt_url +'&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;'
              var copy_txt = 'script';
           }else{
              var copy_link = '&lt;link rel=&quot;stylesheet&quot; href=&quot;'+ txt_url +'&quot; type=&quot;text/css&quot; /&gt';
              var copy_txt = 'link';
           }

           _html += '<li>'+
                          '<p>'+ txt_url +'</p>'+
                          '<a data-clipboard-text="'+ copy_link +'" href="###" class="copy_link">复制&lt;'+ copy_txt +'&gt;标签</a>'+
                          '<a data-clipboard-text="'+ copy_url +'" href="###" class="copy_url">复制链接</a>'+
                     '</li>';
         }
         $("#ul_deatil").html(_html);
         // 增加复制功能
         var ul_a = $("#ul_deatil a");
         for (var i = 0; i < ul_a.length; i++) {
            var clipboard = new Clipboard(ul_a[i]);
         }
       });
       // 点击隐藏遮罩层
       cdn_detail.bind("click",function(e){
          cdn_detail.hide();
       });
       // 内容点击阻止冒泡
       $("#cdn_detail_box").bind("click",function(e){
         e.stopPropagation();
         e.preventDefault();
       });
    }
  };
});
