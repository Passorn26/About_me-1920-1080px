$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["firstPage", "secondPage"],
		menu: "#menu",
		autoScrolling:false
	});
});

// ScrollMagic
var controller = new ScrollMagic.Controller();
// Tween - Section 2
var scene = new ScrollMagic.Scene({
	triggerElement: "#section2"
})
// animate 
.setTween("#bg img", {
	maxWidth: "1000px",
	left: "78%",
	opacity: 0.25
})

.addTo(controller);






