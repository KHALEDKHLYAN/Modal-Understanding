// Variables 

let openBtn = document.getElementById('open-btn');
let modalcontainer = document.getElementById('modal-container');
let closedBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){

    modalcontainer.style.display = 'block';
});

closedBtn.addEventListener('click', function(){

    modalcontainer.style.display = 'none';
});

window.addEventListener('click', function(e){

    if (e.target === modalcontainer){
        modalcontainer.style.display = 'none';
    }
});