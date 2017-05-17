require.config({
    shim: {
      'jquery.scrollbar': ['jquery']
    },
    paths: {
      "zhihu_canvas":"../frame/zhihu_canvas/zhihu.canvas.es5",
      "jquery":"../frame/jquery/jquery-1.11.0.min",
      'axios':'../frame/axios/axios',
      'jquery.scrollbar' : '../js/jquery.scrollbar',
      'Clipboard':'../js/clipboard.min'
    }
});

require(['../frame/zhihu_canvas/zhihu.canvas.es5.js']);
require(['jquery','jquery.scrollbar'],function($){
  require(['cdn','cdn_detail'],function(cdn,cdn_detail){
     var app = Object.assign(cdn,cdn_detail);   // 合并
     app.init();
  });
});
