let läggtillbtn = document.getElementById ('lägg-till-btn')
läggtillbtn.addEventListener('click', function(){
let nameInput = document.getElementById ('name-input')
let numberInput = document.getElementById ('number-input')
let listItems = document.querySelectorAll ('ul')
    listItems [0].innerText = nameInput.value + " " + numberInput.value;

})