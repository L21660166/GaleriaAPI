const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('loadMore');

async function fetchImages() {
    const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=g7VpbVb9dXX8V5TNZVSHsxMXditZEfUP28PWD6_2zP8');
    const images = await response.json();
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        gallery.appendChild(imgElement);
    });
}

loadMoreButton.addEventListener('click', fetchImages);


fetchImages();
