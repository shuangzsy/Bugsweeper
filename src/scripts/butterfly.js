class Butterfly{
  constructor(canvas, x, y){
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.c = this.canvas.getContext('2d');
    this.dx = 1.5;
    this.dy = 1.5;
    this.imgTag = new Image();
    this.imgTag.onload = this.animate.bind(this);
    this.imgTag.src = './dist/butterfly.png';
  }

  animate(){
    window.requestAnimationFrame(this.animate.bind(this));
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.context.beginPath();
    // console.log(this.y)
    // this.context.arc(this.x, this.y, 15, 0, Math.PI * 2, false);
    // this.context.strokeStyle = 'blue';
    // this.context.stroke();
    this.c.drawImage(this.imgTag, this.x, this.y, this.imgTag.width / 40, this.imgTag.height / 30);
    this.c.drawImage(this.imgTag, this.canvas.width - this.x, this.canvas.height - this.y, this.imgTag.width / 40, this.imgTag.height / 30);
    this.c.drawImage(this.imgTag, 50 - this.x, 50 - this.y, this.imgTag.width / 40, this.imgTag.height / 30);

    if (this.y  > this.canvas.height || this.y < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }

}

export default Butterfly;