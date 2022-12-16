import {
    galleryItems
} from './gallery-items.js';

// console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const element = document.querySelector(".gallery");

const galleryElement = galleryItems
    .map(({
        preview,
        original,
        description
    }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
    </a>`;
    })
    .join("");

element.innerHTML = galleryElement;

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

