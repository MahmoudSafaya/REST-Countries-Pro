import React, { useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

const Country = () => {

  const [country, setCountry] = useState([]);
  const { name } = useParams()

  const getData = async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const country = await res.json();
    setCountry(country);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Link to='/' className="back-btn"><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
      <section className="country">
        {country.map((coun) => {
          const {numericCode, name, population, region, capital, flag, subregion, nativeName, topLevelDomain, currencies, languages, borders} = coun

          return(
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name}></img>
              </div>
              <div className="country-info">
                <h2>{name}</h2>
                <div className="first-info">
                  <p><b>Native Name:</b> <span>{nativeName}</span></p>
                  <p><b>Population:</b> <span>{population}</span></p>
                  <p><b>Region:</b> <span>{region}</span></p>
                  <p><b>Sub Region:</b> <span>{subregion}</span></p>
                  <p><b>Capital:</b> <span>{capital}</span></p>
                </div>

                <div className="left-side">
                  <p><b>Top Level Domain:</b> <span>{topLevelDomain}</span></p>
                  <p><b>Currencies:</b> <span>{currencies[0].code}, {currencies[0].name}, {currencies[0].symbol}</span></p>
                  <p><b>Languages:</b> <span>{languages[0].name}, {languages[0].nativeName}</span></p>
                </div>

                <div className="last-info">
                  <h4>Border Countries</h4>
                  <ul>{borders.map((border) => {
                    return (
                      <li key={border} className="borders-span">{border}</li>
                    )
                  })}</ul>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Country
