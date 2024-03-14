import { forestAnimals } from '../data/data.js'
import { useState } from 'react'

const AnimalList = () => {
	const [data /*, setData*/] = useState(forestAnimals)
	return (
		<ul className="animal-list">
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
