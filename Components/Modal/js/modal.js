/*jS file to open and close the modal dialog*/

$(document).ready(() => {
  //clicking on the launch modal button
  $(".btn").click(() => {
    //modal will be displayed
    $(".modal").show();
  });

  $(".close").click(() => {
    //clicking on the close button will close the modal (i.e. hides)
    $(".modal").hide();
  });

  $(window).click((e) => {
    //While modal is being displayed and if user clicks anywhere other than on modal,
    //then close the modal

    let modal = $('.modal')[0]; //Get the HTML DOM Object of the modal

    if (e.target == modal) {
      $(".modal").hide();
    }
  });
});