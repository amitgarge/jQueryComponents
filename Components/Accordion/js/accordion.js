/*The js file tp expand and collapse the items*/

$(document).ready(() => { //The document.ready() fun starts here
  /*Initially hide second and third item's body*/
  $("#body-one").show();
  $("#body-two").hide();
  $("#body-three").hide();

  /*Clicking on first item's header*/
  $("#headingOne").click(() => {
    /* Expand/collapse (toggle) the body of the first item and hide other two*/
    $("#body-two").slideUp(1000);
    $("#body-three").slideUp(1000);
    $("#body-one").slideToggle(1000);
  });

  /*Clicking on second item's header*/
  $("#headingTwo").click(() => {
    /* Expand/collapse (toggle) the body of the second item and hide other two*/
    $("#body-one").slideUp(1000);
    $("#body-three").slideUp(1000);
    $("#body-two").slideToggle(1000);
  });

  /*Clicking on third item's header*/
  $("#headingThree").click(() => {
    /* Expand/collapse (toggle) the body of the third item and hide other two*/
    $("#body-one").slideUp(1000);
    $("#body-two").slideUp(1000);
    $("#body-three").slideToggle(1000);
  });
});