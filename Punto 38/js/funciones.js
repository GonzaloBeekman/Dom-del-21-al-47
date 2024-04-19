document.getElementById('txt1').addEventListener('focus', tomarFoco)
document.getElementById('txt2').addEventListener('focus', tomarFoco)
document.getElementById('txt1').addEventListener('blur', perderFoco)
document.getElementById('txt2').addEventListener('blur', perderFoco)


function tomarFoco(e) {
    e.target.style.color = '#f00'
}

function perderFoco(e) {
    e.target.style.color = '#00f'
}

