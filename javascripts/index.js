function checkform() {
    if(document.getElementById("consent").checked) {
	window.location.assign("./demographics_questionnaire.html");
	return false;
    } else {
	alert("If you wish to participate, please check the box next to 'I consent to participate.'");
    }
}

function checkInstructions() {
    if(document.getElementById("consent").checked) {
	window.location.assign("./ephemeral.html");
	return false;
    } else {
		alert("If you wish to participate, please check the box next to 'I have read and understand the instructions.'");
    }
}
