const signUpForm = $("#signup-form");
const signupBtn = $("#signup-btn");

const goToLogin = function () {
  window.location.href = "../index.html";
}
signUpForm.on("submit", function (event) {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  $.ajax({
    url: "/user",
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({ username, password }),
    success: goToLogin(),
    error: function (error, textStatus, errorThrown) {
      if (error.status === 401) {
        console.log("Unauthorized error:", errorThrown);
      } else {
        console.log("Request failed:", errorThrown);
      }
    }
  });
});
