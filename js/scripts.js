// Fonction pour changer l'image centrale de manière aléatoire
function changeCentralImage() {
  const images = [
    'chemin/vers/image1.jpg',
    'chemin/vers/image2.jpg',
    'chemin/vers/image3.jpg',
    // Ajoutez autant de chemins d'images que vous le souhaitez
  ];
  const centralImage = document.getElementById('centralPhoto');
  // Change l'image de manière aléatoire à chaque chargement de la page
  centralImage.src = images[Math.floor(Math.random() * images.length)];
}

// Ajoutez d'autres fonctions JavaScript ici selon les besoins de votre site

// Appel de la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', changeCentralImage);
// Appel de la fonction pour inclure la barre de navigation
includeNavBar();

// Autres scripts pour la logique du site
