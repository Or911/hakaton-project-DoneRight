const loginForm = $("#login-form");
const loginBtn = $("#login-btn");
const signUp = $("#signUpFromLogin");
signUp.on('click', function () {
  window.location.href = "/signup-page/index.html"
})

loginForm.on("submit", function (event) {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  $.ajax({
    url: "/login",
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({ username, password }),

    success: function (data) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("username", username);
      window.location.href = "/App/calender-Home-Page/index.html";
    },

    error: function (error, textStatus, errorThrown) {
      if (error.status === 401) {
        console.log("Unauthorized error:", errorThrown);
      } else {
        console.log("Request failed:", errorThrown);
      }
    },
  });
});
