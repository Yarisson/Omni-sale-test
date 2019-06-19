'use strict';

(function () {

  var MIN_PASSWORD_LENGTH = 5;
  var TELEPHONE_LENGTH = 11;
  var inputPassword = document.querySelector('#password');
  var inputTel = document.querySelector('#tel');
  var formEnterButton = document.querySelector('.form-enter__button');
  var formEnterInputTextTel = document.querySelector('.form-enter__input-text--tel');
  var formEnterInputTextPassword = document.querySelector('.form-enter__input-text--password');

  inputTel.removeAttribute('minlength', 11);
  inputTel.removeAttribute('maxlength', 11);
  formEnterInputTextPassword.classList.remove('form-enter__input-text--valid');
  formEnterInputTextPassword.classList.remove('form-enter__input-text--invalid');
  formEnterInputTextTel.classList.remove('form-enter__input-text--valid');
  formEnterInputTextTel.classList.remove('form-enter__input-text--invalid');
  formEnterButton.setAttribute('disabled', "disabled");

  var resetFormTextClear = function () {
    inputPassword.value = '';
    inputTel.value = '';
    formEnterInputTextPassword.classList.remove('form-enter__input-text--valid');
    formEnterInputTextPassword.classList.remove('form-enter__input-text--invalid');
    formEnterInputTextTel.classList.remove('form-enter__input-text--valid');
    formEnterInputTextTel.classList.remove('form-enter__input-text--invalid');
    formEnterButton.setAttribute('disabled', true);
  };

  var validatePassword = function (evt) {
    event.preventDefault;
    var SEPARATOR = ' ';
    var inputPasswordValue = inputPassword.value.toLowerCase();
    inputPasswordValue.split(SEPARATOR);

    if (inputPasswordValue.length < MIN_PASSWORD_LENGTH) {
      formEnterInputTextPassword.classList.remove('form-enter__input-text--valid');
      formEnterInputTextPassword.classList.add('form-enter__input-text--invalid');
      return;
    } else {
      formEnterInputTextPassword.classList.remove('form-enter__input-text--invalid');
      formEnterInputTextPassword.classList.add('form-enter__input-text--valid');
      return;
    }
  }

  var validateTelephone = function () {
    var reg = /^-?\d+\.?\d*$/;
    if (reg.test(inputTel.value)) {
      if (inputTel.value.length == TELEPHONE_LENGTH) {
        formEnterInputTextTel.classList.remove('form-enter__input-text--invalid');
        formEnterInputTextTel.classList.add('form-enter__input-text--valid');
        return
      } else {
        formEnterInputTextTel.classList.remove('form-enter__input-text--valid');
        formEnterInputTextTel.classList.add('form-enter__input-text--invalid');
      }
    } else {
      formEnterInputTextTel.classList.remove('form-enter__input-text--valid');
      formEnterInputTextTel.classList.add('form-enter__input-text--invalid');
      return;
    }
  }

var validate = function () {
  var SEPARATOR = ' ';
  var inputPasswordValue = inputPassword.value.toLowerCase();
  var reg = /^-?\d+\.?\d*$/;
  inputPasswordValue.split(SEPARATOR);
  if (inputPasswordValue.length >= MIN_PASSWORD_LENGTH  && inputTel.value.length == TELEPHONE_LENGTH && reg.test(inputTel.value)) {
    formEnterInputTextTel.classList.remove('form-enter__input-text--invalid');
    formEnterInputTextTel.classList.add('form-enter__input-text--valid');
    formEnterInputTextPassword.classList.remove('form-enter__input-text--invalid');
    formEnterInputTextPassword.classList.add('form-enter__input-text--valid');
    formEnterButton.removeAttribute("disabled", "disabled");
    return;
  } else {
      validatePassword();
      validateTelephone();
    }
  }

  var validateInput = function () {
//    var SEPARATOR = ' ';
//    var inputTelValue = inputTel.value.toLowerCase();
//    var inputTelValueArray = inputTelValue.split(SEPARATOR);
//    var inputPasswordValue = inputPassword.value.toLowerCase();
//    var inputPasswordValueArray = inputPasswordValue.split(SEPARATOR);
    validatePassword();
    validateTelephone();
  }

  var onButtonFormClick = function () {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      window.backend.upload(new FormData(form), function () {
        resetFormTextClear();
      });
  });
}

//  var onInputFormChange = function () {
//    validatePassword();
//    validateTelephone();
//  }

  inputPassword.addEventListener('change', validate);
  inputTel.addEventListener('change', validate);
//  inputPassword.addEventListener('change', onInputFormChange);
//  inputTel.addEventListener('change', onInputFormChange);
  formEnterButton.addEventListener('click', onButtonFormClick);
})();
