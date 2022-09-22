function grow(x) {
	return x.reduce((multiplication, number) => multiplication *= number, 1)
}

console.log(grow([4, 1, 1, 1, 4]))