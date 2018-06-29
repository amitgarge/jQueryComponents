/*jS file to make navbar responsive*/

$(document).ready(() => {
  $(".hamburger").click(() => {
    /*This "hamburger" icon will be displayed when the screen size is small (i.e <= 467px)*/

    //Clicking on this icon the 'menu' class will be added with 'responsive' class 
    //i.e. open the menu
    if ($("#navbar").attr("class") === "menu") {
      $("#navbar").addClass("responsive");
    } else
      //clicking again on the icon will remove the class responsive from "menu responsive"
      //and hence, the menu will be closed
      $("#navbar").removeClass("responsive");
  });
});