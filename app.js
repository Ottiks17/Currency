const valueInputNode = document.querySelector('.js-value-input');
const currencuSelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput() {
    return {
        rub: Number(valueInputNode.value),
        currency: currencuSelectorNode.value
    }
}

function render(result) {
    outputNode.innerText = result;
}

valueInputNode.addEventListener('input', function() {    
      const result = convert(getInput());      
      render(result);
})

currencuSelectorNode.addEventListener('change', function() {   
    const result = convert(getInput());      
    render(result);
})