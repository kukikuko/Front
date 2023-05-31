const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("clicked me")
};

function scream() {
    console.log("AAAAAAAAHHHHHHHHHH~~~~")
};

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('h1입니다.');
};

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', ()=> {
    alert('clicked');
});
