// Carousel

var carouselIndex = 0;
showCarousel();

function showCarousel() {
  var i;
  var carousel = document.getElementsByClassName("myCarousel");
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  carouselIndex++;
  if (carouselIndex > carousel.length) {carouselIndex = 1}
  carousel[carouselIndex-1].style.display = "block";
  setTimeout(showCarousel, 5000); // Change image every 5 seconds
}

// Modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Click on <span> (x) to close the modal
span.onclick = function() {
  modal.style.display = "none";
}