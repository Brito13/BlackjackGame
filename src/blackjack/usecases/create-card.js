




const createCard = (carta) =>  {  

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('cartas');
    imgCarta.src = `assets/cartas/${carta}.png`;
    return imgCarta;
}

export default createCard;