$("document").ready(function () {
  //Jquery Code for stylying active links in header ,
  //destinations section,crew section and technology
  //section on clicking them
  $(".menu-list li").click(function () {
    $(".menu-list li").removeClass("currentLink");
    $(this).addClass("currentLink");
  });
  $(".dest-links span").click(function () {
    $(".dest-links span").removeClass("currentLink");
    $(this).addClass("currentLink");
  });
  $(".on-off-btns span").click(function () {
    $(".on-off-btns span").removeClass("currentBtn");
    $(this).addClass("currentBtn");
  });

  //Jquery Code for opening and closing menu list on mobile screen devices
  $(".open").click(function () {
    $(".menu-list").addClass("active");
  });
  $(".close").click(function () {
    $(".menu-list").removeClass("active");
  });
});

$("document").ready(function () {
  //Jquery Code for smoothly scrolling down the page to
  //a specific section on clicking the related link and
  //meanwhile change nav bar position to stick when page scrolls
  $(".menu-list li a").click(function (e) {
    let targetHref = $(this).attr("href");
    $("html, body").animate(
      { scrollTop: $(targetHref).offset().top },
      1000,
      function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 0) {
            $(".top-bar").addClass("sticky");
          } else {
            $(".top-bar").removeClass("sticky");
          }
        });

        e.preventDefault();
      }
    );
  });
});
