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


function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Silahkan copy norek: " + copyText.value);
}

function myFunction1() {
  var copyText = document.getElementById("myInput1");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Silahkan copy norek: " + copyText.value);
}
