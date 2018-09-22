const codeOutput = document.getElementById("codeOutput");

const makeCode = () => {
const inputValue = document.getElementById('inputCodeMaker').value;
const inputCode = inputValue.split(" ");
const inputCodeString = makeCodeStringBuilder(inputCode);
printToDom(inputCodeString, 'codeOutput')
}

const makeCodeStringBuilder = (inputCode) => {
    let newString = '';
    for (let i = 0; i < inputCode.length; i ++) {
    let codeWord = inputCodeMaker[inputCode[i]]
    newString += `<p> ${codeWord}</p>`
    };
    return newString;
}

const makeCodeButton = document.getElementById("makeCodeButton");
makeCodeButton.addEventListener ('click', makeCode);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};