let firstLink = document.getElementById ('first-link')
firstLink.addEventListener('click', function (event) {
    event.preventDefault();
   
    console.log (event.target.innerText);

    let listItems = document.querySelectorAll ('li')
    listItems [0].innerText = event.target.innerText;
    listItems [1].innerText = event.target.innerText;
    listItems [2].innerText = event.target.innerText;
})

let läggtillbtn = document.getElementById ('lägg-till-btn')
läggtillbtn.addEventListener('click', function(){
let nameInput = document.getElementById ('name-input')
console.log (nameInput.value);

firstLink.innerText = nameInput.value;

})
