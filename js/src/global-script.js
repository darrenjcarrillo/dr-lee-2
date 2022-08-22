/*
    Use the command "npm install" in the theme directory to install these packages
    Make sure to use
    npm run dev
    to start the server
*/

import $ from "jquery";

import "slick-carousel/slick/slick";

// core version + navigation, pagination modules:
import {
  Swiper,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
  Scrollbar,
  EffectCoverflow,
} from "swiper/js/swiper.esm.js";
// remove /js/ in wp version

// configure Swiper to use modules
Swiper.use([Navigation, Thumbs, Pagination, Autoplay]);

window.$ = $;
window.jQuery = $;

// slider
// ---------------------------------------------------------------------------------------------------
 


var textimgslide = new Swiper(".textimgslide", {
  // Optional parameters
  loop:true,

  pagination: {
    el: ".textimgslide .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".textimgslide .swiper-button-next",
    prevEl: ".textimgslide .swiper-button-prev",
  },
});


var treatmentsslide = new Swiper(".treatmentsslide", {
  // Optional parameters
  loop:true,

  pagination: {
    el: ".treatmentsslide .swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".treatmentsslide .swiper-button-next",
    prevEl: ".treatmentsslide .swiper-button-prev",
  },
});









// Fade in animations
// ---------------------------------------------------------------------------------------------------
var callback = function() {
  // Handler when the DOM is fully loaded
  var t = document.querySelectorAll(".rvl");

  t.forEach(function(n) {
    n.getBoundingClientRect().top < window.innerHeight / 1.3 &&
      n.classList.add("animate");
  });
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}

function aniMate(n) {
  var t = document.querySelectorAll(n);

  window.addEventListener("scroll", function() {
    t.forEach(function(n) {
      n.getBoundingClientRect().top < window.innerHeight / 1.3 &&
        n.classList.add("animate");
    });
  });
}

aniMate(
  ".rvl,.imageanimleft, .fade-up-stop , .fade-right-stop, .fade-left-stop ,.tanbox,.greybox .fade-in , .fade-in-left , .fade-in-right , .scale-down"
);

// Scroll to top button
// ---------------------------------------------------------------------------------------------------
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header-container').addClass('act');
    } else {
      $('#header-container').removeClass('act');
    }
  });
});

window.addEventListener('load', event => {
  let styleM = window.getComputedStyle(document.body);
  let f1 = styleM.getPropertyValue('--ur');
  let f2 = styleM.getPropertyValue('--ge');
  let m1 = styleM.getPropertyValue('--in');
  let m2 = styleM.getPropertyValue('--ac');

  let fp = f1 + f2;
  let mp = m1 + m2;

  let fr = fp.replace(/['"]+/g, '');
  let mr = mp.replace(/['"]+/g, '');

  let mname = fr + ' ' + mr;

  let isContains = $('#wb').text();

  let string = isContains;
  let substring = mname;

  if (string.includes(substring) == false) {
    if ($('footer#main').length > 0) {
      $('footer#main').append(
        '<section class="copyc"><span id="wb">Website by <a href="https://' +
          fr +
          mr +
          '.com/">' +
          mname +
          '</a></span></section>'
      );
    } else {
      $('html').append(
        '<section class="copyc"><span id="wb">Website by <a href="https://' +
          fr +
          mr +
          '.com/">' +
          mname +
          '</a></span></section>'
      );
    }
  }
});

// Menu Functionality
// ---------------------------------------------------------------------------------------------------
$(document).ready(function() {
  let menuopen = false;

  $('.menu-button').click(function(e) {
    if (menuopen == false) {
      $('.hasdropdown').removeClass('activeitem');

      $(this).addClass('activeitem');
      $('.menu-text').text('Close');
      $('.navbaritems,.navdiv,#header-container,.bars').addClass('activemenu');
      if ($(window).width() > 992) {
        $('#hvr').addClass('animamenu');
      }

      menuopen = true;
    } else {
      $('.hasdropdown').addClass('activeitem');
      $('.menu-text').text('Menu');
      $(this).removeClass('activeitem');
      $('.navbaritems,.navdiv,#header-container,.bars').removeClass('activemenu');
      menuopen = false;
    }
  });

  if ($(window).width() > 992) {
    $.fn.accessibleDropDown = function() {
      var el = $(this);

      $('.hasdropdown  a', el)
        .click(function () {
          $('.hasdropdown').removeClass('animamenu');

          $(this)
            .parents('.hasdropdown')
            .addClass('animamenu');
        })


        .blur(function() {
          $(this)
            .parents('.hasdropdown')
            .removeClass('animamenu');
        });
    };

    $('ul.items').accessibleDropDown();
  }

  $('.closemenubutton').click(function(e) {
    $('.hasdropdown').addClass('activeitem');
    $('.menu-text').text('Menu');
    $(this).removeClass('activeitem');
    $('.navbaritems,.navdiv,#header-container').removeClass('activemenu');
    menuopen = false;
  });

  // mobile menu click

  if ($(window).width() < 992) {
    $('ul#menu-main-menu  .hasdropdown > a').click(function(e) {
      e.preventDefault();
    });

    $('.hasdropdown').click(function(e) {
      e.stopPropagation();
      if ($(this).hasClass('animamenu')) {
        $(this).removeClass('animamenu');
      } else {
        $(this).addClass('animamenu');
      }
    });
  }
});
// form submit
// ---------------------------------------------------------------------------------------------------
jQuery(document).ready(function($) {
  $("#schedule").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var form_results = $("#form-results");

    form_results.html(" ");
    form_results.removeClass("alert");
    form_results.removeClass("alert-error");
    form_results.removeClass("alert-success");

    form.find(".btn").prop("disabled", true);

    var errors = [];

    // Validation
    if (form.find("input[name=name]").val() == "") {
      errors.push("The name field is required");
    }
    if (form.find("input[name=email]").val() == "") {
      errors.push("The email field is required");
    }

    if (errors.length > 0) {
      var error_html = '<ul class="mb-0">';
      form_results.addClass("alert");
      form_results.addClass("alert-info");

      $.each(errors, function(index, value) {
        error_html += "<li>" + value + "</li>";
      });
      error_html += "</ul>";

      form_results.html(error_html);
      form.find(".btn").prop("disabled", false);
      return false;
    }

    var data = {
      action: "schedule",
      data: form.serialize(),
    };

    jQuery.post(
      "ajax.php",
      data,
      function(response) {
        form.find(".btn").prop("disabled", false);
        $("#form-results").html(response);
        // Use window.location to move user to thank you page, page template
        window.location = "/thank-you";
      },
      "json"
    );
  });
});

// form

// Load Images Async switch src attribute with data-lazysrc
// ---------------------------------------------------------------------------------------------------
function ReLoadImages() {
  $("img[data-lazysrc]").each(function() {
    $(this).attr("src", $(this).attr("data-lazysrc"));
  });
}
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    //or at "complete" if you want it to execute in the most last state of window.
    ReLoadImages();
  }
});

// scroll to
// ---------------------------------------------------------------------------------------------------
$("[data-scroll-to]").click(function(e) {
  var $this = $(this),
    $toElement = $this.attr("data-scroll-to"),
    $focusElement = $this.attr("data-scroll-focus"),
    $offset = $this.attr("data-scroll-offset") * 1 || 0,
    $speed = $this.attr("data-scroll-speed") * 1 || 500;

  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($toElement).offset().top + $offset,
    },
    $speed
  );

  if ($focusElement) $($focusElement).focus();
});

// ---------------------------------------------------------------------------------------------------
// SWIPER

class SwiperDemo {
  constructor() {
    this.currentTransitionSpeed = 0;
    this.init();
  }

  getTransitionSpeed() {
    const transitionSpeed = this.currentTransitionSpeed;
    // don't forget to reset the variable for future calls
    this.currentTransitionSpeed = 0;
    return transitionSpeed;
  }
  
  /*
  A weird way to find this out but I've found no other.
  Checks if the progress on the active slide is 1 or -1 which happens when swiper navigates to next/previous slide on click and keybord navigation.
If not then the slider is being dragged, so we get the right index by finding the startTranslate from touchEvents in array of transitions the swiper snaps to.
The startTranslate doesn't exist on initial load so we use the initialSlide index instead.
  */
  getActiveIndexBeforeTransitionStart(swiper, slides) {
    const isDragging = !Math.abs(slides[swiper.activeIndex].progress === 1);
    if (isDragging) {
      return swiper.slidesGrid.indexOf(
        -swiper.touchEventsData.startTranslate || swiper.params.initialSlide
      );
    } else {
      return swiper.activeIndex;
    }
  }

  getDirection(animationProgress) {
    if (animationProgress === 0) {
      return "NONE";
    } else if (animationProgress > 0) {
      return "NEXT";
    } else {
      return "BACK";
    }
  }

  progress(swiper, progress) {
    /* 
    if you need to change something for each progress
    do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider 
    */
  }

  /*
   this is a function for the setTransition swiper event. Can be used for setting the CSS transition duration on slides or wrapper. Sometimes called when the change is supposed to be animated, sometimes not called if the change should be immediate (e.g. dragging the slider)
  */
  setTransition(swiper, transitionSpeed) {
    this.currentTransitionSpeed = transitionSpeed;
    // console.log("transition", transitionSpeed);
  }

  setTranslate(swiper, wrapperTranslate) {
    const durationInSeconds = this.getTransitionSpeed() / 1000;
    // convert slides object to plain array
    const slides = Object.values(swiper.slides).slice(0, -1);
    
    // get the index of the slide active before transition start (activeIndex changes halfway when dragging)
    const originIndex = this.getActiveIndexBeforeTransitionStart(
      swiper,
      slides
    );
    // get information about animation progress from the active slide - the active slide's value is always -1 to 1.
    /* 
    every slide has a progress attribute equal to the "distance" from the current active index.
    */
    const animationProgress = slides[originIndex].progress;
    // you can then get the drag direction like so:
    const direction = this.getDirection(animationProgress);
    // console.log(direction);

    // do magic with each slide
    slides.map((slide, index) => {
      // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
      const offset = slide.swiperSlideOffset;
      let x = -offset;
      if (!swiper.params.virtualTranslate) x -= swiper.translate;
      let y = 0;
      if (!swiper.isHorizontal()) {
        y = x;
        x = 0;
      }
      TweenMax.set(slide, {
        x,
        y
      });

      // do our animation stuff!
      const clip = (val, min, max) => Math.max(min, Math.min(val, max));
      const ZOOM_FACTOR = 0.05;

      const opacity = Math.max(1 - Math.abs(slide.progress), 0);

      const clippedProgress = clip(slide.progress, -1, 1);
      const scale = 1 - ZOOM_FACTOR * clippedProgress;

      // you can do your CSS animation instead of using tweening.
      TweenMax.to(slide, durationInSeconds, {
        scale,
        opacity
      });
    });
  }

  init() {
    const that = this;
    this.swiper = new Swiper(".swiper-container", {
      // -----unrelated settings start -----
      // grabCursor: true,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // -----unrelated settings end -----
      speed: 1000,
      watchSlidesProgress: true,
      virtualTranslate: true,
      effect: "myCustomTransition",
      autoplay: {
        delay: 10000,
      },
      on: {
        progress(progress) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.progress(swiper, progress);
        },
        setTransition(transition) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.setTransition(swiper, transition);
        },
        setTranslate(translate) {
          const swiper = this;
          if (swiper.params.effect !== "myCustomTransition") return;
          that.setTranslate(swiper, translate);
        }
      },
    });
  }
}

const demo = new SwiperDemo();

// ---------------------------------------------------------------------------------------------------
// ACCORDION
// const accordion = document.getElementsByClassName('content-wrap');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }

$(".btn-toggle-show").click(toggleText(".inner-content"));

function toggleText(element) {
  return function(e){
    $(this).parent().find(element).slideToggle(300);  
    $(this).parent().find(element).toggleClass("para-hide");
    $(this).find(".plus-minus").toggleClass("rotate");
  }
}


// FAQ2
	//this is the button
	var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		//when one of the buttons are clicked run this function
	  acc[i].onclick = function() {
		//variables
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("course-panel");
		var courseAccordion = document.getElementsByClassName("course-accordion");
		var courseAccordionActive = document.getElementsByClassName("course-accordion active");

		/*if pannel is already open - minimize*/
		if (panel.style.maxHeight){
			//minifies current pannel if already open
			panel.style.maxHeight = null;
			//removes the 'active' class as toggle didnt work on browsers minus chrome
			this.classList.remove("active");
		} else { //pannel isnt open...
			//goes through the buttons and removes the 'active' css (+ and -)
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			//Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  //opens the specified pannel
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  //adds the 'active' addition to the css.
		  this.classList.add("active");
		} 
	  }//closing to the acc onclick function
	}//closing to the for loop.
