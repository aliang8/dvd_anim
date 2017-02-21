var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var clrBtn = document.getElementById("clear");
var circBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
var stopBtn = document.getElementById("stop");
var rid;
var img = new Image();
img.src = "dvd.jpg";

//clear button
var clear = function(){
    ctx.clearRect(0, 0, w, h);
};

clrBtn.addEventListener("click", clear);

//stop button
var pause = function(){
    window.cancelAnimationFrame(rid);
};

stopBtn.addEventListener("click", pause);

//circleAnimation
var circleAnimation = function(){
	window.cancelAnimationFrame(rid)
	var x = w / 2;
    var y = h / 2;
    var rate = 1;
    var r = 1;
    var maxRadius = 250;

    var animate = function() {
        clear();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "lightskyblue";
        ctx.fill();
        rid = window.requestAnimationFrame(animate);
        if (r > maxRadius || r == 0) {
            rate *= -1;
        }
        r += rate;
    }
    animate();
};

circBtn.addEventListener("click", circleAnimation);

var rand = function(a, b) {
    return (b - a) * Math.random() + a;
}

//dvd animation
var dvdAnimation = function() {
    window.cancelAnimationFrame(rid);

    var v_x = rand(1, 2);
    var v_y = rand(1, 2);

    var width = 100;
    var height = 55;

    var maxX = w - width + 10;
    var maxY = h - height;
    var x = rand(0, maxX);
    var y = rand(0, maxY);

    var animate = function() {
        clear();
        ctx.drawImage(img, x, y);
        rid = window.requestAnimationFrame(animate);
        if (x > maxX || x < 0) {
            v_x *= -1;
        }
        if (y > maxY || y < 0) {
            v_y *= -1;
        }
        x += v_x;
        y += v_y;
    }
    animate();
}

dvdBtn.addEventListener("click", dvdAnimation);
