const numbers = [
    // 0
    [
        6, 5, 3, 2, 1, 0
    ],
    // 1
    [
        1, 5
    ],
    // 2
    [
        0, 2, 4, 5, 6
    ],
    // 3
    [
        0, 1, 4, 5, 6
    ],
    // 4
    [
        5, 4, 3, 1
    ],
    // 5
    [
        6, 4, 3, 1, 0
    ],
    // 6
    [
        6, 4, 3, 2, 1, 0
    ],
    // 7
    [
        6, 5, 1
    ],
    // 8
    [
        6, 5, 4, 3, 2, 1, 0
    ],
    // 9
    [
        6, 5, 4, 3, 1, 0
    ]
];

let digit1 = document.querySelectorAll('#digit1 > span');
let digit2 = document.querySelectorAll('#digit2 > span');
let digit3 = document.querySelectorAll('#digit3 > span');
let digit4 = document.querySelectorAll('#digit4 > span');
let hHolder;
let mHolder;

let init = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    h = h.toString().split('');
    m = m.toString().split('');

    // Adds a leading zero so the array won't be 1 element of length
    if(h.length == 1) {
        h = [0, h[0]];
        h = h.map(Number);
    } else {
        h = h.map(Number);
    }
    if(m.length == 1) {
        m = [0, m[0]];
        m = m.map(Number);
    } else {
        m = m.map(Number);
    }

    if(h != hHolder) {
        if(!hHolder) {
            numbers[h[0]].forEach(i => {
                digit1[i].classList.add('span--after');
            });
            numbers[h[1]].forEach(i => {
                digit2[i].classList.add('span--after');
            });
            hHolder = h;
        } else {
            numbers[hHolder[0]].forEach(i => {
                digit1[i].classList.remove('span--after');
            });
            numbers[hHolder[1]].forEach(i => {
                digit2[i].classList.remove('span--after');
            });
            numbers[h[0]].forEach(i => {
                digit1[i].classList.add('span--after');
            });
            numbers[h[1]].forEach(i => {
                digit2[i].classList.add('span--after');
            });
            hHolder = h;
        }
    }

    if(m != mHolder) {
        if(!mHolder) {
            numbers[m[0]].forEach(i => {
                digit3[i].classList.add('span--after');
            });
            numbers[m[1]].forEach(i => {
                digit4[i].classList.add('span--after');
            });
            mHolder = m;
        } else {
            numbers[mHolder[0]].forEach(i => {
                digit3[i].classList.remove('span--after');
            });
            numbers[mHolder[1]].forEach(i => {
                digit4[i].classList.remove('span--after');
            });
            numbers[m[0]].forEach(i => {
                digit3[i].classList.add('span--after');
            });
            numbers[m[1]].forEach(i => {
                digit4[i].classList.add('span--after');
            });
            mHolder = m;
        }
    }

    let timer = setTimeout(init, 1000);
}

init();