// 所有模块都通过 define 来定义
define(['cdn_detail','axios'],function(cdn_detail,axios){
    var cdn = {
       file_data:null,
       // 请求接口
       ajaxFn:function(){
          axios.get('//cdn.chenzejiang.com/data.php',{
            params: {
            }
          })
          .then(function (response){
            cdn.file_data = response.data;  // 存储数据到全局
            cdn.domHtml(response.data); // 渲染数据的html
            cdn.domClick(response.data);
            cdn.input_seach();// 绑定input 搜索
          })
          .catch(function (error) {
            console.log(error);
          });
       },
       // 拼接字符串
       domHtml:function(data){
         var _html = '';
         var _num = 0; // 总长度
         for (var item in data) {
           _num ++;
           _html +='<a target="_blank" id="'+ item +'" href="javascript:void(0);">'+
                   '  <h4 class="package-name">'+ item +'</h4>'+
                   '</a>';
         }
         $("#frame_num").html(_num);
         $("#cdn_list").html(_html);
       },
       // input 输入筛选
       input_seach:function(){
         $("#input_search").bind("input change",function(){
            var _val = $(this).val();
            var cdn_list = $("#cdn_list a");
            cdn_list.each(function(i){
                var _that = $(this);
                var _id = _that.attr("id");
                if(_id.indexOf(_val) === -1){
                   _that.hide();
                }else{
                   _that.show();
                }
            });
         });
       },
       init:function(){
         this.ajaxFn();
         jQuery('.scrollbar-inner').scrollbar();
       }
    }
    return cdn;
});
