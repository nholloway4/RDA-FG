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
  $(function() {
    $('.refine-accordion-btn').click(function() {
      $('.refine-accordion-content').slideUp('normal');
      $('.refine-accordion-btn').removeClass('refine-accordion-active');
      if ($(this).next().is(':visible') == true) {
        $('.refine-accordion-btn').removeClass('active');
      }
      if ($(this).next().is(':hidden') == true) {
        $(this).next().slideDown('normal');
        $(this).addClass('refine-accordion-active');
        //$(this).css('border-bottom' , 'transparent');
      }
      $('.refine-accordion-content').one().removeClass('show');
    });

    $('.refine-accordion-content').hide();
    $('.show').show();
  });    
    /**
    * Slide top instantiation and action.
    */
    var slideTop = new Menu({
    wrapper: '#nav-wrapper',
    type: 'slide-top',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
    });

    var toggle = 0;
    jQuery("#c-button--slide-top").click(function() {
        toggle++;
        var openSesame = function(flag) {
            return (flag % 2 === 0) ? true : false;
        };
        if (openSesame(toggle) === false) {
            slideTop.open();
            $( "#global-nav" ).hide();
            
        } else if (openSesame(toggle) === true) {
            slideTop.close();
            $( "#global-nav" ).show();
            
            resize();
        }
    });
    
    
    function resize() {
        if ($(window).width() < 480) {
         $('#global-nav').css('display', 'none');
        }
        else {$('#global-nav').css('display', 'block');}
    } 
    
    $(function() {
      var availableTags = [
        "Springfield, VA", "Springfield, IL", "Charlotte, NC", "Springfield, MO", "Atlanta, GA", 
      ];

      $(".autocomplete").autocomplete({
        source: availableTags
      });
    });
    
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide"
      });
    });
});




//removeExtraWord();

    /*function removeExtraWord() {
        if ($(window).width() < 480) {
            $(".page-heading-title h2").each(function() {
                var text = $(this).text();
                text = text.replace("Contact Us", "Contact");
                $(this).text(text);
            });
        }
        else if ($(window).width() > 480) {
            $(".page-heading-title h2").each(function() {
                var text = $(this).text();
                text = text.replace("Contact Us", "Contact Us");
                $(this).text(text);
            });            
        }
    }*/  
