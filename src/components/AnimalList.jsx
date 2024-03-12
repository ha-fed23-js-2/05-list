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
import { useState } from 'react'

const AnimalList = () => {
	const [data /*, setData*/] = useState(forestAnimals)
	return (
		<ul>
		{data.map(animal => (
			<li key={animal.name}>
			<h3> {animal.name} </h3>
				Djuret blir som högst {animal.maxHeight} och äter {animal.isHerbivore ? 'växter' : 'andra djur'}.
			</li>
		))}
		</ul>
	)
}

export default AnimalList
