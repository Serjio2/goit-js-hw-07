import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const listGalaryContainer = document.querySelector(".gallery");
const listItems = createListElementsGalery(galleryItems);

listGalaryContainer.insertAdjacentHTML("beforeend", listItems);

listGalaryContainer.addEventListener("click", handleGalleryContainerClick)


function createListElementsGalery(items) {
    return items.map( ({preview, original, description}) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
}).join("");
}

function handleGalleryContainerClick(event) {
    event.preventDefault();

    const isGalleryImageEl = event.target.classList.contains("gallery__image");

    if (!isGalleryImageEl) {
        return
    }
}

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
 });

