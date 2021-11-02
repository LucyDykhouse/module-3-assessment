console.log("hello world");

let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', () => {
    alert('Green');
})
placeBtn.addEventListener('click', () => {
    alert('Les Cheneaux Islands');
})
ritualBtn.addEventListener('click', () => {
    alert('Lions Games');
})


