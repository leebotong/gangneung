$(document).ready(function(){
	
	var obj = $(".no");
	
	for( var i=0; i<obj.length;i++ ){
			obj.eq(i).text(i+1);
	}

	
	var gnb =  $(".gnbDep1").children();	
	var snb =  $(".gnbDep2").children();
	

	gnb.eq(gnbNO).addClass("navON");
	if( snb.length == 0) return false;
	snb.eq(snbNO).addClass("navON");
	
	function locationBar(){ 
		var locationDIV = $(".g_gnb");

		changeScroll();
		function changeScroll(){
			
			var scrollYpos = document.body.scrollTop;
			if (scrollYpos > 120){
				locationDIV.addClass("sGnbTop");
			}
			else{
				locationDIV.removeClass("sGnbTop");
			}
			//alert(scrollYpos);
		}
	};
	//locationBar();	
});