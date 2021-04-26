import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
  
  const [countries, setCountries] = useState([])

  const fetchData = async () => {
    const res = await fetch(url)
    const countries = await res.json()
    setCountries(countries)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="grid-parent">
      <section className="grid">
      {countries.map((country) => {
        const {numericCode, name, population, region, capital, flag} = country
        return(
          <article key={numericCode}>
            <Link to={`/countries/${name}`} className="box">
              <div className="img-box"><img src={flag} alt={name}></img></div>
              <div className="box-info">
                <h2 className="country-name">{name}</h2>
                <p><b>Population:</b> <span>{population}</span></p>
                <p><b>Region:</b> <span className="region-name">{region}</span></p>
                <p><b>Capital:</b> <span>{capital}</span></p>
              </div>
            </Link>
          </article>
        )
      })}
      </section>
    </div>
  )
}

export default Countries
