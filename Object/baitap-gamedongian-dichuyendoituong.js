function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;


    this.getHeroElement = function(){
        return '<img alt="Pikachu" width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok right: ' + this.left);
    }

    this.moveBottom = function (){
        this.top += this.speed;
        console.log('ok bottom: ' + this.top);
    }

    this.moveLeft = function (){
        this.left -= this.speed;
        console.log('ok left: ' + this.left);
    }

    this.moveTop = function (){
        this.top -= this.speed;
        console.log('ok top: ' + this.top);
    }

}
let speed = +prompt("Enter speed");
let hero = new Hero('https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png', 20, 30, 200, speed);
function start(){
    if(hero.top === 20 && hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    else if(hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size){
        hero.moveBottom();
    }
    else if(hero.left > 0){
        hero.moveLeft();
    }
    else if(hero.top > 0){
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)

}

start();