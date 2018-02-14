/**
 * @Author: Clem
 * @Date:   2018-02-12T14:13:32+01:00
 * @Last modified by:   Clem
 * @Last modified time: 2018-02-14T16:21:55+01:00
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
