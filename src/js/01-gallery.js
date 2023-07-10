// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const container = document.querySelector('.gallery');

let markup = galleryItems.map(
    ({ preview, original, description }) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
    />
  </a>
</li>`
).join('');
container.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', showLightboxTitle);
function showLightboxTitle() {
    captions: true;
    captionDelay: 250;
    captionSelector: 'img';
    captionType: 'attr';
    captionPosition: 'bottom';
    captionClass: '';
    captionsData: 'title';
};