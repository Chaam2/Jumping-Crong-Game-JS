const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.heigth = window.innerHeight - 100;

let dino = {
  x : 10,
  y : 100,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}
dino.draw();

class Cactus{
  constructor(){
    this.x = canvas.width
    this.y = 100
    this.width = 50
    this.height = 50
  }
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}


let cactusArr = []
let cactusTimer = 0
let isJumping = false
let jumpTimer = 0
document.addEventListener('keydown',(e)=>{
  if(e.code === "Space"){
    isJumping = true
  }
})

function animation(){
  requestAnimationFrame(animation)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  cactusTimer++
  if(cactusTimer % 120 ===0){
    let cactus = new Cactus()
    cactusArr.push(cactus)
  }
  cactusArr.forEach((cactus)=>{
    cactus.x-=3
    cactus.draw()
  })

  dino.draw()
  if(isJumping){
    jumpTimer++
    dino.y -=3
  }
  if(jumpTimer>30){
    isJumping = false
  }
  if(!isJumping && dino.y<100){
    dino.y +=2
    jumpTimer = 0
  }
}
animation()

