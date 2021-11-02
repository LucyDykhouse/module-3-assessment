console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form has been submitted successfully!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let duckPhoto = document.querySelector('img');
duckPhoto.addEventListener('mouseover', () => {
	alert('You\'re great!!');
});
