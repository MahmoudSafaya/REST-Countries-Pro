import React from 'react'

const Filter = () => {

  window.addEventListener('DOMContentLoaded', () => {
    // define the search input    
    const search = document.querySelector('#search');
    search.addEventListener('input', (e) => {
      const { value } = e.target
      // define all the names of the countries
      const countryName = document.querySelectorAll('.country-name') 
      countryName.forEach((element) => {
        if(element.innerText.toLowerCase().includes(value.toLowerCase())) {
          element.parentElement.parentElement.parentElement.style.display = 'block'
        } else {
          element.parentElement.parentElement.parentElement.style.display = 'none'
        }
      })
    })


    const select = document.querySelector('select');
    select.addEventListener('change', () => {
      const countryRegion = document.querySelectorAll('.region-name');
      const selectVal = select.value;

      countryRegion.forEach(elem => {
        if(elem.textContent.toLowerCase() === selectVal.toLowerCase()){
          elem.parentElement.parentElement.parentElement.parentElement.style.display = 'block'
        } else {
          elem.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }

        if(selectVal === 'Filter by Region'){
          elem.parentElement.parentElement.parentElement.parentElement.style.display = 'block'
        }
      })

    })

  })


  return (
    <div className="fliter">
      <form className="form">
        <label><i className="fas fa-search"></i></label>
        <input type="search" name="search" placeholder="Search" id="search"></input>
      </form>

      <select>
        <option className="option">Filter by Region</option>
        <option className="option">Africa</option>
        <option className="option">Americas</option>
        <option className="option">Asia</option>
        <option className="option">Europe</option>
        <option className="option">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
