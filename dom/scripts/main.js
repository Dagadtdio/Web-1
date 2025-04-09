const btngroup = document.querySelector('.btn-group');
const prevbtn = btngroup.querySelector('button.btn:nth-child(1)');
const nextbtn = btngroup.querySelector('button.btn:nth-child(3)');
const onebtn = btngroup.querySelector('button.btn:nth-child(2)');

let counter = 1;

if(prevbtn) {
    prevbtn.classList.add('btn-info');
}
if(onebtn) {
    onebtn.classList.add('btn-primary');
}
if(nextbtn) {
    nextbtn.classList.add('btn-info');
}

const setonebtncontent = (content = 1) =>{
    onebtn.innerHTML = content;
};

nextbtn.addEventListener('click', (e) => {
    counter++;
    setonebtncontent(counter);
});

prevbtn.addEventListener('click', (e) => {
    counter = counter > 1 ? counter-1 : counter;
    setonebtncontent(counter);
});