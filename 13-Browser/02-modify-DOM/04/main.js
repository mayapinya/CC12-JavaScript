setTimeout(() => {
    let btn = document.querySelector('.btn');
    if (btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = '';
    }
    else {
        btn.style.backgroundColor = 'red';
    }
}, 3000);  