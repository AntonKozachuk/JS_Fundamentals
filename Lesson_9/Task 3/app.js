class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get radius() {
        return this._radius;
    };

    set radius(value) {
        this._radius = value;
    };

    get diameter() {
        return this._radius * 2;
    };

    area() {
        return Math.PI * this._radius ** 2;
    };

    circumference() {
        return 2 * Math.PI * this._radius;
    };
};

let circle = new Circle(5);

console.log('Радиус окружности: ' + circle.radius);
console.log('Диаметр окружности: ' + circle.diameter);
console.log('Площадь окружности: ' + circle.area());
console.log('Длина окружности: ' + circle.circumference());
