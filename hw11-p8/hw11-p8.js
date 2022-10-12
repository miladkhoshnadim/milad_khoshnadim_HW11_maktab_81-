

document.getElementById('signUp').addEventListener('click', function () {
    document.getElementById('P1Left').classList.add('toRight')
    document.getElementById('P1Right').classList.add('toLeft')
    setTimeout(function () {
        document.getElementById('section1').classList.add('hiden')
        document.getElementById('section2').classList.remove('hiden')
        document.getElementById('P1Left').classList.remove('toRight')
        document.getElementById('P1Right').classList.remove('toLeft')
    }, 3800);

})

document.getElementById('signIN').addEventListener('click', function () {
    document.getElementById('P2Left').classList.add('toRight')
    document.getElementById('P2Right').classList.add('toLeft')
    setTimeout(function () {
        document.getElementById('section2').classList.add('hiden')
        document.getElementById('section1').classList.remove('hiden')
        document.getElementById('P2Left').classList.remove('toRight')
        document.getElementById('P2Right').classList.remove('toLeft')
    }, 3800);
})



