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
            //$( "#global-nav" ).hide();
            
        } else if (openSesame(toggle) === true) {
            slideTop.close();
            //$( "#global-nav" ).show();
        }
        
        if ($(window).width() > 770) {
            if (openSesame(toggle) === false) {
                slideTop.open();
                $( "#global-nav" ).hide();

            } else if (openSesame(toggle) === true) {
                slideTop.close();
                $( "#global-nav" ).show();
            }        
        }
    });
    
    //HIDE GLOBAL NAV
    /*function resize() {
        if ($(window).width() < 480) {
         $('#global-nav').css('display', 'none');
        }
        else {$('#global-nav').css('display', 'block');}
    }*/ 
    
    //TEST ARRAY FOR AUTOCOMPLERE
    $(function() {
      var availableTags = [
        "Springfield, VA", "Springfield, IL", "Charlotte, NC", "Springfield, MO", "Atlanta, GA", 
      ];

      $(".autocomplete").autocomplete({
        source: availableTags
      });
    });
    
    //HOMEPAGE SLIDER
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide"
      });
    });
    
    $(function() {
        $('.item').matchHeight(options);
    }); 
    
    function heightsEqualizer(selector) {
        var elements = document.querySelectorAll(selector),
            max_height = 0,
            len = 0,
            i;

        if ( (elements) && (elements.length > 0) ) {
            len = elements.length;

            for (i = 0; i < len; i++) { // get max height
                elements[i].style.height = ''; // reset height attr
                if (elements[i].clientHeight > max_height) {
                    max_height = elements[i].clientHeight;
                }
            }

            for (i = 0; i < len; i++) { // set max height to all elements
                elements[i].style.height = max_height + 'px';
            }
        }
    }

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            heightsEqualizer('.js-equal-height');
        });
        window.addEventListener('resize', function(){
            heightsEqualizer('.js-equal-height');
        });
    }

    setTimeout(function () { // set 1 second timeout for having all fonts loaded
        heightsEqualizer('.js-equal-height');
    }, 1);   
});