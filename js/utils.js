function hide_start(elementId_array) {

	var arrayLength = elementId_array.length;
	for (var i = 0; i < arrayLength; i++) {

		document.getElementById(elementId_array[i]).style.display = "none";

	}
	document.getElementById('reset').style.display = "block";

}


// function show(elementId_array) {

// 	var arrayLength = elementId_array.length;
// 	for (var i = 0; i < arrayLength; i++) {

// 		document.getElementById(elementId_array[i]).style.display = "block";

// 	}

// 	document.getElementById('reset').style.display = "none";
// 	document.getElementById('setup_field').style.display = "none";
// 	document.getElementById('guess_area').style.display = "none";

// }


function start_guessing(elementId_array) {

	// Check the input
	var min_value = document.getElementById("min_value").value;
	var max_value = document.getElementById("max_value").value;

	var range = max_value - min_value

	if (range < 32) {
		alert("Input is smaller than 32 !!!")
	} else {
		// hide input fields and button
		hide_start(elementId_array);

		var max_n_steps = Math.ceil(Math.log2(range));

		var to_show = "<pre>Your range: [" + min_value + ", " + max_value + "]" + " \nMax number of steps: " + max_n_steps +"</pre>";
		//alert(to_show);

		document.getElementById('setup_field').style.display = "block";
		document.getElementById("setup_field").innerHTML = to_show;

		// show guessing-logic field
		document.getElementById('guess_area').style.display = "flex";

	}



	
}

function show_setup() {

	var min_value = document.getElementById("min_value").value;
	var max_value = document.getElementById("max_value").value;

	var max_n_steps = Math.floor(Math.log2(max_value - min_value));

	var to_show = "<pre>Your range: [" + min_value + ", " + max_value + "]" + " \nMax number of steps: " + max_n_steps +"</pre>";
	//alert(to_show);

	document.getElementById('show_setup_field').style.display = "block";
	document.getElementById("show_setup_field").innerHTML = to_show

}