// Mobile Menu
$(document).ready(function () {
	$("#mobile-btn").on("click", function () {
		$("header").toggleClass("h-screen bg-[#0008] backdrop-blur-sm");
		$("#mobile-btn").toggleClass("active");
		$("#main-menu").toggleClass("max-h-screen");
	});
});

// Menu Scroll
$(window).on("scroll", function () {
	let scrollTop = $(this).scrollTop();
	let $hdr = $("header");
	let $hdrLg = $("header .site-logo img");
	let $hdrWrp = $("header .container");
	if (scrollTop > 100) {
		$hdr.removeClass("backdrop-blur-none").addClass(
			"backdrop-blur-xs md:bg-[#0008]"
		);
		$hdrWrp.removeClass("px-2.5 py-2").addClass("px-2 py-1");
		$hdrLg.removeClass("h-14").addClass("h-12");
	} else {
		$hdr.removeClass("backdrop-blur-xs md:bg-[#0008]").addClass(
			"backdrop-blur-none"
		);
		$hdrWrp.removeClass("px-2 py-1").addClass("px-2.5 py-2");
		$hdrLg.removeClass("h-12").addClass("h-14");
	}
});

// Hero Slider
$(document).ready(function () {
	let $items = $(".hero-slide"),
		active = 0,
		autoSlideInterval;
	// Function to update the active slide
	const setSlider = () => {
		$items.removeClass("active").eq(active).addClass("active");
		// Enable both buttons, then disable the one needed
		$("#slide-prev, #slide-next")
			.removeClass("disabled")
			.filter(
				active === 0
					? "#slide-prev"
					: active === $items.length - 1
					? "#slide-next"
					: ""
			)
			.addClass("disabled");
	};
	// Function to change slide (direction: -1 for prev, 1 for next)
	const changeSlide = (dir) => {
		active = (active + dir + $items.length) % $items.length; // Ensures looping
		setSlider();
		resetAutoSlide();
	};
	// Function to start auto slide
	const startAutoSlide = () =>
		(autoSlideInterval = setInterval(() => changeSlide(1), 7000));
	// Function to reset auto slide on manual interaction
	const resetAutoSlide = () => (
		clearInterval(autoSlideInterval), startAutoSlide()
	);
	// Event listeners for navigation buttons
	$("#slide-prev").click(() => changeSlide(-1));
	$("#slide-next").click(() => changeSlide(1));
	// Initialize slider
	setSlider();
	startAutoSlide();
	// Function to calculate and set diameter for animations
	$(window)
		.on("resize", () => {
			let d = Math.hypot(
				$(".hero-slider").width(),
				$(".hero-slider").height()
			);
			document.documentElement.style.setProperty("--diameter", d + "px");
		})
		.trigger("resize"); // Trigger resize to set diameter on page load
});
