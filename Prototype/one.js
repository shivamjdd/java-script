const obj = {
    name: "shivam gupta",
    last: "Gupta",
    getName: function() {
        return this.name
    },
    getRoll: function () {
        return this.roll;
    }
}

const  obj2 = {
    name: "Vivek",
    roll: 1,
    __proto__: obj

}

// console.log(obj2.getRoll());


const obj3 = {
    class: "MCA",
    __proto__: obj2
}

// console.log(obj3.last);

const array = ["Shivam"];
console.log(array);

const array1 = new Array();
console.log(array1);


Array.prototype.show = function() {
    return this;
}

const cities = ['jammu'];
console.log(cities.show());

Array.prototype.convertIntoObject = function () {
    let newObj = {};
    this.forEach(element=> {
        newObj[element] = element
    })
    return newObj;
}

console.log(cities.convertIntoObject());


function MyPrototype(name,roll) {
    this.name=name;
    this.roll=roll;
}

MyPrototype.prototype= obj;

const myproto = new MyPrototype("Rohan", "121");
console.log(myproto.getRoll());
