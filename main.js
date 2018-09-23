const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
const makeCodeButton = document.getElementById("makeCodeButton");
makeCodeButton.addEventListener('click', () => {
    const inputValue = document.getElementById('inputCodeMaker').value;
    const inputCode = inputValue.split("");
    for (let i = 0; i < inputCode.length; i++) {
        const secretCode = inputValue.charCodeAt(inputCode[i]);
        printToDom(secretCode, "codeOutput")
    };
});