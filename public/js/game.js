
function Entity(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.color = "#12aa66";
    
    this.update = function() {
        this.x += this.vx;
        this.y += this.vy;
    }; 

    this.draw = function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    };

    this.collidesWith = function(other) {
        return this.y + this.height > other.y  &&
               this.y < other.y + other.height &&
               this.x + this.width > other.x   &&
               this.x < other.x + other.height;
    };
    

};



var game = {
    ctx: 0,
    canvas: 0,
    entities: []
};


function startGame() {
    game.canvas = document.getElementById("pong-canvas");
    game.ctx    = game.canvas.getContext("2d");

    var ball = new Entity(290, 140, 10, 10);
    ball.vx  = 3; 

    var player = new Entity(0, 0, 10, 60);
    player.y = game.canvas.height / 2 - player.height / 2;

    game.entities.push(ball);
    game.entities.push(player);

    setInterval(run, 20)
}

function run() {
   
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.entities.forEach(function(entity){
        entity.update();
        entity.draw(game.ctx);
    });
}
