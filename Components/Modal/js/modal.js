$(document).ready(()=>{
	$(".btn").click(()=>{
		$(".modal").show();
	});

	$(".close").click(()=>{
		 $(".modal").hide();
	});

	$(window).click((e)=>{
		var modal = $('.modal')[0];
		if(e.target == modal){
			$(".modal").hide();
		}
	});
});