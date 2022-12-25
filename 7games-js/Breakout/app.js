const grid=document.querySelector('.grid')
const block=document.createElement('div')
// block.classList('blocks')
const blockWidth=100
const blockHeight=20

// create blobk

class Block{
constructor(xAxis, yAxis){
    this.bottomLeft=[xAxis, yAxis]
    this.bottomRight=[xAxis+blockWidth, yAxis]
    this.topLeft=[xAxis, yAxis+blockHeight]
    this.topRight=[xAxis+blockWidth, yAxis+blockHeight]

}
}


const AllBlocks=[
    new Block(10,270)
]



function addBlock(){
    
    for(let i=0;i<AllBlocks.length;i++){
block.className='blocks';
    grid.appendChild(block)
    }
}
addBlock()
