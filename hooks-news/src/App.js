import React, {useState, useEffect, useRef } from 'react';

export default function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchInputRef = useRef() // creates a reference object to be attached to an element
  // useEffect with async await & fetch
  useEffect(() => {
    getResults()
  }, []) // will run ComponentWillUpdate after every update to query state
  // The second argument can be used to define all the variables (allocated in this array) on which the hook depends.
  // If one of the variables changes, the hook runs again.
  // If the array with the variables is empty, the hook doesn’t run when updating the component at all,
  // because it doesn’t have to watch any variables.

  const getResults = async () => {
    setLoading(true)

    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(response => response.json());

      setResults(response.hits);
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
  }

  const handleClearSearch = () => {
    setQuery('');
    searchInputRef.current.focus();
  }

  // useEffect(() => {
  //   fetch('http://hn.algolia.com/api/v1/search?query=reacthooks')
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data.hits)
  //       setResults(data.hits)
  //     })
  // }, [])

  return (
    <div className="container max-w-3xl mx-auto p-4 m-2 bg-purple-200 shadow-lg rounded">
      <img
        src="https://icon.now.sh/react/c0c"
        className="float-right h-12"
        />
      <h1 className="text-grey-600 font-thin text-5xl">hooks news</h1>
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
      <button type="submit" className="bg-orange-300 rounded m-1 p-1">
          Search
        </button>
        <button type="button" className="bg-teal-300 text-white rounded m-1 p-1" onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      {loading ? (
        <div className="font-bold text-orange-600">Loading results...</div>
      ): (
        <ul className="list-reset leading-normal">
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url} className="text-indigo-700 hover:text-indigo-900">{result.title}</a>
            </li>
          ))}
        </ul>)
      }

      {error && <div className="text-red-500 font-bold">{error.message}</div>}
    </div>
  );
}
