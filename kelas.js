let start = 0;
otomatis();

function otomatis(){
  const slide = document.querySelectorAll('.fSlide');
  
 for (let i = 0; i < slide.length; i++){
   slide[i].style.display = 'none';
 }
  if (start >= slide.length){
   start = 0;
  }
 slide[start].style.display = 'block';
 start++;
  
 setTimeout('otomatis()', 3000);
}

window.addEventListener('scroll', muncul);

function muncul() {

  let elements = document.querySelectorAll('.element');
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = -200;
    
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add('tampil');
    }

    else {
      elements[i].classList.remove('tampil');
    }

  }

}

function openLightbox(imageUrl) {
  let lightbox = document.getElementById("lightbox");
  let lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "block";
  lightboxImg.src = imageUrl;
}

function closeLightbox() {
  let lightbox = document.getElementById("lightbox");

  lightbox.style.display = "none";
}
