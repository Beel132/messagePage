const cardContainer = document.getElementById('card');

const allContainer = document.getElementById('container');
const sendButton = document.getElementById('sendButton');

let cardTitle = document.getElementById('cardTitle');
let cardDesc = document.getElementById('cardDesc');

let alertMessage = document.getElementById('alert');

let idArray = [];
let idCounter = 0;

// closeIconClass.splice(0, 1);

sendButton.addEventListener('click', function createNewCard(e) {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    e.preventDefault();

    if (!nameInput.value)
        (nameInput.classList.add('border-danger'), alertMessage.classList.remove('d-none'));
    else if (!messageInput.value)
        (messageInput.classList.add('border-danger'), alertMessage.classList.remove('d-none'));

    else {
        nameInput.classList.remove('border-danger');
        messageInput.classList.remove('border-danger');
        alertMessage.classList.add('d-none');

        let newCard = document.createElement('div');
        newCard.className = 'card mt-5 shadow-sm position-relative';
        newCard.id = idCounter;

        // --

        cardTitle.innerHTML = nameInput.value.toLowerCase().charAt(0).toUpperCase() + nameInput.value.toLowerCase().slice(1);
        cardDesc.innerHTML = messageInput.value

        // --

        newCard.innerHTML = cardContainer.innerHTML;

        allContainer.appendChild(newCard);

        setAttrToCloseIcon();

        idCounter++;

        // clear input

        nameInput.value = '';
        messageInput.value = '';

        // --

    }
});

function setAttrToCloseIcon() {
    const closeIconClass = [...document.getElementsByClassName('close')];

    closeIconClass[closeIconClass.length - 1].setAttribute('onclick', `removeCard(${idCounter})`);
    idArray.push(idCounter);
}

function removeCard(value) {

    document.getElementById(`${value}`).style.animation = 'removeCardAnimation 1s ease-in-out';

    setTimeout(() => {
        allContainer.removeChild(document.getElementById(`${value}`));
    }, 1000);
    idArray.splice(idArray.indexOf(value), 1);
}