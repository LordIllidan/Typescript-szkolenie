console.log('Test')

//Podstawowe typy
let age: number = 33
let ageAsString: string = 'Trzydzieści trzy'

console.log(age, ageAsString)

//Funkcje
const input1: HTMLInputElement | null =
  document.querySelector<HTMLInputElement>('#input1')

const add = (a1: number, a2: number) => a1 + a2

add(Number(input1?.value), 10)

//union type
const log = (a1: number | string) => console.log(`Wartość ${a1}`)

log(10)
log('Test')

// Własne typy
type Answer = string | number

type Question<T> = {
  question: string
  answer: T
}

interface Survey<T extends Answer | Array<number>> {
  queastions: Array<Question<T>> | null
  add: (input: Question<T>) => void
}

class MySurve implements Survey<Answer> {
  queastions: Question<Answer>[] | null = null
  add = (input: Question<Answer>) => {
    this.queastions = new Array<Question<Answer>>()
    this.queastions.push({
      answer: 'sd',
      question: 'sd2',
    })
  }
}

//Decorator

function first() {
  console.log('first(): factory evaluated')
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('first(): called')
  }
}

function second() {
  console.log('second(): factory evaluated')
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('second(): called')
  }
}

class A {
  @first()
  @second()
  test() {
    console.log('Test')
  }
}

const w: A = new A()

console.log(w.test())
