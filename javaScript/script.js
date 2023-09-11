$(function () {
  $(".contentH").click(function () {

    //Checking
    if ($(this).hasClass("active")) {
      let healdAttr = $(this).attr("titlehead");
      $('[contenthead = "' + healdAttr + '"]').slideUp(500);
      $(this).removeClass("active");
      return;
    }

    //To Slide up
    let activeAttr = $(".active").attr("titlehead");
    $(".active").removeClass("active");
    $('[contenthead = "' + activeAttr + '"]').slideUp(500);

    //to slide down
    let headAttr = $(this).attr("titlehead");
    $('[contenthead = "' + headAttr + '"]').slideDown(500);
    $(this).addClass("active");
  });
});
