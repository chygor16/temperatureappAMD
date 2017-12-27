window.$on = function(target, type, cb) {
	target.addEventListener(type, cb, false);
}

define(["./core", "./tempconvert", "./showconvert"],
		function(CORE, tempConvert, showConvert) {

	CORE.addModule(tempConvert.id, tempConvert);
	CORE.addModule(showConvert.id, showConvert);

	tempConvert.init();
	showConvert.init();

})