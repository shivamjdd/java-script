// const car1 = {
//   name: "Ford",
//   model: "Mustang",
//   year: 2024,
//   color: "Red",
//   drive: function(){console.log(`You drive the ${this.name}`)}
// }


// const car2 = {
//   name: "Cherolet",
//   model: "Camaro",
//   year: 2024,
//   color: "Blue",
//   drive: function(){console.log(`You drive the ${this.name}`, ${this.model})}
// }

// const car3 = {
//   name: "Hyundai",
//   model: "I20",
//   year: 2024,
//   color: "Silver",
//   drive: function(){console.log(`You drive the ${this.name}`, ${this.model})}
// }
// car1.drive()

function Car(make, model , year , color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year
  }
  
  
  const car1 = new Car("Ford","Camaro",2024,"Red");
  const car2 = new Car("hYUNDAI","i20",2014,"blue");
  
  console.log(car1.make, car1.model , car1.year , car1.color)