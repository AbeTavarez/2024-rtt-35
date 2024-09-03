export interface Learner {
    name: string;
    age: number;
    isAdult: boolean;
}

export interface User {
    name: string;
    age?: number;
    isAdult: boolean;
}



export interface Car {
    brand: string;
    model: string;
    price: number
}

export interface ElectricCar extends Car {
    electricMotor: boolean
}