const inputValue = document.querySelector("#inputValue");
var listItems = document.querySelector('#list');
let addTask = document.querySelector('#add');
let showDate = document.querySelector('#currentDate');

let today = (new Date()).toLocaleDateString('en-US')

showDate.innerHTML = `<span>Date:</span> ${today}`

addTask.addEventListener('click', function () {

    var input = inputValue.value;
    var newlist = document.createElement('li');
    newlist.id = 'li-el'
    newlist.classList = '';
    newlist.innerHTML = `${input}<i class="fa fa-minus" id="delete" aria-hidden="true">`
    listItems.appendChild(newlist);
    inputValue.value = '';

    const deleteValue = document.querySelectorAll('#delete');


    newlist.addEventListener('click', function (e) {
        if (e.target === newlist) {
            newlist.classList.toggle('line')
        }
    });

    deleteValue.forEach(function (deleteValue) {
        deleteValue.addEventListener('click', (e) => {
            // only Targetting the #delete icon parent li
            const liEl = e.target.parentElement;
            liEl.remove()

        })
    });



});

