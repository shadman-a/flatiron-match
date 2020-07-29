document.addEventListener("DOMContentLoaded", () => {
    const url = "http://localhost:3000/cards"
    

    function fetchCards() {
        fetch(url)
        .then(resp => resp.json())
        //.then(data => shuffle(data))
        .then(data => data.forEach(cards =>
            renderCards(cards)))
           
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

    //listners
        document.addEventListener('click', function(e) {
            if(e.target.className === 'back-face'){
            flipCard(e.target.parentElement)
            }
        })

        const form = document.getElementById('form')
        //console.log(form)
        const userurl = "http://localhost:3000/users"
        const ul = document.querySelector('.user')
        
        //user evernt listener to post
        
        document.addEventListener('submit', function(e) {
            //console.log(e.target)
            //console.log(form)
            e.preventDefault();
            let username = form.username.value
            postUser(username);

        })

        //post user

        function postUser(username) {
            fetch(userurl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            
            body: JSON.stringify({"name": username})
        })
            .then(resp =>resp.json())
            .then(data => ul.innerHTML = `${data.name}
            <button type="button">Edit</button>
            <button type="button">Delete</button>`
            )
           
}
    //edit user for Form

        const edit = document.querySelector('button')
        

        document.addEventListener('click', function(e) {
            //console.log(e.target)
            //console.log(edit)
            //e.preventDefault();
            let username = edit.parentElement.value
            console.log(username)
            //console.log(username)
            patchUser(username, id)
        })
            
      
    })

        //edit patch 
    function patchUser(username, id) {
        fetch(`userurl/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        
        body: JSON.stringify({name: username})
    })
        .then(resp =>resp.json())
        .then(data => ul.innerHTML = data.name)
           
}

//make delete event listener

    document.addEventListener('click', function(e) {
    //console.log(e.target)
    //console.log(edit)
    //e.preventDefault();
        let username = edit.parentElement.value
        console.log(username)
        //console.log(username)
        deleteUser(username, id)
    })


            function deleteUser(username, id) {
                fetch( `userurl/${id}`, {
                method: "DELETE",
            })
                ul.remove() 
       
}

      
