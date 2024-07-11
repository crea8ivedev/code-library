document.addEventListener('DOMContentLoaded', function() {
  var sliderWrapper = document.querySelector('.slider-wrapper');
  if (!sliderWrapper) return;

  var autoplay = sliderWrapper.getAttribute('data-autoplay') === 'true';
  var autoplaySpeed = parseInt(sliderWrapper.getAttribute('data-autoplay-speed')) || 3000;

  var slides = sliderWrapper.querySelectorAll('.slide');
  var paginationContainer = sliderWrapper.querySelector('.pagination');
  var paginationExists = paginationContainer !== null;
  var nextButton = sliderWrapper.querySelector('.next');
  var prevButton = sliderWrapper.querySelector('.prev');
  var nextButtonExists = nextButton !== null;
  var prevButtonExists = prevButton !== null;

  let startX, endX;
  let isDragging = false;

  function setSlideHeights() {
    var max = -1;
    slides.forEach(function(slide) {
      var h = slide.clientHeight;
      if (h > max) max = h;
    });
    slides.forEach(function(slide) {
      slide.style.minHeight = max + 'px';
    });
  }

  function initSlider() {
    slides.forEach(function(slide, index) {
      if (paginationExists) {
        // Create pagination dot
        var dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
          dot.classList.add('active');
        }
        dot.addEventListener('click', function() {
          goToSlide(index);
        });
        paginationContainer.appendChild(dot);
      }
    });

    if (document.querySelectorAll('.slide.active').length < 1) {
      slides[0].classList.add('active');
      slides[slides.length - 1].classList.add('prev');
    }

    var activeSlide = sliderWrapper.querySelector('.slide.active');
    if (activeSlide) {
      if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('next');
      }
      if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('prev');
      }
    }

    document.addEventListener('click', function(e) {
      if (nextButtonExists && (e.target.classList.contains('next') || e.target.closest('.next'))) {
        e.preventDefault();
        nextSlide();
      } else if (prevButtonExists && (e.target.classList.contains('prev') || e.target.closest('.prev'))) {
        e.preventDefault();
        prevSlide();
      } else if (e.target.classList.contains('playBtn')) {
        e.preventDefault();
        e.target.classList.toggle('play');
        if (e.target.classList.contains('play')) {
          intervalId = setInterval(intervalFunction, autoplaySpeed);
        } else {
          clearInterval(intervalId);
        }
      }
    });
    slides.forEach(function(slide) {
      slide.addEventListener('pointerdown', function(e) {
        startX = e.clientX;
        isDragging = true;
        e.preventDefault(); // Prevent default drag behavior
        console.log('Pointer down at X:', startX);
      });
    
      slide.addEventListener('pointerup', function(e) {
        if (isDragging) {
          endX = e.clientX;
          console.log('Pointer up at X:', endX);
          if (startX > endX) {
            nextSlide();
          } else if (startX < endX) {
            prevSlide();
          }
          isDragging = false;
        }
      });
    
      slide.addEventListener('pointermove', function(e) {
        if (isDragging) {
          e.preventDefault(); // Prevent default drag behavior
          console.log('Pointer move');
        }
      });
    
      slide.addEventListener('pointerleave', function(e) {
        if (isDragging) {
          endX = e.clientX;
          console.log('Pointer leave at X:', endX);
          if (startX > endX) {
            nextSlide();
          } else if (startX < endX) {
            prevSlide();
          }
          isDragging = false;
        }
      });
    });
    
  

    setSlideHeights();
    updatePagination();

    if (autoplay) {
      intervalId = setInterval(intervalFunction, autoplaySpeed);
    }
  }

  var intervalId = false;
  function intervalFunction() {
    nextSlide();
  }

  function nextSlide() {
    var currentActive = sliderWrapper.querySelector('.slide.active');
    if (!currentActive) return;

    if (currentActive === slides[slides.length - 1] || currentActive === slides[slides.length - 2]) {
      if (currentActive === slides[slides.length - 2]) {
        currentActive.classList.remove('active');
        currentActive.classList.add('prev');
        removeSiblingsClass(currentActive, 'next', 'prev');
        currentActive.nextElementSibling.classList.add('active');
        slides[0].classList.add('next');
      } else {
        currentActive.classList.remove('active');
        currentActive.classList.add('prev');
        slides[0].classList.remove('next');
        slides[0].classList.add('active');
        slides[1].classList.add('next');
        slides[slides.length - 2].classList.remove('prev');
      }
    } else {
      currentActive.classList.remove('active');
      currentActive.classList.add('prev');
      removeSiblingsClass(currentActive, 'next', 'prev');
      currentActive.nextElementSibling.classList.add('active');
      if (currentActive.nextElementSibling.nextElementSibling) {
        currentActive.nextElementSibling.nextElementSibling.classList.add('next');
      }
    }
    updatePagination();
  }

  function prevSlide() {
    var currentActive = sliderWrapper.querySelector('.slide.active');
    if (!currentActive) return;

    if (currentActive === slides[0] || currentActive === slides[1]) {
      if (currentActive === slides[1]) {
        currentActive.classList.remove('active');
        currentActive.classList.add('next');
        removeSiblingsClass(currentActive, 'next', 'prev');
        currentActive.previousElementSibling.classList.add('active');
        slides[slides.length - 1].classList.add('prev');
      } else {
        currentActive.classList.remove('active');
        currentActive.classList.add('next');
        slides[slides.length - 1].classList.remove('prev');
        slides[slides.length - 1].classList.add('active');
        slides[slides.length - 2].classList.add('prev');
      }
    } else {
      currentActive.classList.remove('active');
      currentActive.classList.add('next');
      removeSiblingsClass(currentActive, 'next', 'prev');
      currentActive.previousElementSibling.classList.add('active');
      if (currentActive.previousElementSibling.previousElementSibling) {
        currentActive.previousElementSibling.previousElementSibling.classList.add('prev');
      }
    }
    updatePagination();
  }

  function removeSiblingsClass(element, class1, class2) {
    element.siblings().forEach(function(sibling) {
      sibling.classList.remove(class1, class2);
    });
  }

  Element.prototype.siblings = function() {
    var siblings = [];
    var sibling = this.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== this) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  function goToSlide(index) {
    var currentActive = sliderWrapper.querySelector('.slide.active');
    if (!currentActive) return;

    currentActive.classList.remove('active', 'next', 'prev');
    slides.forEach(function(slide) {
      slide.classList.remove('next', 'prev');
    });

    slides[index].classList.add('active');
    if (slides[index].nextElementSibling) {
      slides[index].nextElementSibling.classList.add('next');
    }
    if (slides[index].previousElementSibling) {
      slides[index].previousElementSibling.classList.add('prev');
    }
    updatePagination();
  }

  function updatePagination() {
    if (!paginationExists) return;
    var activeIndex = Array.from(slides).indexOf(sliderWrapper.querySelector('.slide.active'));
    var dots = paginationContainer.querySelectorAll('.dot');
    dots.forEach(function(dot, index) {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  window.addEventListener('resize', function() {
    setSlideHeights();
  });

  initSlider();
});


// Header account-popup 
$(".login_popup").click(function () {
  if ($(this).hasClass("active")) {
    // If the login popup is already active, we should close it
    $(this).removeClass("active");
    $(".customer-account").addClass("hidden");
    $(".customer-account").removeClass("login-left");
    $("body").removeClass("overflow-hidden");
    $("#shopify-section-account-popup").hide();
    $(".ctm-login-modal-bg").removeClass("active");
  } else {
    // If the login popup is not active, we should open it
    $(this).addClass("active");
    $(".customer-account").removeClass("hidden");
    $("#shopify-section-account-popup").show();
    $(".ctm-login-modal-bg").addClass("active");
    $(".customer-account").addClass("login-left");
    $("body").addClass("overflow-hidden");
  }
});

$(".ctm-login-modal-bg").click(function () {
  $(this).removeClass("active");
  $(".customer-account").addClass("hidden");
  $(".customer-account").removeClass("login-left");
  $(".login_popup").removeClass("active");
  $("body").removeClass("overflow-hidden");
  $("#shopify-section-account-popup").hide();
});

$("#login-none").click(function () {
  $(".login-cta").addClass("d-none");
  $(".reset-password").removeClass("d-none");
});
$("#recover-cancel").click(function () {
  $(".login-cta").removeClass("d-none");
  $(".reset-password").addClass("d-none");
});

$("#regi_forgot_pass").click(function () {
  $("#img-1").addClass("current");
  $("#tab-1").addClass("current");
  $("#login").addClass("current");
  $("#img-2").removeClass("current");
  $("#tab-2").removeClass("current");
  $("#signup").removeClass("current");

});
$("#regi-recover-cancel").click(function () {
  $(".reset-password").addClass("d-none");
  $(".forgot-block-area").removeClass("d-none");
});

// popup tabbing
$(".tab-heading ul li a").click(function () {
  var tab_idd = $(this).attr("data-tab");
  var tab_img = $(this).attr("data-img");

  $(".reset-password").addClass("d-none");
  $(".login-cta").removeClass("d-none");
  $(".forgot-block-area").removeClass("d-none");

  $(".tab-heading ul li a").removeClass("current");
  $(".account-tab.tab-pane").removeClass("current");

  $(this).addClass("current");
  $("#" + tab_idd).addClass("current");
  $("#" + tab_img).addClass("current");
});


//timeline slider
var swiper = new Swiper(".timeline_slider", {
  spaceBetween: 30,
  mousewheel: {
    forceToAxis: true,
   },  
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
      spaceBetween: 65,
    },
    1199: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
  },
});