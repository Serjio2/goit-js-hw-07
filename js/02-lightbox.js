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
        <a class="gallery__link" href="${preview}">
        <img class="gallery__image" src="${original}" alt="${description}" />
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


    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsDelay: 250,
        // cationsData,
     });

    // var lightbox = $('.gallery a').simpleLightbox({ /* options */ });


    // const instance = basicLightbox.create(`
    // <img src="${event.target.dataset.source}" width="800" height="600">`)

    // instance.show()

    // console.log(event.target.dataset.source);
}

console.log(listItems);

