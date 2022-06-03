// Follow along with the examples here
console.log("Hello, world!");

function sayHello() {
    console.log("hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloSamip() {
    console.log("Hello, Samip");
}
sayHelloSamip();

function sayHelloto(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloto("Guadalupe");
sayHelloto("Jane");
sayHelloto("R2-D2");
sayHelloto(1);

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(say("Howdy", "partner"));