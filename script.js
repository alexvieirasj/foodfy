const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id');
        const nameValue = card.getElementsByTagName('h3')[0].innerHTML;
        const authorValue = card.getElementsByTagName('p')[0].innerHTML;

        console.log(nameValue)
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `assets/${videoId}.png`; //busca na propriedade diretamente
        modalOverlay.querySelector('h3').innerHTML = `${nameValue}`;
        modalOverlay.querySelector('p').innerHTML = `${authorValue}`;
    });
}

document.querySelector('.close-modal')
    .addEventListener('click',  function(){
        modalOverlay.classList.remove('active');
        modalOverlay.querySelector('img').src = ""; //busca na propriedade diretamente
    });
