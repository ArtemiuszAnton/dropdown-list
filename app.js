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
    inp.value = event.target.textContent;
    block.style = 'visibility:hidden';
    flag = false;
    arrow.style = 'background-image:url(./assets/arrowdown.svg)'

})

// select.addEventListener('dblclick', () => {
//     inp.removeAttribute('disabled')
// })

inp.addEventListener('keydown', (event) => {
    try {
        if (event.key == 'Enter') {
            if (!inp.value) throw new Error('input is empty')
            const p = document.createElement('p');
            block.appendChild(p);
            p.textContent = inp.value
        }
    } catch (error) {
        alert(error.message)
    }

})