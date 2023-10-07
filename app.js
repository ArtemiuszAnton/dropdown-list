const inp = document.querySelector('input');
const select = document.querySelector('.select');
const block = document.querySelector('.block');
const arrow = document.querySelector('.img-arrow');
let flag = false;


select.addEventListener('click', () => {
    if (!flag) {
        block.style = 'visibility:visible';
        arrow.style = 'background-image:url(./assets/arrow.svg)'
        flag = true;
    } else {
        block.style = 'visibility:hidden'
        arrow.style = 'background-image:url(./assets/arrowdown.svg)'
        flag = false;
    }
})

block.addEventListener('click', (event) => {

})


