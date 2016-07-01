(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

$(".c-hamburger--htx").on("click", function () {
    $(this).toggleClass("active");
});


//Accordion

$(document).ready(function() {

  $(function() {
    $('.accordion-btn').click(function() {
      $('.accordion-content').slideUp('normal');
      $('.accordion-btn').removeClass('accordion-active');
      if ($(this).next().is(':visible') == true) {
        $('.accordion-btn').removeClass('active');
      }
      if ($(this).next().is(':hidden') == true) {
        $(this).next().slideDown('normal');
        $(this).addClass('accordion-active');
        //$(this).css('border-bottom' , 'transparent');
      }
      $('.accordion-content').one().removeClass('show');
    });

    $('.accordion-content').hide();
    $('.show').show();
  });

});



function removeExtraWord() {

    var width = screen.width;
    
    if ( width < 480 ){
        
        $(".page-heading-title h2").each(function() {
            var text = $(this).text();
            text = text.replace("Contact Us", "Contact");
            $(this).text(text);
        });
    }
    
    else {
     
        if ( width > 480 ) {
            
            $(".page-heading-title h2").each(function() {
                var text = $(this).text();
                text = text.replace("Contact Us", "I'm BIG");
                $(this).text(text);
            });
        }
    }
}

removeExtraWord();
