let ref = document.getElementsByTagName('html')
ref[0].addEventListener('mousemove', (e) => {
    document.getElementById('corx').innerText = ' x=' + e.clientX
    document.getElementById('cory').innerText = ' y=' + e.clientY
})

