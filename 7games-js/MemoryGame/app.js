let cardArray = [
    {
        name: 'fries',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (1).jpeg',
    },
    {
        name: 'cheeseburger',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (1).jpeg',
    },
    {
        name: 'hot dog',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (2).jpeg',
    }, {
        name: 'ice-cream',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (3).jpeg',
    }, {
        name: 'milkshake',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (4).jpeg',
    }, {
        name: 'pizza',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (5).jpeg',
    },
    {
        name: 'fries',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (1).jpeg',
    },
    {
        name: 'cheeseburger',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (1).jpeg',
    },
    {
        name: 'hot dog',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (2).jpeg',
    }, {
        name: 'ice-cream',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (3).jpeg',
    }, {
        name: 'milkshake',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (4).jpeg',
    }, {
        name: 'pizza',
        img: '/Users/admin/GayatriJS/7games-js/MemoryGame/images/download (5).jpeg',
    }

]

cardArray.sort(()=> 0.5 - Math.random())
console.log(cardArray);
let divgrid=document.querySelector('#grid')
// console.log(divgrid);

function createBoard(){
    for(let i=0; i<10; i++){
       let card=document.createElement('img') 
       card.setAttribute('src','./images/download (6).jpeg')
       card.setAttribute('data-id',i)
       divgrid.appendChild(card)
       console.log(divgrid);
    }
}