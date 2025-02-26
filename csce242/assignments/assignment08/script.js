const images = [
  { title: "Happy Birthday", src: "images/birthday.jpg" },
  { title: "Crazy Clown", src: "images/clown.jpg" },
  { title: "It's Raining", src: "images/rain.jpg" },
  { title: "Quiet Time", src: "images/read.jpg" },
  { title: "Working Hard", src: "images/shovel.jpg" },
  { title: "Work from Home", src: "images/work.jpg" }
];

const imageTitlesSection = document.getElementById('image-titles');
images.forEach(image => {
  const titleElement = document.createElement('h3');
  titleElement.textContent = image.title;
  titleElement.addEventListener('click', () => openPopup(image)); 
  imageTitlesSection.appendChild(titleElement);
});

// Popup functionality
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const closeButton = document.getElementById('close');

// Open the popup
const openPopup = (image) => {
  popup.classList.remove('hidden'); // Remove hidden class to show the popup
  popup.classList.add('visible'); 
  popupTitle.textContent = image.title;
  popupImage.src = image.src;
};

// Close the popup
closeButton.addEventListener('click', () => {
  popup.classList.add('hidden'); // Add hidden class to close the popup
  popup.classList.remove('visible'); 
});
