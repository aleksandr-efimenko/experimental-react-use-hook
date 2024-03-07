// Define a type for the joke response
// Usually, you would define this type in a separate file and import it here
// but for simplicity, we'll define it here
export type JokeProps = {
  type: string
  setup: string
  punchline: string
  id: number
}

// JokeUI component for rendering jokes
export function JokeUI({ joke }: { joke: JokeProps }) {
  return (
    <div className='p-4 my-6 rounded-lg shadow-lg border'>
      <h2 className='text-xl font-bold'>{joke.setup}</h2>
      <p>{joke.punchline}</p>
    </div>
  )
}
