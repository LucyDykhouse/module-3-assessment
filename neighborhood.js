//// BONUS PROBLEM CODE BELOW ////
const restaurantArr = ['Fidlers on the Grand', 'The Cosmos', 'Sushi Moto', 'Choupli', 'Thai Village'];

const selectRandom = () => {
	let randomIndex = Math.floor(Math.random()*5);
	alert(`The restaurant you should try is ${restaurantArr[randomIndex]}!`);
}

let restaurantBtn = document.querySelector("#random-btn");
restaurantBtn.addEventListener('click', selectRandom);