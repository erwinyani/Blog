// const invited = document.getElementById('modal');
// invited.innerHTML = '';

$(window).load(function () {
    $('#myModal').modal('show');
});

const inputan = document.querySelector('input');
const log = document.getElementById('invited');

inputan.addEventListener('input', updateValue);

function updateValue(e){
    log.textContent = e.target.value;
}

