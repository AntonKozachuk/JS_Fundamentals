import { Users } from './users.js';

class Box{
    constructor(w,l,h){
        this.width = w;
        this.length = l;
        this.height = h;
    }

    volume(){
        return this.width * this.height * this.length;
    }

    isFit(w, l, h){
        return this.volume() >= w * l * h;
    }
}

class ExtendedBox extends Box{
    constructor(w, l, h, weight){
        //любые операции без this
        super(w, l, h);
        //с Этой строки уже можем работать с this

        this.maxWeight = weight;
    }

    isFit(w, l, h, weight){
        return super.isFit(w, l, h) && this.maxWeight >= weight;
    }
}

const b = new ExtendedBox(2, 2, 3, 50);

console.log(b.isFit(1, 1, 4, 33));

const users = new Users();