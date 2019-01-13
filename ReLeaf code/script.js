// First path

function func1() {
	var x = document.getElementById("myDiv1");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn1").disabled = true;
	  document.getElementById("btn2").style.visibility = "hidden";
	  document.getElementById("btn3").style.visibility = "hidden";
	  document.getElementById("btn4").style.visibility = "hidden";
	  document.getElementById("btn5").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }

function func3() {
	var x = document.getElementById("myDiv2");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn6").disabled = true;
	  document.getElementById("btn7").style.visibility = "hidden";
	  document.getElementById("btn8").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }

function func4() {
	var x = document.getElementById("myDiv3");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn9").disabled = true;
	  document.getElementById("btn10").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }
 
 
//Second path

function func2() {
	var x = document.getElementById("myDiv4");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn1").style.visibility = "hidden";
	  document.getElementById("btn2").disabled = true;
	  document.getElementById("btn3").style.visibility = "hidden";
	  document.getElementById("btn4").style.visibility = "hidden";
	  document.getElementById("btn5").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }

function func5() {
	var x = document.getElementById("myDiv5");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn11").style.visibility = "hidden";
	  document.getElementById("btn12").disabled = true;
	  document.getElementById("btn13").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }

function func6() {
	var x = document.getElementById("myDiv6");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("btn14").disabled = true;
	  document.getElementById("btn15").style.visibility = "hidden";
	} else {
	  x.style.display = "none";
	}
  }