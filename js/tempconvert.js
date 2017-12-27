define(["./sandbox"], function(sb) {
	var id, celcius, farenheit, convert, el;

	id = "add-temperature";

	function init() {
		el = document.getElementById("add-temperature");
		celcius = el.getElementsByClassName("celcius-value")[0];
		convert = el.getElementsByClassName("submit")[0];

		$on(convert, "click", convertTemp);
	}

	function convertTemp(e) {
		var tempValue = {}

		tempValue.temp = celcius.value;

		tempValue.change = ((celcius.value * 1.8) + 32);

		sb.notify({
			type: "farenheit",
			data: tempValue
		})
		e.preventDefault();
	}

	return {
		id: id,
		init: init,
		convertTemp: convertTemp
	}
})