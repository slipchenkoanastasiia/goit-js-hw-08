import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function renderGalleryList() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'><a class='gallery__link' href='${original}'>
      <img src='${preview}' alt='${description}' class='gallery__image'>
      </a></li>`;
    })
    .join('');
  gallery.innerHTML = markup;
}

renderGalleryList();

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
