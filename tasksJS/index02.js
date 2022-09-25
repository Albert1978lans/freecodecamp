// Функция генерации случайного числа от myMin включительно до myMax включительно

function randomRange(myMin, myMax) {

	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

console.log(randomRange(100, 105));
