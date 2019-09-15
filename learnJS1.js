function User(age, name) {
    this.age = age;
    this.name = name;
    this.hi = function(){
        console.log(`Hello, I ${this.name}, me ${this.age} years.`);
    }
}

user = new User(23, 'John');
user.hi();

function pow(x,n) {
    return n==1 ? x : (x*pow(x,n-1));
}
console.log (`2 on step 2 = ${pow(2,9)}`);

let company = {
    sales: [{name: 'Johny', salary: 10}, {name: 'Alisa', salary: 20}],
    develop: {
        otd1: [{name: 'Sotr1', salary: 20}, {name: 'Sotr2', salary: 30}],
        otd2: [{name: 'Sotr4', salary: 30}, {name: 'Sotr5', salary: 20}],
    }
};

function sumSalry(dep) {
    if (Array.isArray(dep)){
        return dep.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let otd of Object.values(dep)){
            sum += sumSalry(otd);
        }
        return sum;
    }
}

console.log(`Summ salary All Emplyee of compny: ${sumSalry(company)}`);

function arg(q,w, ...ost) {
    for (let i of arguments) console.log(i);
}

arg('1', '2', 3, 4, 'f');

let arr=[1,2,3,4];
console.log(Math.max(...arr));

let str='Hello!';
console.log(...str);

let user1={
    name: 'Vasya',
};
function f1() {
    console.log(this.name);
}
f2=f1.bind(user1);
f2();

class Users {
    constructor (name){
        this._name = name;
    }
    sayHi(){
        console.log(`I ${this._name}`);
    }
}

let user2 = new Users('Petya');
user2.sayHi();
