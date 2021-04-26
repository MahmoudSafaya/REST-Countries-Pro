import React from 'react'

const Header = () => {
  
  let count = 2;

  const changeTheme = () => {
      const root = document.querySelector(':root')

      if(count % 2 === 0) {
        root.style.setProperty('--veryLightGray', 'hsl(200, 15%, 8%)')
        root.style.setProperty('--white', 'hsl(209, 23%, 22%)')
        root.style.setProperty('--lightText', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--lightShadow', 'hsl(207, 26%, 17%)')

      } else {
        root.style.setProperty('--veryLightGray', 'hsl(0, 0%, 98%)')
        root.style.setProperty('--white', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--lightText', 'hsl(200, 15%, 8%)')
        root.style.setProperty('--lightShadow', 'hsl(0deg 0% 91%)')
      }
      count++;
  }

  return (
    <div className="header">
      <h3>Where in the world?</h3>
      <p className="dark-mode" onClick={changeTheme}><i className="fas fa-moon"></i> Dark Mode</p>
    </div>
  )
}

export default Header
