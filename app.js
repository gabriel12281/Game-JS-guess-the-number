const number = document.querySelector("#num");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg")
const numberRandom = Math.floor(Math.random() * 100);
let numberUser = document.querySelector("#numberUser");
let lifes = 10;


function eventos() {
	btn.addEventListener("click", game);
}

eventos();

function game() {
	if (numberRandom === parseInt(numberUser.value)) {
		num.textContent = numberRandom;
		setTimeout(() => {
			alert(`You won the correct number is: ${numberRandom}`)
			window.location.reload();
		}, 1000)

	}else if (numberRandom < parseInt(numberUser.value)) {
		msg.style.display = "block";
		msg.textContent = "The number to discover is less than the number entered"
		lifes--
	}

	else if (numberRandom > parseInt(numberUser.value)) {
		msg.style.display = "block";
		msg.textContent = "The number to discover is greater than the number entered"
		lifes--
	}  

	if (lifes === 0) {
		alert("You ran out of lives, you lost");
		window.location.reload();
	}
}
