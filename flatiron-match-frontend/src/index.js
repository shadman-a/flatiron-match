const url = "http://localhost:3000/cards"
const userurl = "http://localhost:3000/users"
const commenturl = "http://localhost:3000/comments"
const form = document.getElementById('form')
const commentForm = document.getElementById('comment-form')


document.addEventListener("DOMContentLoaded", () => {

    function fetchCards() {
        fetch(url)
        .then(resp => resp.json())
        .then(data => data.forEach(cards => renderCards(cards)))
    }

    function renderCards(cards) {
        const frontFace = document.getElementById('memory-game')
        const div = document.createElement('div')
        div.className = 'memory-card'
        div.id = cards.id
        div.innerHTML = `      
            <img class="front-face" src=${cards.cardside}> 
            <img class="back-face" src="https://cdn.bootcamprankings.com/spai/w_210+q_lossy+ret_img+to_webp/https://bootcamprankings.com/wp-content/uploads/2019/10/36776548_1553913434714928_4773274533622710272_n.png">
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
        //console.log(firstCard.children[0].src)
        if (firstCard.children[0].src  === secondCard.children[0].src) {
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
            document.getElementById('memory-game').style.order
          let ramdomPos = Math.floor(Math.random() * 16);
        card.style.order = ramdomPos;
        });
    })();

    fetchCards()

    function postUser(username) {
        fetch(userurl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            
            body: JSON.stringify({
               "name": username
            })
        })
        .then(resp =>resp.json())
        .then(data => renderUser(data))
    }

    function renderUser(data) {
        const ul = document.querySelector('.user')
        ul.id = data.id
        ul.innerHTML = `${data.name}
        <button id="delBtn type="button">Delete</button>`
    }
    

    const ul = document.querySelector('.user')
    
    function deleteUser(id) {
        fetch(`${userurl}/${id}`, {method: "DELETE"})
        ul.remove() 
    }

    function postComment(comment, userId) {
        
        
    }

//listeners

    document.addEventListener('submit', function(e) {
        e.preventDefault();
        if(e.target.id === "form"){
        let username = form.username.value
        postUser(username);
        form.reset()
        } else if (e.target.id === "comment-form") {
            let comment = commentForm.comment.value
            let userId = commentForm.parentElement.parentElement.children[0].children[2].children[0].id
            postComment(comment, userId)
            commentForm.reset()
        }
    })
                
    document.addEventListener('click', function(e) {
        if(e.target.className === 'back-face'){
        flipCard(e.target.parentElement)
        } else if (e.target === document.querySelector('button')){
        let id = e.target.parentElement.parentElement.children[0].id
        deleteUser(id)
        }
    })
    
})