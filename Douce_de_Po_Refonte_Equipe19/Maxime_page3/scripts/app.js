function add() //ADDS +1 to the "number" in the HTML code each time "ajouter au panier" is clicked
{
	var number = window.prompt("Choisir le nombre d'articles")
	var previousNumber = document.getElementById("number").innerHTML
	number = parseInt(number) + parseInt(previousNumber)
	document.getElementById("number").innerHTML = number;
	alert("Ajouté au panier !")
}


