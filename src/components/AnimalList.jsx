import { forestAnimals } from '../data/data.js'
import { useState } from 'react'
import './AnimalList.css'

// useRef kan användas för att skapa en variabel som ligger "utanför" React
// "bakdörren" för att göra DOM-manipulation

const AnimalList = () => {
	const [data, setData] = useState(forestAnimals)

	const removeAnimal = name => {
		// Testa att funktionen får den information den behöver
		// console.log('removeAnimal: ' + name);
		const filteredAnimals = data.filter(animal => animal.name !== name)
		setData(filteredAnimals)
	}

	const handleNameChange = (event, name) => {
		const newName = event.target.value
		// console.log('handleNameChange', newName);
		const animalsCopy = [ ...data ]
		const index = animalsCopy.findIndex(animal => animal.name === name)
		animalsCopy[index] = { ...animalsCopy[index], name: newName }
		setData( animalsCopy )

		// Alternativ lösning med map:
		// setData(data.map(animal => {
		// 	if( animal.name === name) {
		// 		return { ...animal, name: newName }
		// 	} else {
		// 		return animal
		// 	}
		// }))
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

				<div>
					<input onBlur={event => handleNameChange(event, animal.name)} type="text" defaultValue={animal.name} />
				</div>

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