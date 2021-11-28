document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#bdb75c',
        lineColor: '#5cbdaa'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
