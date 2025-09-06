class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  print() {
    console.log(
      `width: ${this.width}, height: ${this.height}, color: ${this.color}`
    );
  }
}

const rect = new Rectangle(2, 4)

