define(["./sandbox"], function(sb) {
	var id, el, view;

	id = "add-temperature";

	function init() {
		el = document.getElementById("add-temperature");
		view = el.getElementsByClassName("farenheit-value")[0];

		sb.listen ({"farenheit": addFarenheit}, id)
	}

	function addFarenheit(weather) {
		view.setAttribute('value', weather.change);
	}

	return {
		id: id,
		init: init,
		addFarenheit: addFarenheit
	}

})