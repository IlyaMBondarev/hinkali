let chiefsPhotos = document.querySelectorAll('.chiefs__image-form');

chiefsPhotos.forEach(photo => {
    let src = photo.querySelector('.chiefs__image').src;
    let back = photo.querySelector('.chiefs__image-bg > div');
    back.style.background = `url(${src}) no-repeat center`;
    back.style.backgroundSize = 'cover';
})