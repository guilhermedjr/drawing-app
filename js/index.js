var s = function (sketch) {
    let $ = document.querySelector.bind(document);
    const colorInput = $('#color');
    const weightInput = $('#weight');
    const clearInput = $('#clear');
    sketch.setup = function(){
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(255);
    };
    const paths = [];
    let currentPath = []
    sketch.draw = function(){
        sketch.noFill();
        if (sketch.mouseIsPressed) {
            const point = {
                x: sketch.mouseX,
                y: sketch.mouseY,
                color: colorInput.value,
                weight: weightInput.value
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
    };
    sketch.mousePressed = function(){
        currentPath = [];
        paths.push(currentPath);
    };
    /*sketch.(clear.addEventListener('click', () => {
        paths.splice(0);
        background(255);
    }));*/
}

var myp5 = new p5(s);


/*setup();
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
});*/