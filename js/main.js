
class Game {
    constructor(){
        this.player = null; //will store an instance of the class Player
        this.obstacles = []; //will store instances of the class Obstacle
    }

    start(){
        this.player = new Player();
        this.attachEventListeners();
        
        setInterval(() => {
            this.obstacles.forEach(element => {
                element.moveDown();
            });
        }, 200);

        setInterval(() => {
            //create new obstacle
            const newObstacle = new Obstacle();
            newObstacle.positionX = Math.random()*100;
            this.obstacles.push(newObstacle);
        }, 2000);
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}


class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 10;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveDown(){
        if (this.positionY > 0) {
            this.positionY--;
        } else {
            this.positionY = 100;
        }
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
    }
}

const game = new Game();
game.start();


