import Person from "./Person.js"
import Employee from "./Employee.js"

class Animal {
    constructor(color) {
        this.color = color;
    }

    details() {
        console.log(`This ${this.color} ${this.type()} says ${this.sound()}`);
    }

    type() {
        return 'animal';
    }

    sound() {
        return 'animal noises';
    }
}

class Dog extends Animal {
    type() {
        return 'dog';
    }

    sound() {
        return 'ham ham';
    }
}

let animal = new Animal('blue');
animal.details();

let dog = new Dog('brown');
dog.details();


var person1 = new Person("Carp Mara Alexandra", "29923456775", "Baia Mare", "Baia Mare");
var employee1 = new Employee("Pop Maria", "256655636334", "Sibiu", "Sibiu", "Sibiu");
var employee2 = new Employee("Pop Ioana", "234356545657", "Brasov", "Brasov", "Brasov");
//console.log(person1.getFullInformation());
console.log(employee1.getAdress());
console.log(employee1.getJAdress());
console.log(employee1.getJobAdress());
//console.log(person1.changeJobAdress());
console.log(employee2.getAdress());
console.log(employee2.getJAdress());
console.log(employee2.getJobAdress());



const arr = [1, -2, 6, -7, 10, 9, 14, true, false, null, undefined];
var filtered = arr.filter(function(item) {
    return (parseInt(item) == item);
});
console.log(filtered);

const arr2 = filtered.map(function(item) {
    return item * 10;
});
console.log(arr2);

var result = arr2.reduce((a, b) => a + b, 0);
console.log(result);