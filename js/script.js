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
var modalCaption = document.getElementById("caption")
// Get the image
var galleryImages = document.querySelectorAll(".gallery > li > figure");
var modalImg = document.getElementById("img01");

for (let i=0; i<galleryImages.length; i++) {
    galleryImages[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.firstElementChild.src;
      modalCaption.innerHTML=this.lastElementChild.innerHTML;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Click on <span> (x) to close the modal
span.onclick = function() {
  modal.style.display = "none";
}