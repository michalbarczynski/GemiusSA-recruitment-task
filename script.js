const image = document.querySelector('.bottom_right');

image.addEventListener('click', () => {
    image.style.opacity = 0;
    setTimeout(() => {
        image.classList.toggle('top_left');
        image.style.opacity = 1;
    }, 2500);
});

setTimeout(() => {
    image.style.display = "block";
}, 3000);