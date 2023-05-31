document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', (e)=>{
    console.log(e.code, e.key);
})

window.addEventListener('keydown', (e)=>{
    switch (e.code) {
        case 'ArrowUp':
            console.log('up');
            break;
    
        default:
            console.log('zz');
            break;
    }
})

// input.addEventListener('keyup', ()=>{
//     console.log("key up");
// })