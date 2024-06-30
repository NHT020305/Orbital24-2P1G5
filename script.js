let newElement = document.createElement("a");
//newElement.href = "https://nusmods.com/today";
newElement.textContent = "Account";

let newLi = document.createElement("li");

let container = document.querySelector("header ul");
//container.append(newLi);
newLi.append(newElement);

//newElement.remove();
newLi.remove();
//newLi.innerHTML = '<a href="https://nusmods.com/today">Account</a>';

function changeText() {
    newElement.textContent = "More";
}

/*function revertText() {
    if (newElement.textContent == "More") {
        newElement.textContent = "Account";
    }
}*/

inputElement = document.querySelector("input");

function userInput() {
    let input = inputElement;
    console.log(input);
}

inputElement.addEventListener("input", userInput)

newElement.addEventListener("click", changeText)
//newElement.addEventListener("click", revertText)

//document.body.children[1].children[2].children[2].children[0].href =
  //"https://nusmods.com/today";

//document.querySelector("header nav a").href = "https://nusmods.com/today";
