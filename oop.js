//ES6 constructor function
function names (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.getNames = () => {
        return `my name is ${this.firstname} ${this.lastname}`;
    }
}

let getval = new names('pedro', 'penduko');

console.log(getval.getNames())


//class name should start in uppercase

class Tao {
    constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }
    getClassValue() {
        return `my name is ${this.firstName} ${this.lastName}`;
        
    }
}

let tao1 = new Tao('naddan', 'marcelo');

console.log(tao1.getClassValue());