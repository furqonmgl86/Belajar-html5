// Menyiapkan canvas
const mycanvas = document.querySelector('#mycanvas')

// Atur ukuran canvas

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan konteknya

const c = mycanvas.getContext('2d');

// Manipulasi canvas

c.fillStyle = 'pink';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(50, 50, 300, 300);
c.fill();
c.stroke();


// Membuat arc/circle
c.fillStyle = 'blue';
c.beginPath();
c.arc(550,200, 150, 0, 2 * Math.PI);

c.fill();
c.stroke();