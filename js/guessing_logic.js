// import {show} from "./utils.js"; -- why this doesn't work :(

var cnt = 0;
var rnd = 0;

function show(elementId_array) {

	var arrayLength = elementId_array.length;
	for (var i = 0; i < arrayLength; i++) {

		document.getElementById(elementId_array[i]).style.display = "block";

	}

	document.getElementById('reset').style.display = "none";
	document.getElementById('setup_field').style.display = "none";
	document.getElementById('guess_area').style.display = "none";

}


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



async function makeGuess() {

    const accounts = await window.web3.eth.getAccounts();
    const account = accounts[0];	

    var min_value = parseInt(document.getElementById("min_value").value);
	var max_value = parseInt(document.getElementById("max_value").value);
    var allowed_steps = Math.floor(Math.log2(max_value - min_value))

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
        alert(message);
    } else if (guessed_number > number) {
        message = "Too big! Try again!";
        alert(message);
    } else {
        message = "Well done! You found a correct number in " + cnt + " steps" + "\n";
        if (cnt <= allowed_steps) {
            message = message + "You win! Paying out funds!";
            alert(message);
            await window.contract.methods.payout().send({ from: account,
                gas: "3000000"});
        } else {
            message = message + "You took too many steps!";
            alert(message);
        }
        show(['min_value_field','max_value_field','bet_field','start_button']);
        cnt = 0;
        document.getElementById("counter").innerHTML = "Steps made: " + cnt;
    }

}

