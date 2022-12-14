import {
    galleryItems
} from './gallery-items.js';

const divElement = document.querySelector(".gallery");

divElement.addEventListener('click', imageOriginal);

const galleryElement = galleryItems
    .map(({
        preview,
        original,
        description
    }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}" />
    </a>
    </div>`;
    })
    .join("");

divElement.innerHTML = galleryElement;

function imageOriginal(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width='800' height='600'></img>`
    );
    instance.show();

    divElement.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}
