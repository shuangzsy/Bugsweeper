class Canvas {
  constructor(canvas, e) { 
    this.canvas = canvas;
    this.e = e;

  };

  getCursorPosition() {
    this.canvas.addEventListener('click', function (event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      console.log("x: " + x + " y: " + y);
    }, false);
  }



}