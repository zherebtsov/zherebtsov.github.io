var ESC_KEY_CODE = 27;

function initPopup(openButtonClassName, popupClassName) {
  var openButtons = document.querySelectorAll(openButtonClassName);
  var popupElement = document.querySelector(popupClassName);
  var closeButton = popupElement.querySelector('.modal-close');

  openButtons.forEach(function (openButton) {
    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupElement.classList.add('modal-show');
    });
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupElement.classList.remove('modal-show');
    popupElement.classList.remove('modal-error');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      evt.preventDefault();
      if (popupElement.classList.contains('modal-show')) {
        popupElement.classList.remove('modal-show');
        popupElement.classList.remove('modal-error');
      }
    }
  });
}

function initCallbackForm(popupClassName) {
  var popupElement = document.querySelector(popupClassName);
  var formElement = popupElement.querySelector('.callback-form');
  var userName = formElement.querySelector('[name=name]');
  var userEmail = formElement.querySelector('[name=email]');
  var message = formElement.querySelector('[name=message]');

  formElement.addEventListener('submit', function (evt) {
    if (!userName.value || !userEmail.value || !message.value) {
      evt.preventDefault();
      popupElement.classList.remove('modal-error');
      popupElement.offsetWidth = popupElement.offsetWidth;
      popupElement.classList.add('modal-error');
    }
  });
}

initPopup('.button-open-map', '.modal-map');
initPopup('.button-open-callback', '.modal-callback');
initCallbackForm('.modal-callback');
initPopup('.button-open-cart', '.modal-cart');
