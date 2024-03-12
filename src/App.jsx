import { useState } from 'react'

import './App.css'
import AnimalFact from './components/AnimalFact.jsx'
import AnimalList from './components/AnimalList.jsx'

const defaultObject = {
	name: 'Fox',
	sound: 'unknown',
	legs: 4,
	hasTail: true
}
// const hurtFox = { ...defaultObject, legs: 3 }

function App() {
	const [object, setObject] = useState(defaultObject)

	return (
		<main>
			<h1> Animal facts! </h1>
			<AnimalFact animal={object} />
			<AnimalList />
		</main>
	)
}

export default App
