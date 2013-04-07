!function($) {
  'use strict';

  $(init);

  function init() {
    getCredentialForms();
  }

  function getCredentialForms() {
    initSignInForm();
    initSignUpForm()
  }

  function initSignInForm() {
    if ($("#login_form").html() == ""){
      $.get("/users/sign_in", function(respHtml) {
        $("#login_form").html(respHtml);

        $("a#login-link").popover({
          content: $("#login_form").html(),
          title: 'Login',
          placement: 'bottom',
          html: true
        });
      });
    }
  }

  function initSignUpForm() {
    if ($("#sign_up_form").html() == "") {
      $.get("/users/sign_up", function(respHtml) {
        $("#sign_up_form").html(respHtml);
        $("a#sign-up-link").popover({
          content: $("#sign_up_form").html(),
          title: 'Sign-up',
          placement: 'bottom',
          html: true
        });
      });
    }
  }
} (jQuery);


/*
$(document).ready(function() {

  $.get("/users/sign_in", function(respHtml) {
    $("#login_form").html(respHtml);

    $("a#login-link").popover({
      content: $("#login_form").html(),
      title: 'Login',
      placement: 'bottom',
      html: true
    });
  });

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
  */
