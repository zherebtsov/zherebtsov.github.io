'use strict';

(function () {
  var FORM = document.querySelector('.notice__form');
  var FORM_ELEMENTS = FORM.querySelectorAll('fieldset');
  var Field = {
    AVATAR: FORM.querySelector('#avatar'),
    TITLE: FORM.querySelector('#title'),
    ADDRESS: FORM.querySelector('#address'),
    TYPE: FORM.querySelector('#type'),
    PRICE: FORM.querySelector('#price'),
    TIME_IN: FORM.querySelector('#timein'),
    TIME_OUT: FORM.querySelector('#timeout'),
    ROOM_NUMBER: FORM.querySelector('#room_number'),
    CAPACITY: FORM.querySelector('#capacity'),
    DESCRIPTION: FORM.querySelector('#description'),
    IMAGES: FORM.querySelector('#images')
  };
  var SUBMIT_BTN = FORM.querySelector('.form__submit');
  var RESET_BTN = FORM.querySelector('.form__reset');
  var AVATAR_PREVIEW = FORM.querySelector('.notice__preview img');
  var IMAGES_PREVIEW_CONTAINER = FORM.querySelector('.form__photo-preview-container');
  var CLASS_DISABLE = 'notice__form--disabled';
  var IMAGE_HEIGHT = 100;
  var draggedElement = null;
  var initState = {};

  var enable = function () {
    window.common.enableElement(FORM, CLASS_DISABLE);
    FORM_ELEMENTS.forEach(function (element) {
      element.removeAttribute('disabled');
    });
  };

  var disable = function () {
    window.validation.removeRedBorder();
    resetForm();
    window.common.disableElement(FORM, CLASS_DISABLE);
    FORM_ELEMENTS.forEach(function (element) {
      element.setAttribute('disabled', '');
    });
  };

  var saveInitState = function () {
    initState = {
      type: Field.TYPE.value,
      timeIn: Field.TIME_IN.value,
      timeOut: Field.TIME_OUT.value,
      roomNumber: Field.ROOM_NUMBER.value,
      capacity: Field.CAPACITY.value,
      avatarPreview: AVATAR_PREVIEW.src
    };
  };

  var resetForm = function () {
    Field.AVATAR.value = '';
    Field.TITLE.value = '';
    Field.TYPE.value = initState.type;
    Field.PRICE.value = '';
    Field.TIME_IN.value = initState.timeIn;
    Field.TIME_OUT.value = initState.timeOut;
    Field.ROOM_NUMBER.value = initState.roomNumber;
    Field.CAPACITY.value = initState.capacity;
    Field.DESCRIPTION.value = '';
    Field.IMAGES.value = '';
    AVATAR_PREVIEW.src = initState.avatarPreview;

    var featureElements = FORM.querySelectorAll('input[type=checkbox]');
    featureElements.forEach(function (element) {
      element.checked = false;
    });

    deleteImagePreview();
  };

  var setFieldValue = function (fieldElement, value) {
    fieldElement.value = value;
  };

  var setAddress = function (coordsPin) {
    var address = coordsPin.x + ', ' + coordsPin.y;
    setFieldValue(Field.ADDRESS, address);
  };

  var onTypeChange = function (evt) {
    var min = window.validation.housingToMinPrice[evt.target.value];

    Field.PRICE.setAttribute('min', min.toString());
  };

  var onTimeinChange = function (evt) {
    setFieldValue(Field.TIME_OUT, evt.target.value);
  };

  var onTimeoutChange = function (evt) {
    setFieldValue(Field.TIME_IN, evt.target.value);
  };

  var onCapacityChange = function () {
    window.validation.removeRedBorder(Field.CAPACITY);
    Field.CAPACITY.setCustomValidity(
        window.validation.isValidNumRoomsToNumGuests(Field.ROOM_NUMBER.value, Field.CAPACITY.value)
    );
  };

  var onSuccess = function () {
    window.toast.showMessage('Форма успешно отправлена!');
    window.pageState.disable();
  };

  var onError = function (error) {
    window.toast.showMessage('Не удалось отправить форму (' + error + ')');
  };

  var onTitleInput = function () {
    window.validation.removeRedBorder(Field.TITLE);
  };

  var onPriceInput = function () {
    window.validation.removeRedBorder(Field.PRICE);
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    var data = new FormData(FORM);
    window.backend.post(data, onSuccess, onError);
  };

  var onSubmitClick = function () {
    window.validation.setRedBorder();
  };

  var onResetClick = function () {
    window.pageState.disable();
  };

  var onAvatarChange = function () {
    window.uploadImage(Field.AVATAR, function (result) {
      AVATAR_PREVIEW.src = result[0];
    });
  };

  var onImageDragStart = function (evt) {
    draggedElement = evt.currentTarget;
  };

  var onImageDragOver = function (evt) {
    evt.preventDefault();
    evt.currentTarget.classList.add('drag-over');
  };

  var onImageDragLeave = function (evt) {
    evt.currentTarget.classList.remove('drag-over');
  };

  var onImageDragEnd = function () {
    draggedElement = null;
  };

  var onImageDrop = function (evt) {
    var currentElement = evt.currentTarget;
    var previousElement = currentElement.previousSibling;
    var nextElement = currentElement.nextSibling;

    evt.preventDefault();
    currentElement.classList.remove('drag-over');

    if (previousElement === draggedElement) {
      IMAGES_PREVIEW_CONTAINER.insertBefore(draggedElement, nextElement);
    } else {
      IMAGES_PREVIEW_CONTAINER.insertBefore(draggedElement, currentElement);
    }

    draggedElement = null;
  };

  var changeImageElement = function (data, index, element) {
    element.src = data[index];
    element.addEventListener('dragstart', onImageDragStart, false);
    element.addEventListener('dragend', onImageDragEnd, false);
    element.addEventListener('dragover', onImageDragOver, false);
    element.addEventListener('dragleave', onImageDragLeave, false);
    element.addEventListener('drop', onImageDrop, false);
  };

  var deleteImagePreview = function () {
    IMAGES_PREVIEW_CONTAINER.textContent = '';
  };

  var onImagesChange = function () {
    deleteImagePreview();
    window.uploadImage(Field.IMAGES, function (result) {
      var imageElement = document.createElement('img');
      imageElement.height = IMAGE_HEIGHT;
      imageElement.setAttribute('draggable', 'true');

      IMAGES_PREVIEW_CONTAINER.appendChild(window.common.createElements(result, imageElement, changeImageElement));
    });
  };

  Field.TYPE.addEventListener('change', onTypeChange);
  Field.TIME_IN.addEventListener('change', onTimeinChange);
  Field.TIME_OUT.addEventListener('change', onTimeoutChange);
  Field.ROOM_NUMBER.addEventListener('change', onCapacityChange);
  Field.CAPACITY.addEventListener('change', onCapacityChange);
  FORM.addEventListener('submit', onFormSubmit);
  SUBMIT_BTN.addEventListener('click', onSubmitClick);
  Field.TITLE.addEventListener('input', onTitleInput);
  Field.PRICE.addEventListener('input', onPriceInput);
  RESET_BTN.addEventListener('click', onResetClick);
  Field.AVATAR.addEventListener('change', onAvatarChange);
  Field.IMAGES.addEventListener('change', onImagesChange);

  window.form = {
    saveInitState: saveInitState,
    setAddress: setAddress,
    field: Field,
    enable: enable,
    disable: disable
  };
})();
