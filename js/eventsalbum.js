const modal = document.getElementById('myModal');
const link = document.getElementById('galleryLink');
const closeBtn = document.querySelector('.close');
const galleryContent = document.getElementById('galleryContent');

// Sample album data
const album = [
  'https://i.ibb.co/Jcc5G28/del2.jpg',
'https://i.ibb.co/gyr8Pd0/194e0586-9a6c-4de6-bbcc-cf19b2d27336.jpg',
'https://i.ibb.co/XXPnLzK/leadership1.jpg',
];

// Sync albums and open modal
link.addEventListener('click', (e) => {
  e.preventDefault();
  galleryContent.innerHTML = '';
  album.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    galleryContent.appendChild(img);
  });
  modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});