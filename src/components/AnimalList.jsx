import { forestAnimals } from '../data/data.js'
import { useState } from 'react'
import './AnimalList.css'

const AnimalList = () => {
	const [data, setData] = useState(forestAnimals)

	const removeAnimal = name => {
		// Testa att funktionen får den information den behöver
		// console.log('removeAnimal: ' + name);
		const filteredAnimals = data.filter(animal => animal.name !== name)
		setData(filteredAnimals)
	}

	return (
		<ul className="animal-list">
		{data.map(animal => (
			<li key={animal.name}>
				<div className="animal-item-row">
					<h3> {animal.name} </h3>
					<button onClick={() => removeAnimal(animal.name)}> 🗑️ </button>
				</div>
				Djuret blir som högst {animal.maxHeight} och äter {animal.isHerbivore ? 'växter' : 'andra djur'}.

			</li>
		))}
		</ul>
	)
}

export default AnimalList


/*
Design?
Idéer för hur jag kan ta bort ett djur från listan
*/