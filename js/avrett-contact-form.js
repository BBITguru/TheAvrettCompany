$(document).ready(function () {
	// POP UP ON FIRST VISIT FUNCTION DISABLED 10-5-2012 - MIKE
	//if (document.cookie.indexOf('visited=true') === -1) {
	//	var doPulsate = true;
	//    var expires = new Date();
	//    expires.setDate(expires.getDate()+30);
	//    document.cookie = "visited=true; expires="+expires.toUTCString();
	//	$(".iframe").colorbox({iframe:true, returnFocus:false, width:"320px", height:"480px", open:true, scrolling:false, onClosed:function(){
	//		if(doPulsate){
	//		$("a#cl").attr("style","background-color:#8F0000").effect('pulsate','slow',function(){$("a#cl").attr("style","background-color:none")});
	//		doPulsate = false;
	//		} 
	//	}
	//	});
	//}
	$(".iframe").colorbox({
		iframe: true,
		returnFocus: false,
		width: "320px",
		height: "480px",
		scrolling: false
	});
});