class A {
    constructor(p = 2){
        this.p1 = p;
    }

    f1(){
        return 7;
    }
}

class B extends A{

    constructor(p = "Hello") {
        super();
        this.p2 = p;
    }

    f2(x){
        return 2*x;
    }
}

class C extends B{
    constructor() {
        super();
        this.p2 = "Bye";
    }
}

class D extends C{
    constructor(props) {
        super(props);
        this.p4 = 7 * this.p1;
    }

    f2(x){
        return super.f2(x)*5;
    }

    f4(x){
        return super.f1() + this.f2(x);
    }
}

var a = new A();
var b = new B();
var c = new C();
var d = new D();


console.log(a.p1);//2
console.log(a.f1());//7



console.log(b.p2);//Hello
console.log(b.f2(1));//2

console.log(c.p2);//Bye

console.log(d.p4);//14
console.log(d.f2(1));//10
console.log(d.f4(1));//17