$('#myModal').modal({
    backdrop: 'static',
    keyboard: false
})

const inputan = document.querySelector('input');
const log = document.getElementById('invited');

inputan.addEventListener('input', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
}

