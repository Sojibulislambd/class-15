// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
$(document).ready(function(){
  $(".homepage-slides").owlCarousel({
      items:1,
      loop:true,
      autoplay:false,
      dot:false,
      nav:true,
      navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
  });
    $('.product-list').masonry();
    
})