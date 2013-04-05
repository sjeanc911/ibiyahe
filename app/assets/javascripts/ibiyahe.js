$(document).ready(function() {

  $("a#login-link").on("click", function() {
    $.get("/users/sign_in", function(respHtml) {
      $("#login_form").html(respHtml);

      $("a#login-link").popover({
        content: $("#login_form").html(),
        title: 'Login',
        placement: 'bottom',
        html: true
      });
    });
  });

  $("a#sign-up-link").on("click", function() {
    $.get("/users/sign_up", function(respHtml) {
      $("#sign_up_form").html(respHtml);

      $("a#sign-up-link").popover({
        content: $("#sign_up_form").html(),
        title: 'Sign-up',
        placement: 'bottom',
        html: true
      });
    });
  });

});

