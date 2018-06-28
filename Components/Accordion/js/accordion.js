$(document).ready(()=>{
	$("#body-one").hide();
	$("#body-two").hide();
	$("#body-three").hide();

	$("#headingOne").click(()=>{
		$("#body-one").slideToggle(1000);
	});
	$("#headingTwo").click(()=>{
		$("#body-two").slideToggle(1000);
	});
	$("#headingThree").click(()=>{
		$("#body-three").slideToggle(1000);
	});
});