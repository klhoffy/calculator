$(document).ready(function() {
	
	document.getElementById("number1").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 1
		console.log("show me 1")
	})

	document.getElementById("number2").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 2
		console.log("show me 2")
	})

	document.getElementById("number3").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 3
		console.log("show me 3")
	})

	document.getElementById("number4").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 4
		console.log("show me 4")
	})

	document.getElementById("number5").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 5
		console.log("show me 5")
	})

	document.getElementById("number6").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 6
		console.log("show me 6")
	})

	document.getElementById("number7").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 7
		console.log("show me 7")
	})

	document.getElementById("number8").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 8
		console.log("show me 8")
	})

	document.getElementById("number9").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 9
		console.log("show me 9")
	})

	document.getElementById("number0").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += 0
		console.log("show me 0")
	})

	document.getElementById("period").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += "."
		console.log("show me .")
	})

	document.getElementById("plus").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += "+"
	})

	document.getElementById("minus").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += "-"
	})

	document.getElementById("multiply").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += "*"
	})

	document.getElementById("divide").addEventListener("click", function() {
		document.querySelector(".input").innerHTML += "/"
	})

	document.getElementById("equals").addEventListener("click", function() {
		document.querySelector(".input").innerHTML = eval(document.querySelector(".input").innerHTML)
	})

	document.getElementById("clear").addEventListener("click", function() {
		document.querySelector(".input").innerHTML = ""
	})

})