class Auto {

    public position: number
    public speed: number

    move() {
        this.position += this.speed
    }


}

var auto = new Auto();
auto.move();

console.log(auto.position)