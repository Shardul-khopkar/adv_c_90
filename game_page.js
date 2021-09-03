function send() {
	n1 = document.getElementById("n1").value;
	n2 = document.getElementById("n2").value;
	actual_answer = parseInt(n1) * parseInt(n2);
	console.log(actual_answer);

    question_number = "<h4>" + n1 + " * " + n2 + "</h4>";
    input_box = "<br>Answer: <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
	document.getElementById("n1").value = "";
	document.getElementById("n2").value = "";
}
