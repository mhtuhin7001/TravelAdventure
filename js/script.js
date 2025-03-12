// Mobile Menu
$(document).ready(function () {
	// When the menu button is clicked
	$("#mobile-btn").on("click", function () {
		// Toggle the "active" class on the button
		$("#mobile-btn").toggleClass("active");
		// Toggle the "hidden" class on the menu
		$("#main-menu").toggleClass("hidden max-h-screen");
	});
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
