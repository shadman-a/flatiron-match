document.addEventListener("DOMContentLoaded", () => {
    const memoryCard = document.querySelector('.memory-card');
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
    div.innerHTML = `      
    <img class="front-face" id= ${card.id} src=${card.cardside}>
    <img class="back-face" src="https://cdn.bootcamprankings.com/spai/w_210+q_lossy+ret_img+to_webp/https://bootcamprankings.com/wp-content/uploads/2019/10/36776548_1553913434714928_4773274533622710272_n.png" alt="Memory Card">
`
    frontFace.append(div)
  }


    function flipCard(card) {
        //toggleClass('flip');
        //console.log(card.className)
       
    }

    //console.log(memoryCard)

    document.addEventListener('click', function(e) {
        if(e.target.innerText = ('memory-card'))
        flipCard(e.target.className)
        console.log(e.target.className);
        
    })
/// we need to store the image to a div


    
    fetchCards()
})   