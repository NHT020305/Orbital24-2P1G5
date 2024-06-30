let box = "Are you sure";
box = "abc";
console.log(box);

let person = {
    name: "Tung",
    greet(age) {
        return age - 2;
    }
}

function f(x) {
    return x + 2
}

console.log(person.greet(8) + f(3))

console.log("You made a mistake" + 2);