(function(){
	var _style='.ie_mask{width:100%;height: 100%;background: #000000;z-index:999;position:fixed;opacity:0.5;filter:alpha(opacity=50);top:0;left:0;}'+
	'		.ie_box{font-family: "Microsoft YaHei";width:900px;height: 494px;font-size: 0;background: #ffffff;z-index:1000;position: fixed;top:50%;left: 50%;margin-top: -247px;margin-left: -450px;}'+
	'		.ie_fixed{_position: absolute;_clear: both;   '+
	'		       _top:expression(eval(document.compatMode &&   '+
	'		               document.compatMode==\'CSS1Compat\') ?   '+
	'		               documentElement.scrollTop   '+
	'		               +(documentElement.clientHeight-this.clientHeight) - 1   '+
	'		               : document.body.scrollTop   '+
	'		               +(document.body.clientHeight-this.clientHeight) - 1); '+
	'		}'+
	'		.ie_box ._tip{text-align: center;}'+
	'		.ie_box ._tip img{margin:64px 0 24px 0;}'+
	'		.ie_box ._tip p{font-size: 24px;line-height: 36px;color: #404040;}'+
	'		.ie_box ._btn{padding:0 25px;white-space:nowrap;}'+
	'		.ie_box ._btn .btn_a{width:400px;text-align: center;display: inline-block; *display: inline; *zoom: 1;}'+
	'		.ie_box ._btn .btn_a img{display: block;margin:0 auto;}'+
	'		.ie_box ._btn .btn_a a{color: #6a7ac9;font-size: 16px;line-height: 24px;margin:8px 0;text-decoration: none;display: inline-block; *display: inline; *zoom: 1;}'+
	'		.ie_box ._btn .btn_a a:hover{text-decoration: underline;}';

	var _html = '<style type="text/css">'+  _style +'</style>'+
	'	<div class="ie_mask ie_fixed"></div>'+
	'	<div class="ie_box ie_fixed">'+
	'   		<div class="_tip">'+
	'   			<img src="https://static.7m.com.cn/images/hack/face_icon.png"/>'+
	'   			<p>你正在使用的浏览器版本过低，将不能正常浏览和使用。</p>'+
	'   		</div>'+
	'   		<div class="_btn">'+
	'			<div class="btn_a">'+
	'				<img src="https://static.7m.com.cn/images/hack/ie_icon.png"/>'+
	'				<a href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank">升级 IE 浏览器</a>'+
	'			</div>'+
	'			<div class="btn_a">'+
	'				<img src="https://static.7m.com.cn/images/hack/google_icon.png"/>'+
	'				<a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">使用 Google Chrome 浏览器</a>'+
	'			</div>'+
	'   		</div>'+
	'	</div>';

	function ie678(){
		var OsObject = "";
		if(navigator.userAgent.indexOf("MSIE")>0) {
			var browser=navigator.appName
			var b_version=navigator.appVersion
			var version=b_version.split(";");
			var trim_Version=version[1].replace(/[ ]/g,"");
			if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
			{
				document.write(_html);
			}else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
			{
				document.write(_html);
			}else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
				document.write(_html);
			}
		}
	}
	ie678();
})();