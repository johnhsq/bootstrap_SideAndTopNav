$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    // sidebar is closed when first load
    isClosed = false;

  
  $('.dismiss').click(function(){
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  });

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      // close the sidebar
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      // open the sidebar
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});