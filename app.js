const showShare = document.querySelector('.share__icons');
const shareButton = document.querySelector('button');




shareButton.addEventListener('click', () => {
    showShare.classList.toggle('show');
    shareButton.classList.toggle('show');


})