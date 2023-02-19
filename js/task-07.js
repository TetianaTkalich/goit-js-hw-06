const input = document.getElementById('font-size-control');
const span = document.getElementById('text');

input.addEventListener('input', function (event) { 
    span.style.fontSize = `${event.target.value}px`;
});