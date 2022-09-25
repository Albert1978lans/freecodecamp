
// функция lookUpProfile(name, prop) должна проверить существует ли firstName
// совпадающий с name, если нет то вернуть "No such contact", а если существует
// то вернуть значение prop этого объекта, но если у этого объекта нет свойства
// prop, вернуть "No such property".


const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	// Only change code below this line
	// console.log(contacts[0]['firstName']);


	let count;
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i]['firstName'] !== name) {
			continue
		} else {
			count = i
		}
	}
	if (count == undefined) {
		return 'No such contact'
	} else {
		if (contacts[count].hasOwnProperty(prop)) {
			return contacts[count][prop]
		} else {
			return 'No such property'
		}
	}
	// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "address"));
console.log(lookUpProfile("Harry", "likes"));


