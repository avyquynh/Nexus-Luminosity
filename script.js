    let myIcon;
    let angle = 0;
      
    function preload() {
        myIcon = loadImage("images/lablogo.jpg");
    }
      
      function setup() {
        let container = document.getElementById('logo');
        let canvas = createCanvas(100, 100);
        canvas.parent('logo'); 
        imageMode(CENTER);
      }
      
      function draw() {
        background(0);
      
        let x = width / 2.0;
        let y = height / 2.0;
      
        push();
        translate(x, y);
        rotate(radians(angle));

        let imageWidth = myIcon.width * 0.25;
        let imageHeight = myIcon.height * 0.25; 
        image(myIcon, 0, 0, imageWidth, imageHeight);
        angle += 0.35;
      }
      function windowResized() {
        let container = document.getElementById('logo');
        let w = container.offsetWidth;
        let h = container.offsetHeight;
        resizeCanvas(w, h);
      }