// hover dropdown
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// veno box
new VenoBox({
  selector: ".my-link",
});

// aos animation
AOS.init();

// testimonial slider
$(".testi__slider").slick({
  centerMode: true,
  centerPadding: 0,
  autoplay: true,
  prevArrow: '<div class="testi__prev"><i class="fas fa-long-arrow-alt-left "></i></div>',
  nextArrow: '<div class="testi__next"><i class="fas fa-long-arrow-alt-right "></i></div>',
  autoplay: false,
});
