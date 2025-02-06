function drawSigil(numberArray) {
	const canvas = document.getElementById("sigilCanvas");
	const ctx = canvas.getContext("2d");

	canvas.width = 400;
	canvas.height = 400;

	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = 150;
	const pointsCount = 10; // Adjust as needed
	const numbers = numberArray; // []; // Example sequence

	// Define custom number order
	const numberOrder = [8, 9, 6, 0, 4, 1, 2, 7, 3, 5]; // Custom order

	// Calculate points with reordered numbers
	const points = [];
	for (let i = 0; i < pointsCount; i++) {
		const angle = (i / pointsCount) * (Math.PI * 2);
		const x = centerX + radius * Math.cos(angle);
		const y = centerY + radius * Math.sin(angle);
		points.push({ x, y, num: numberOrder[i] }); // Assign custom numbers
	}

	// Sort points array so lookup works correctly
	points.sort((a, b) => a.num - b.num);

	// Draw points
	ctx.fillStyle = "gray";
	ctx.font = "16px Arial";
	points.forEach((p, i) => {
		ctx.beginPath();
		ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillText(i, p.x + 10, p.y); // Number labels
	});

	// Draw connections
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	for (let i = 0; i < numbers.length - 1; i++) {
		let p1 = points[numbers[i]];
		let p2 = points[numbers[i + 1]];
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
	}
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
	drawSigil(number.split('') || []);
}
updateSigil();