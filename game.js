var cvs = document.getElementById("canvas")
var vid = cvs.getcontext("2d")

var bird = new image()
var bg = new image()
var fg = new image()
var pipeup = new image()
var pipedown = new image()

bird.src = "img/bird.png"
bg.src = "img/bg.png"
fg.src = "img/fg.png"
pipeup.src = "img/pipeUp.png"
pipedown.src = "img/pipeBottom.png"

var gap = 90

document.addEventListener("keydown",moveUp)

function moveUp (){
    ypos -= 20
    fly.play()
}

var pipe = []
pipe[0] = {
    x: cvs.width,
    y: 0 
}

var xpos = 10
var ypos = 150
var grav = 1
var score = 0

function draw( ){
    vid.drawimage(bg,0,0)

    for(i=0;i<pipe.length;i++){
        vid.drawimage(pipeup, pipe[i].x, pipe[i].y)
        vid.drawimage(pipedown, pipe[i].x, pipe[i].y + pipeup.height + gap)
        pipe[i]. x--

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
    y: math .floor(math.random() * pipeup.height)-pipeup.height            })
        }
        if (xPos +bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height+gap)
            && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + cvs.height - fg.height)){
                location.reload();
          }
          if (pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
        }

vid.drawimage(fg,0,cvs.height - fg .height)
vid.drawimage(bird,xpos,ypos)

ypos+=grav
vid.fillstyle("#000")
vid.font = "24px"
vid.filltext("счёт :"+ score,10,cvs.height - 20)
requestAnimationFrame
    }

pipedown.onload= draw