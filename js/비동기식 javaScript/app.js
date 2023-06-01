// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const colorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}

colorChange('red', 1000, ()=> {
    colorChange('orange', 1000, () => {
        colorChange('yellow', 1000, () => {
            colorChange('green', 1000, ()=> {

            })
        })
    });
});
