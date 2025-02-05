function setup() {
	let canvas = createCanvas(400, 400);
	canvas.parent('canvasContainer');
}

function draw() {
	circle(200, 200, 300);
	text('1', 0, 200);
	text('2', 10, 120);
	text('7', 55, 60);
	text('3', 110, 60);
}

function updateSigil() {
	let text = '';

	text = document.getElementById("inputText").value;

	let number = '';
	for (let char of text) {
		for (let key in dictionary) {
			if (dictionary[key].includes(char)) {
				number += key;
				break;
			}
		}
	}
	if (document.getElementById("inputRemoveDupes").checked) {
		number = number.split('').filter(onlyUnique).join('');
	}

	document.getElementById("outputText").innerText = text;
	document.getElementById("outputNumber").innerText = number;

	clear();
	ellipse(50, 50, 50, 50);
}