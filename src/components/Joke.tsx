//@ts-expect-error use hook is not yet supported by the react-jsx-runtime
import { use, Suspense } from 'react'
import { JokeProps, JokeUI } from './JokeUI'

// Fetch a joke from the API and return it as a promise
async function fetchData(): Promise<JokeProps[]> {
  const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
  // We do not use await because res.json() returns a promise that we can use directly in the 'use' hook
  return res.json()
}

function JokeFetcher() {
  const jokes = use(fetchData())
  // Since the API returns an array, take the first joke for simplicity
  const joke = jokes[0]

  return <JokeUI joke={joke} />
}

export function Joke() {
  return (
    <div className='min-w-80'>
      <Suspense fallback={<Skeleton />}>
        <JokeFetcher />
      </Suspense>
    </div>
  )
}

function Skeleton() {
  return <div className='animate-pulse w-full bg-gray-200 p-4 my-6 rounded-lg'></div>
}
