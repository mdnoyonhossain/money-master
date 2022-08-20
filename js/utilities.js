function inputFieldValue(elementId) {
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldString = inputFieldElement.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

function setValue(setId, value) {
    const setTextElement = document.getElementById(setId);
    setTextElement.innerText = value;
}

function isInnerTextValue(elementId) {
    const isInnerElement = document.getElementById(elementId);
    const isInnerString = isInnerElement.innerText;
    const innerTextValue = parseFloat(isInnerString);
    return innerTextValue;
}