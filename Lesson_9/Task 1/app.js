class SimpleMarker {
    symb = 0.5;
    
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    };

    get ink() {
        return this._ink;
      }

    set ink(value) {
        if (value < 0) {throw new Error("Не хватает чернил для печати")};
        this._ink = value;
      };

    print(str) {
        let result = document.getElementById('result');

        for (let i = 0; i < str.length; i++) {
            if (this._ink != 0) {
                if (str[i] === ' ') {
                    this._ink += this.symb;
                }; 
                result.innerHTML += str[i];
                result.style.color = this.color;
                this._ink -= this.symb;
            } else {
                document.getElementById('warning').innerHTML = "Marker is over";
                break; 
            };
        };
    };
};

class Fill extends SimpleMarker {
    up(ink) {
        if(ink > 100) {
            ink = 100;
        } else if(ink < 0) {
            ink = 0;
        } else {
            this._ink += ink;
        };
    };
};


let marker = new Fill('red', 10);

marker.up(20);

marker.print('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur reiciendis voluptatem neque eveniet quidem sapiente minus aliquid dolore consectetur dolorum dolores maiores nulla voluptate doloremque placeat, itaque ab labore ipsa?');




