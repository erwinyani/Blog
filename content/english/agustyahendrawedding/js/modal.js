
// $(window).load(function () {
//         $('#myModal').modal('show');
//     });

$('#myModal').modal('show');

const inputan = document.querySelector('input');
const log = document.getElementById('invited');
const up = document.getElementById('name');
const set = document.createAttribute('value');

inputan.addEventListener('input', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;

    set.value = '';
    up.setAttributeNode(set);
}

