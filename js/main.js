var showMap = document.querySelector(".show-map");
var fullMap = document.querySelector(".full-map");
var closeMap = document.querySelector(".popap-close-map");
var showFeedback = document.querySelector(".show-feedback");
var feedback = document.querySelector(".popap-feedback");
var closeFeedback = document.querySelector(".popap-close-feedback");
var form = feedback.querySelector("form");
var nameFeedback = feedback.querySelector("[name=contact-name]");
var mailFeedback = feedback.querySelector("[name=contact-mail]");
var textFeedback = feedback.querySelector("[name=contact-text]");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("nameFeedback");
  } catch (err) {
    isStorageSupport = false;
  }

showMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  fullMap.classList.add("popap-show-map");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  fullMap.classList.remove("popap-show-map");
});

showFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("popap-show-feedback");
  if (localStorage.getItem("nameFeedback") && localStorage.getItem("mailFeedback")) {
    nameFeedback.value = localStorage.getItem("nameFeedback");
    mailFeedback.value = localStorage.getItem("mailFeedback");
    textFeedback.focus();
  } else if (localStorage.getItem("mailFeedback")) {
    mailFeedback.value = localStorage.getItem("mailFeedback");
    nameFeedback.focus();
  } else if (localStorage.getItem("nameFeedback")) {
    nameFeedback.value = localStorage.getItem("nameFeedback");
    mailFeedback.focus();
  } else {
    nameFeedback.focus();
  }
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("popap-show-feedback");
  feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !mailFeedback.value || !textFeedback.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameFeedback", nameFeedback.value);
      localStorage.setItem("mailFeedback", mailFeedback.value);
    }

  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("popap-show-feedback")) {
        feedback.classList.remove("popap-show-feedback");
        feedback.classList.remove("modal-error");
      } else if (fullMap.classList.contains("popap-show-map")) {
        fullMap.classList.remove("popap-show-map");
      }
    }
  });
