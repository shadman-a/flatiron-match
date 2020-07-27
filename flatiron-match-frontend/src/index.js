document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.memory-card');
    const url = "http://localhost:3000/cards"

    function fetchCards() {
        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


    function flipCard() {
        this.classList.toggle('flip');
    }

/// we need to store the image to a div





    cards.forEach(card => card.addEventListener('click', flipCard));
    
    fetchCards()
})   