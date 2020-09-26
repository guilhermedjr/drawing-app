$document.ready(function(){

var $ = document.getElementById.bind(document);

const color = $('color');
const weight = $('weight');
const clear = $('clear');

setup();
const paths = [];
let currentPath = [];
draw();

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
}

function draw(){
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: color.value,
            weight: weight.value
        };
        currentPath.push(point);
        
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
           stroke(point.color);
           strokeWeight(point.weight);
           vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed(){
    currentPath = [];
    paths.push(currentPath);
}

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});

});