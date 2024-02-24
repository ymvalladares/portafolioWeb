(function ($) {
  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if ($(this).parents(".navbar-nav").length) {
      $(".navbar-nav .active").removeClass("active");
      $(this).closest("a").addClass("active");
    }
  });

  //progrees animation
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  $(function () {
    $("#basic-form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        subject: "required",
        message: "required",
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        subject: "Please enter your subject",
        message: "Please enter your message",
      },
      submitHandler: function (form) {
        const serviceID = "default_service";
        const templateID = "template_my494xq";

        emailjs.sendForm(serviceID, templateID, form).then(
          () => {
            alert("Sent Satisfactorily!");
          },
          (err) => {
            alert("Error");
          }
        );

        form.reset();
      },
    });
  });
})(jQuery);
