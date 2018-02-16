/**
 * @Author: Clem
 * @Date:   2018-02-12T14:13:32+01:00
 * @Last modified by:   Clem
 * @Last modified time: 2018-02-16T01:06:51+01:00
 */

//carousel
 let slideIndex = 0;
 carousel();

 function carousel() {
     let i;
     let x = document.getElementsByClassName("mySlides");
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > x.length) {slideIndex = 1}
     x[slideIndex-1].style.display = "block";
     setTimeout(carousel, 5000); // Change image every 2 seconds
 }

 function hamburger_click()
 {
   var hamburgerElement = document.getElementById("hamburger");
   var menuElement = document.getElementById("mdr");
   var logo = document.getElementById("menu_logo_doucedepo");

   hamburgerElement.style.display = "block";
   menuElement.style.display = "block";
   logo.style.display = "none";
 }

 function add() //ADDS +1 to the "number" in the HTML code each time "ajouter au panier" is clicked
 {
 	var number = window.prompt("Choisir le nombre d'articles")
 	var previousNumber = document.getElementById("number").innerHTML
 	number = parseInt(number) + parseInt(previousNumber)
 	document.getElementById("number").innerHTML = number;
 	alert("Ajouté au panier !")
}
