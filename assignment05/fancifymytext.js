// CSC 193A - Assignment 5

// "Bigger!" button: make the text in the box 24pt.
function bigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

// Radio buttons: FancyShmancy turns the styles on, BoringBetty turns them off.
function fancify() {
	var box = document.getElementById("userText");

	if (document.getElementById("fancy").checked) {
		box.style.fontWeight = "bold";
		box.style.color = "blue";
		box.style.textDecoration = "underline";
	} else {
		box.style.fontWeight = "normal";
		box.style.color = "black";
		box.style.textDecoration = "none";
	}
}

// "Moo" button: uppercase everything, then stick "-Moo" on the last word
// of every sentence. A sentence is anything ending in a period.
function moo() {
	var box = document.getElementById("userText");
	var sentences = box.value.toUpperCase().split(".");

	for (var i = 0; i < sentences.length; i++) {
		// the split leaves an empty piece after the final period
		if (sentences[i].trim() === "") {
			continue;
		}

		var words = sentences[i].split(" ");

		// walk back past any trailing spaces to find the real last word
		var last = words.length - 1;
		while (last > 0 && words[last] === "") {
			last--;
		}

		words[last] = words[last] + "-Moo";
		sentences[i] = words.join(" ");
	}

	box.value = sentences.join(".");
}
