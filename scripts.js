document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.network-graph');
    adjustImageSize(mainImage);
});

window.addEventListener('resize', function() {
    const mainImage = document.querySelector('.network-graph');
    adjustImageSize(mainImage);
});

function adjustImageSize(imageElement) {
    if (window.innerWidth < 600) {
        imageElement.style.width = '100%';
    } else {
        imageElement.style.width = '80%';
    }
}
