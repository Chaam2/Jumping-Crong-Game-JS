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
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}
dino.draw();

class Cactus{
  constructor(){
    this.x = 300
    this.y = 100
    this.width = 50
    this.height = 50
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}

let cactusArr = []
let timer = 0
function animation(){
  requestAnimationFrame(animation)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  timer++
  if(timer % 120 ===0){
    let cactus = new Cactus()
    cactusArr.push(cactus)
  }
  cactusArr.forEach((cactus)=>{
    cactus.x--
    cactus.draw()
  })

  dino.draw()
}
animation()