"use strict";

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    var slider = document.getElementById('slider');
    var slides = document.getElementsByClassName('item');
    var pages = document.getElementsByClassName('rect');
    var MAX_ITEMS = slides.length;
    var currentSlidePosition = 0;
    slides[0].style.display = 'block';
    pages[0].classList.add('active');
    slider.addEventListener('click', function () {
      var targetClasses = event.target.classList.value;

      if (targetClasses.includes('left')) {
        moveForward(false);
      } else if (targetClasses.includes('right')) {
        moveForward(true);
      }
    });

    var moveForward = function moveForward(moveRight) {
      var nextPosition = getPosition(moveRight, currentSlidePosition);
      slides[currentSlidePosition].style.display = 'none';
      slides[nextPosition].style.display = 'block';
      pages[nextPosition].classList.add('active');
      pages[currentSlidePosition].classList.remove('active');
      currentSlidePosition = nextPosition;
    };

    var getPosition = function getPosition(moveRight, currentSlidePosition) {
      var position = currentSlidePosition;
      position += moveRight ? 1 : -1;

      if (position >= MAX_ITEMS) {
        return 0;
      }

      if (position < 0) {
        return 9;
      }

      return position;
    };
  })();
});