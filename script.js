const printOutContainer = document.getElementById("print-out");
const printOutContainerTwo = document.getElementById("print-out-two")
document.getElementById("fizz").onclick = function () {
    fizzBuzz(3, 5, printOutContainer)
};


document.getElementById("buzz").onclick = function (e) {
    e.preventDefault();
    const inputNumberOne = document.getElementById("inputNumberOne").value;
    const inputNumberTwo = document.getElementById("inputNumberTwo").value;

    fizzBuzz(inputNumberOne, inputNumberTwo, printOutContainerTwo)

    let form = document.getElementById("my-form");
    form.reset();

}






function fizzBuzz(inputOne, inputTwo, container) {

    let printOutArray = []

    for (i = 1; i <= 100; i++) {
        (i % inputOne == 0 && i % inputTwo == 0)
            ? printOutArray.push("FizzBuzz") : (i % inputTwo == 0)
                ? printOutArray.push("Buzz") : (i % inputOne == 0)
                    ? printOutArray.push("Fizz") : printOutArray.push(i)
    }
    container.innerHTML = printOutArray.join(", ")
}

