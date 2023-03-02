"use strict";
//import { z } from 'zod'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log('Test');
//Podstawowe typy
let age = 33;
let ageAsString = 'Trzydzieści trzy';
console.log(age, ageAsString);
//Funkcje
const input1 = document.querySelector('#input1');
const add = (a1, a2) => a1 + a2;
add(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), 10);
//union type
const log = (a1) => console.log(`Wartość ${a1}`);
let k = 1010;
log(10);
log('Test');
class MySurve {
    constructor() {
        this.queastions = null;
        this.add = (input) => {
            this.queastions = new Array();
            this.queastions.push({
                answer: 'sd',
                question: 'sd2',
            });
        };
    }
}
//Decorator
function first() {
    console.log('first(): factory evaluated');
    return function (target, propertyKey, descriptor) {
        console.log('first(): called');
    };
}
function second() {
    console.log('second(): factory evaluated');
    return function (target, propertyKey, descriptor) {
        console.log('second(): called');
    };
}
class A {
    test() {
        console.log('Test');
    }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], A.prototype, "test", null);
const w = new A();
console.log(w.test());
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let a = 's';
let m = a;
//let m1: Arguments<Z> = "ss"
// const parser = z.object({
//   a: z.string().max(10),
// })
// console.log(parser.parse('as'))
