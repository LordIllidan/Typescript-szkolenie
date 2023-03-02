declare let age: number;
declare let ageAsString: string;
declare const input1: HTMLInputElement | null;
declare const add: (a1: number, a2: number) => number;
declare const log: (a1: number | string) => void;
declare let k: number;
type Answer = string | number;
type Question<T> = {
    question: string;
    answer: T;
};
interface Survey<T extends Answer | Array<number>> {
    queastions: Array<Question<T>> | null;
    add: (input: Question<T>) => void;
}
declare class MySurve implements Survey<Answer> {
    queastions: Question<Answer>[] | null;
    add: (input: Question<Answer>) => void;
}
declare function first(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function second(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class A {
    test(): void;
}
declare const w: A;
declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
type mA = 's';
type Arguments<T> = T extends mA ? mA : never;
type Return<T> = T extends mA ? mA : never;
type Z = 'ss';
declare let a: mA;
declare let m: Arguments<mA>;
