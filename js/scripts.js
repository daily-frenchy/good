// Fonction pour afficher la photo centrale
function displayPhotoCentrale() {
  const container = document.getElementById('photoCentraleContainer');
  const image = document.createElement('img');
  image.src = photoCentrale.image;
  image.alt = photoCentrale.alt;
  container.appendChild(image);
}

// Fonction pour créer et afficher le photorama
function displayPhotorama() {
  const container = document.getElementById('photoramaContainer');
  photorama.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.image;
    img.alt = photo.alt;
    container.appendChild(img);
  });
}

// Appel des fonctions pour afficher la photo centrale et le photorama
displayPhotoCentrale();
displayPhotorama();
