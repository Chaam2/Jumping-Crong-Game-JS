//캔버스 설정
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.heigth = window.innerHeight - 100;

//오브젝트 정의
let dino = {
  x : 100,
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

//애니메이션에 필요한 변수들
let cactusArr = []
let cactusTimer = 0
let isJumping = false
let jumpTimer = 0
let startAni;
document.addEventListener('keydown',(e)=>{
  if(e.code === "Space"){
    isJumping = true
  }
})

//충돌체크
function collisionCheck(dino, cactus){
  const xDiff = cactus.x - (dino.x + dino.width)
  const yDiff = cactus.y - (dino.y + dino.height)
  if (xDiff < 0 && yDiff < 0) { // 충돌이 발생했으면서
    if (cactus.x + cactus.width > dino.x) { // 선인장이 디노보다 오른쪽에 있을 경우
      cancelAnimationFrame(startAni);
    }
  }
}

//애니메이션 실행
function animation(){
  startAni = requestAnimationFrame(animation)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.strokeRect(0,0,canvas.width,canvas.height)
  cactusTimer++
  if(cactusTimer % 120 ===0){
    let cactus = new Cactus()
    cactusArr.push(cactus)
  }
  cactusArr.forEach((cactus,index,arr)=>{
    if(cactus.x<1){
      arr.splice(index,1)
    }
    collisionCheck(dino,cactus)
    cactus.x-=3
    cactus.draw()
  })

  dino.draw()
  if(isJumping){
    jumpTimer++
    dino.y -=4 
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

