function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}

function setTextElementValueById(elementId, newValue) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = newValue;
}

function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculae tax amount
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate final amount 
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}