// Mobile Menu
$(document).ready(function () {
	$("#mobile-menu-btn").on("click", function () {
		$("header").toggleClass("h-screen bg-[#0008] backdrop-blur-sm");
		$("#mobile-menu-btn").toggleClass("active");
		$("#main-menu").toggleClass("max-h-screen");
	});
});

// Menu Scroll
$(window).on("scroll", function () {
	let scrollTop = $(this).scrollTop();
	let $hdr = $("header");
	let $hdrLg = $("header .site-logo img");
	let $hdrCntr = $("header .container");
	if (scrollTop > 80) {
		$hdr.removeClass("backdrop-blur-none").addClass(
			"backdrop-blur-xs bg-[#0008]"
		);
		$hdrCntr.removeClass("px-2.5 py-2").addClass("px-2 py-1");
		$hdrLg.removeClass("h-14").addClass("h-12");
	} else {
		$hdr.removeClass("backdrop-blur-xs bg-[#0008]").addClass(
			"backdrop-blur-none"
		);
		$hdrCntr.removeClass("px-2 py-1").addClass("px-2.5 py-2");
		$hdrLg.removeClass("h-12").addClass("h-14");
	}
});
