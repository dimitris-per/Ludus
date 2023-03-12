function addColorFilters() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');

    btn1.addEventListener('click', () => {
      document.body.style.filter = 'hue-rotate(135deg)'; //pink
    });

    btn2.addEventListener('click', () => {
      document.body.style.filter = 'hue-rotate(45deg)'; //blue
    });

    btn3.addEventListener('click', () => {
      document.body.style.filter = 'hue-rotate(200deg)'; //orange
    });

    btn4.addEventListener('click', () => {
        document.body.style.filter = 'hue-rotate(300deg)'; //green
      });

    btn5.addEventListener('click', () => {
    document.body.style.filter = 'hue-rotate(0deg)'; //original
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addColorFilters();
});