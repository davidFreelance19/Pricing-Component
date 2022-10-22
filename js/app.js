const btnPrincing = document.querySelector('.lbl-switch');
const textEdit1 = document.querySelector('#precio1');
const textEdit2 = document.querySelector('#precio2');
const textEdit3 = document.querySelector('#precio3');

btnPrincing.addEventListener('click', () => {
    if(textEdit1.textContent == '$19.99'){
        textEdit1.textContent = '$179.99';
        textEdit2.textContent = '$259.99';
        textEdit3.textContent = '$379.99'
        return;
    }
    textEdit1.textContent = '$19.99';
    textEdit2.textContent = '$24.99';
    textEdit3.textContent = '$39.99';
})
