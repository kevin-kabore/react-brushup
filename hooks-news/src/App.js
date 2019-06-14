import React, {useState, useEffect } from 'react';

export default function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks')

  // useEffect with async await & fetch
  useEffect(() => {
    getResults()
  }, [query]) // will run ComponentWillUpdate after every update to query state
  // The second argument can be used to define all the variables (allocated in this array) on which the hook depends.
  // If one of the variables changes, the hook runs again.
  // If the array with the variables is empty, the hook doesn’t run when updating the component at all,
  // because it doesn’t have to watch any variables.

  const getResults = async () => {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => response.json());

    setResults(response.hits);
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
    <>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))
        }
      </ul>
    </>
  );
}
