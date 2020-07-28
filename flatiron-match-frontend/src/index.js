document.addEventListener("DOMContentLoaded", () => {
    const url = "http://localhost:3000/cards"
    

    function fetchCards() {
        fetch(url)
        .then(resp => resp.json())
        .then(cards => cards.forEach(card => 
            renderCards(card)))
    }

  function renderCards(card) {
    const frontFace = document.getElementById('memory-game')
    const div = document.createElement('class')
    div.className = 'memory-card'
    div.id = card.id
    div.innerHTML = `      
        <img class="front-face" src=${card.cardside}>
        <img class="back-face" src="https://cdn.bootcamprankings.com/spai/w_210+q_lossy+ret_img+to_webp/https://bootcamprankings.com/wp-content/uploads/2019/10/36776548_1553913434714928_4773274533622710272_n.png" alt="Memory Card">
    `
    frontFace.append(div)
    }   

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard(card) { 
        if (lockBoard) return;
        if (card === firstCard) return;
        card.classList.add('flip');
    
        
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = card;
            return;
        }

        secondCard = card;

        checkForMatch();
    }

    function checkForMatch() {
        if (firstCard.id === secondCard.id) {
            disableCards();
        return;
    }

    unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }

    

    function unflipCards() {
        lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
    }
                
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    const memoryCard = document.querySelectorAll('.memory-card');

    (function shuffle() {
        memoryCard.forEach(card => {
          let ramdomPos = Math.floor(Math.random() * 16);
          card.style.order = ramdomPos;
        });
      })();



    //listners
    document.addEventListener('click', function(e) {
        if(e.target.className = ('memory-card')){
        flipCard(e.target)
        }
    })


    fetchCards()
})   
