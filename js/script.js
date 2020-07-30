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

// var modalCaption = document.getElementById("caption");
var modalCaption = document.getElementsByClassName(".modal-body");

var galleryImages = document.querySelectorAll(".modal-button"); // selects all images with class modal-button
// var modalImg = document.getElementById("img01");

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].onclick = function(){
      modal.style.display = "block";
      // modalImg.src = this.firstElementChild.src;
      // modalCaption.innerHTML = this.lastElementChild.innerHTML;
      modalCaption.innerHTML = this.lastElementChild.innerHTML;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}