

const AnimalFact = ({ animal }) => (
	<div>
		{animal.name} has the sound: {animal.sound}, {animal.legs} legs and {animal.hasTail ? 'has a tail' : 'has no tail'}.
	</div>
)

export default AnimalFact
