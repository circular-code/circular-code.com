(function() {

	function waitForRunAnimation() {
		if (window.runAnimation)
			runAnimation(document.getElementById('canvas'), 3, 0.5, "rgba(0,0,0,0.5)", 0.1);
		else
			setTimeout(function() {
				waitForRunAnimation();
			}, 500);
	}

	window.addEventListener('load', function() {
		window.setTimeout(function() {
			document.body.classList.remove('is-preload');
			waitForRunAnimation();
		}, 100);
	});
})();