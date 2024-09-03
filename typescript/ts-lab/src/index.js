class Vehicle {
    status = "stopped";
  
    constructor(make, model, wheels) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model, "four");
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make, model) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle) {
    if (vehicle.status === "running") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUppercase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.mdl);
  