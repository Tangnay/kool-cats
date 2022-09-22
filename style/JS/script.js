// The humgerger btn
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

// initialize carousel
bulmaCarousel.attach("#carousel-demo", {
  slidesToScroll: 1,
  slidesToShow: 3,
  loop: true,
});

// this function to save in local story
function populateRegisterInfo() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var equipment = document.getElementById("equipment");

  var registerInfo = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    equipment: equipment.value.trim(),
  };
  localStorage.setItem("registerInfo", JSON.stringify(registerInfo));
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("equipment").value = "";
}
// set to local story and display as object with Json and convert it as string/JS
function displayInfo() {
  var registerInfo = JSON.parse(localStorage.getItem("registerInfo"));
  // to put those infor after the submit btn is click
  if (registerInfo !== null) {
    document.getElementById("saved-name").innerHTML = registerInfo.name;
    document.getElementById("saved-phone").innerHTML = registerInfo.phone;
    document.getElementById("saved-email").innerHTML = registerInfo.email;
    document.getElementById("saved-equipment").innerHTML =
      registerInfo.equipment;
  } else {
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll("#submit-btn") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      populateRegisterInfo();
      displayInfo();

      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
      resetForm();
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
      resetForm();
    }
  });
});

// spotfify API

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
    uri: 'spotify:show:1DUZrbF7kHU0TME6tbo43t',
  };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

var api_token = ""
var access_token = ""

$.ajax({
  async: true,
  crossDomain: true,
  url: "https://sagenda.net/api/v3/token",
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    grant_type: "api_token",
    api_token: "a075eba83d7c4f47ab0fffa234dc9505",
  },
})
  .then(function (response) {
    console.log(response);
    return (api_token = response.access_token);
  })
  .then(function (response) {
    $.ajax({
      async: true,
      crossDomain: true,
      url: "https://sagenda.net/api/v3/bookableItems",
      method: "GET",
      headers: {
        Authorization: "Bearer " + response,
      },
    }).done(function (response) {
      console.log(response);
    });
  });

  $.ajax({
    async: true,
    crossDomain: true,
    url: 'https://sagenda.net/api/v3/token',
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'api_token',
      api_token: 'a075eba83d7c4f47ab0fffa234dc9505',
    },
  })
    .then(function (response) {
      console.log(response);
      return (api_token = response.access_token);
    })
    .then(function (response) {
      $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://sagenda.net/api/v3/events/2022-10-01/2022-10-01/6323c116701dd404ccfaa1dd',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + response,
        },
      }).done(function (response) {
        console.log(response);
      });
    }); 

      var bnt1 = document.getElementById("btn1");
      var bnt2 = document.getElementById("btn2");
      var bnt3 = document.getElementById("btn3");
      var bnt4 = document.getElementById("btn4");
  
      btn1.addEventListener('click', function () {
        console.log('clicked');
        btn1.classList.add('is-success');
      });

      btn2.addEventListener('click', function () {
        console.log('clicked');
        btn2.classList.add('is-success');
      });

      btn3.addEventListener('click', function () {
        console.log('clicked');
        btn3.classList.add('is-success');
      });

      btn4.addEventListener('click', function () {
        console.log('clicked');
        btn4.classList.add('is-danger');
      });
  

    // //{
    //   "eventIdentifier"; "NjMyNjc5ZTExNzkyNmY0ODQ0Y2MzMTM0OzEwLzEvMjAyMiAxMDowMCBBTTs2MzIzYzExNjcwMWRkNDA0Y2NmYWExZGQ",
    //   "userIdentifier"; "[user-identifier]",
    //   "participants"; 1 
    // }
    
    // $.ajax({
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://sagenda.net/api/v3/eventLocks",
    //   "method": "POST ",
    //   "headers": {
    //     "content-type": "application/json",
    //     "authorization": "Bearer " + api_token,
    //   },
    //   "processData": false,
    //   "data": "{\"eventIdentifier\":\"NjMyNjc5ZTExNzkyNmY0ODQ0Y2MzMTM0OzEwLzEvMjAyMiAxMDowMCBBTTs2MzIzYzExNjcwMWRkNDA0Y2NmYWExZGQ\",\"participants\": 1}"
    // }).done(function (response) {
    //   console.log(response);
    // });
 
