// ---------------------------IMPORTS---------------------------------------
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// --------------------------VARIABLES----------------------------------
const gallery = document.querySelector('.gallery');


// додаємо у розмітку нові елементи
const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


// --------------------------FUNCTIONS----------------------------------
// створення розмітки
function createGallery(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<a class="gallery__item" href=${original}>
                        <img
                            class="gallery__image"
                            src=${preview} 
                            alt=${description}/>
                    </a>`
        })
        .join('')
};


// -------------------------- simplelightbox ----------------------------------
const gallarySlider = new SimpleLightbox('.gallery a', { 
        overlayOpacity: 0.9,
        captionsData: "alt",
        captionDelay: 250,
        animationSpeed: 500,
});
