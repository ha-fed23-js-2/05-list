const defaultObject = {
	name: 'Fox',
	sound: 'unknown',
	legs: 4,
	hasTail: true
}

// Djurens namn är unika, vi kan använda dem i stället för "id"
const forestAnimals = [
	{
		name: "Älg",
		maxHeight: "2.1 meter",
		isHerbivore: true
	},
	{
		name: "Rådjur",
		maxHeight: "70 centimeter",
		isHerbivore: true
	},
	{
		name: "Hare",
		maxHeight: "50 centimeter",
		isHerbivore: true
	},
	{
		name: "Räv",
		maxHeight: "50 centimeter",
		isHerbivore: false
	},
	{
		name: "Mård",
		maxHeight: "30 centimeter",
		isHerbivore: false
	},
	{
		name: "Gråsugga",
		maxHeight: "2 centimeter",
		isHerbivore: true
	}
]

export { defaultObject, forestAnimals }
