//Create lightbox on image working code//
// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//form data displayed on profile card I want a br after name, email, address and city together, province and postal code together//
 function testVariable() {
            var strText = document.getElementById("name").value;          
            var strText1 = document.getElementById("email").value;
            var strText2 = document.getElementById("streeAddress").value; 
            var strText3 = document.getElementById("addressLocality").value;
			var	strText4 = document.getElementById("province").value;		
            var strText5 = document.getElementById("PostalCode").value; 
            var result = strText + ' ' + strText1 + ' ' + strText2 + ' ' + strText3+ ' ' + strText4+ ' ' +strText5;
            document.getElementById('spanResult').textContent = result;
}