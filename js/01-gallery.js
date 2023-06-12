import { galleryItems } from './gallery-items.js';


const listGalaryContainer = document.querySelector(".gallery");
const listItems = createListElementsGalery(galleryItems);

listGalaryContainer.insertAdjacentHTML("beforeend", listItems);

listGalaryContainer.addEventListener("click", handleGalleryContainerClick);


function createListElementsGalery(items) {
    return items.map( ({preview, original, description}) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
        alt="${description}"
        />
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

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`, {

    })

    instance.show();

    const handleCloseButtonEsc = (event) => {
        if (event.key === "Escape")
        instance.close();
    };

    document.addEventListener("keydown", handleCloseButtonEsc);
}




