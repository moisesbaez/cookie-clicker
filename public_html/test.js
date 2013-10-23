var canvas;
var context;

var cookie;
var isCookieReady;

var cookieX;
var cookieY;
var cookieWidth;
var cookieHeight;

var previousFrame;

var clickX;
var clickY;

var clicks;

window.onload = function() {
    Initialize();
    previousFrame = Date.now();
    setInterval(GameLoop, 1);
};


function Initialize() {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");
   
    cookie = new Image();
    clicks = 0;

    cookieX = 102;
    cookieY = 102;
    cookieWidth = 96;
    cookieHeight = 96;

    cookie.src = "cookie.png";
    isCookieReady = false;
    cookie.onload = function() {
            isCookieReady = true;
    };

    canvas.addEventListener("click", isClicked, false);
}

function GameLoop() {
    var currentFrame = Date.now();
    var gameTime = (currentFrame - previousFrame) / 1000;
    GameUpdate(gameTime);
    GameDraw(gameTime);
    previousFrame = currentFrame;
}

function GameUpdate(gameTime) {

}

function GameDraw(gameTime) {
    context.clearRect(0, 0, 300, 300);

    context.fillStyle = "rgb(204, 229, 255)";
    context.fillRect(0, 0, 300, 300);

    if(isCookieReady) {
            context.drawImage(cookie, cookieX, cookieY);
    }

    context.fillStyle = "rgb(24, 0, 0)";
    context.font = "12px Courier New"
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("(X: " + clickX + ", Y: " + clickY + ")", 5, 5);
    context.fillText("Cookies: " + clicks, 5, 284);
}

function isClicked(mouseEvent) {
    clickX = mouseEvent.pageX - this.offsetLeft;
    clickY = mouseEvent.pageY - this.offsetTop;

    if(clickX < (cookieX + cookieWidth) && clickX > cookieX && clickY < (cookieY + cookieHeight) && clickY > cookieY)
            clicks++;
}

