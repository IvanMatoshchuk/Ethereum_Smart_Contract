
var cnt = 0;
var rnd = 0;

function generate_random_num() {

	var min_value = parseInt(document.getElementById("min_value").value);
	var max_value = parseInt(document.getElementById("max_value").value);

	console.log("Min value: " + min_value + " Type: " + typeof(min_value))
	console.log("Max value: " + max_value + " Type: " + typeof(max_value))

	var randomnumber = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
	document.getElementById("random_number").innerHTML = randomnumber;

	rnd = randomnumber;
	cnt = 0;
}



function makeGuess() {

    var number = rnd //parseInt(document.getElementById("random_number").innerHTML);
    var guessed_number = document.getElementById("guess_value").value;

    cnt = parseInt(cnt) + parseInt(1);

  	console.log(number)
    //var message = "Hello " + name + "!";
    //console.log(document.getElementById("name").value;)


    // show counts
	document.getElementById("counter").innerHTML = "Steps made: " + cnt;

    //document.getElementById("content").textContent = message;


    if (guessed_number < number) {
        message = "Too small! Try again!";
    } else if (guessed_number > number) {
        message = "Too big! Try again!";
    } else {
        message = "Well done! You found a correct number in " + cnt + " steps";
        //cnt = 0;
    }
    alert(message)
}

