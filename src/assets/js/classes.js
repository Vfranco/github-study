class Signature {
    sayHIiAgain(who) {
        console.log("hi again!", who);
    }
}

export class MyClass extends Signature {
    whoami = '';

    constructor(who) {
        super();
        this.whoami = who;
    }

    sayHi() {
        console.log("hi!", this.whoami);
        this.sayHIiAgain(this.whoami);
        this.myName(this.whoami);
    }

    myName(who) {
        console.log(who);
    }
}


