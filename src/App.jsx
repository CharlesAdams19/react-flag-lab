// src/App.jsx
import axios from 'axios'
import { useEffect, useState } from "react"


export default function App() {
  //  ! State
  // const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])
  // const [searchResults, setSearchResults] = useState([])


  // ! Functions
  useEffect(() => {
  async function fetchCountries() {

    // Make a call to the API, passing in the search term
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
      setCountries(data)
    } catch (error) {
      console.error('Error fetching countries', error)
    }
    }
  fetchCountries()
  }, [])

  function handleChange(event) {
    setSearchValue(event.target.value)
  }

  
  return (
    <main>
      <h1>World Flags</h1>

      <section className="flag-grid">
        {countries.map((country) => (
          <div className="flag-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              width="100"
            />
            <h3>{country.name.common}</h3>
            <p>{country.region}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
