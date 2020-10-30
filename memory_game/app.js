document.addEventListener('DOMContentLoaded',() => {
    // all cards
    const cardArray=[
        {
            name : "2C",
            img : "images/2C.png"
        },
        {
            name : "2D",
            img : "images/2D.png"
        },
        {
            name : "2H",
            img : "images/2H.png"
        },
        {
            name : "2S",
            img : "images/2S.png"
        },
        {
            name : "3C",
            img : "images/3C.png"
        },
        {
            name : "3D",
            img : "images/3D.png"
        },
        {
            name : "2C",
            img : "images/2C.png"
        },
        {
            name : "2D",
            img : "images/2D.png"
        },
        {
            name : "2H",
            img : "images/2H.png"
        },
        {
            name : "2S",
            img : "images/2S.png"
        },
        {
            name : "3C",
            img : "images/3C.png"
        },
        {
            name : "3D",
            img : "images/3D.png"
        }
    ]
    cardArray.sort(() => 0.5-Math.random());

    const finalScore =document.querySelector('#score');
    const grid=document.querySelector('.grid');
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    
    // creating board

    function createBoard() {
        for(let i=0;i<cardArray.length;i++)
        {
            var card=document.createElement('img');
            card.setAttribute('src','images/purple_back.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipcard);
            grid.appendChild(card);
        }
        
    }

    //check for matches
    function checkForMatch() {
        var cards =document.querySelectorAll('img');
        const option1Id=cardsChosenId[0];
        const option2Id=cardsChosenId[1];
        if(option1Id == option2Id)
        {
            cards[option1Id].setAttribute('src','images/grey_back.png');
            cards[option2Id].setAttribute('src','images/grey_back.png');
            alert('You clicked the same image twice');
        }
        else
        if(cardsChosen[0] === cardsChosen[1])
        {
            alert('Match Found');
            cards[option1Id].setAttribute('src','images/gray_back.png');
            cards[option2Id].setAttribute('src','images/gray_back.png');
            cards[option1Id].removeEventListener('click',flipcard);
            cards[option2Id].removeEventListener('click',flipcard);
            cardsWon.push(cardsChosen);
        }
        else
        {
            cards[option1Id].setAttribute('src','images/purple_back.png');
            cards[option2Id].setAttribute('src','images/purple_back.png');
            alert('Try Again');

        }
        cardsChosen=[];
        cardsChosenId=[];
        finalScore.textContent=cardsWon.length;
        if(cardsWon.length === cardsArray.length/2)
        {        
            finalScore.textContent='Congratulations! All matches found ';
        }
        
    }

    //flip your card
    function flipcard() {
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenId.push(cardID);
        this.setAttribute('src',cardArray[cardID].img);

        if(cardsChosen.length === 2)
        {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});