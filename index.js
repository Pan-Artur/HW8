console.log("Task-1");

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = '';

console.log("Way-for");

for (let i = 0; i <= friends.length-1; i++) {
    string = `${friends[i]}, ${friends[i += 1]}, ${friends[i += 1]}, ${friends[i += 1]}`;
    console.log(string);
}

console.log("Way-join");

string = friends.join(", ");
console.log(string);

console.log("Task-2");

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];

console.log(cards);

console.log("Task-3");

cards.splice(2, 1);

console.log(cards);

console.log("Task-4");

cards.splice(4, 0, "Карточка-6");

console.log(cards);

console.log("Task-5");

cards.splice(2, 1, "Карточка Лідера");

console.log(cards);
