const slider = document.querySelector('.about-realisation-images'),
    slides = Array.from(document.querySelectorAll('.slide'));

// set up our state
let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0,
    maxSlide = slides.length - 1;

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  slide.style.transform = `translateX(${index * 100}%)`;
  
//   slide.addEventListener('touchstart', touchDown(index))
//   slide.addEventListener('touchend', pointerUp)
//   slide.addEventListener('touchcancel', pointerUp)
//   slide.addEventListener('touchmove', touchMove)

  slide.addEventListener('pointerdown', pointerDown(index));
  slide.addEventListener('pointerup', pointerUp);
  slide.addEventListener('pointerleave', pointerUp);
  slide.addEventListener('pointermove', pointerMove);
})

window.addEventListener('resize', setPositionByIndex);

window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

function pointerDown(index) {
    return function (event) {
        currentIndex = index;
        startPos = event.clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        slider.classList.add('grabbing');
    }
}

function touchDown(index) {
    return function (event) {
        currentIndex = index;
        startPos = event.touches[0].clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        slider.classList.add('grabbing');
    }
}

function pointerMove(event) {
    if (isDragging) {
        const currentPosition = event.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchMove(event) {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX;
      currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function pointerUp() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -50 && currentIndex < slides.length - 1) {
        currentIndex += 1;
    }

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 50 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();

    slider.classList.remove('grabbing');
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
    if (!isDragging) {
        return;
    }
    prevTranslate = currentTranslate;
    setSliderPosition();
}

function setSliderPosition() {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentIndex)}%)`
    });
}