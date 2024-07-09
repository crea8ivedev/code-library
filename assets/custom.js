document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('.sliderOute').length > 0) {

      var slides = document.querySelectorAll('.slide');
      var max = -1;
      slides.forEach(function(slide) {
          var h = slide.clientHeight;
          if (h > max) max = h;
      });
      slides.forEach(function(slide) {
          slide.style.minHeight = max + 'px';
      });

      if (document.querySelectorAll('.slide.active').length < 1) {
          slides[0].classList.add('active');
          slides[slides.length - 1].classList.add('prev');
      }

      var activeSlide = document.querySelector('.slide.active');
      if (activeSlide) {
          if (activeSlide.nextElementSibling) {
              activeSlide.nextElementSibling.classList.add('next');
          }
          if (activeSlide.previousElementSibling) {
              activeSlide.previousElementSibling.classList.add('prev');
          }
      }

      document.addEventListener('click', function(e) {
          if (e.target.classList.contains('next')) {
              e.preventDefault();
              nextSlide();
          } else if (e.target.classList.contains('prev')) {
              e.preventDefault();
              prevSlide();
          } else if (e.target.classList.contains('playBtn')) {
              e.preventDefault();
              e.target.classList.toggle('play');
              if (e.target.classList.contains('play')) {
                  intervalId = setInterval(intervalFunction, 1000);
              } else {
                  clearInterval(intervalId);
              }
          }
      });

      var intervalId = false;
      function intervalFunction() {
          nextSlide();
      }

      function nextSlide() {
          var currentActive = document.querySelector('.slide.active');
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
      }

      function prevSlide() {
          var currentActive = document.querySelector('.slide.active');
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

      // Draggable functionality
      let startX, endX;
      let isDragging = false;

      slides.forEach(function(slide) {
          slide.addEventListener('pointerdown', function(e) {
              startX = e.clientX;
              isDragging = true;
              e.preventDefault();
          });

          slide.addEventListener('pointerup', function(e) {
              endX = e.clientX;
              if (isDragging) {
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
                  e.preventDefault();
              }
          });

          slide.addEventListener('pointerleave', function(e) {
              if (isDragging) {
                  endX = e.clientX;
                  if (startX > endX) {
                      nextSlide();
                  } else if (startX < endX) {
                      prevSlide();
                  }
                  isDragging = false;
              }
          });
      });
  }
});
