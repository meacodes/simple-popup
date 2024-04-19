const popupLink = document.getElementById('popupLink');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

popupLink.addEventListener('click', function(e) {
  e.preventDefault();
  fadeIn(popup);
});

closePopup.addEventListener('click', function() {
  fadeOut(popup);
});

// Function to fade in the popup
function fadeIn(element) {
  element.style.display = 'block';
  element.style.opacity = 0;

  const fadeEffect = setInterval(function () {
    if (element.style.opacity < 1) {
      element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
}

// Function to fade out the popup
function fadeOut(element) {
  let opacity = 1;
  const fadeEffect = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
      element.style.display = 'none';
    }
  }, 50);
}
