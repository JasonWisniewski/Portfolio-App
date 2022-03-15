import React, { useState } from 'react'
// use state tracks values


const Nav = (props) => {
  const {
    categories = [],
    setContactSelected
  } = props
  // any javascript methods up here
  // this one checks in button is clicked
  
  const [clickState, setClickState] = useState(false)
  const onClick = () =>{
    console.log(clickState)
    setClickState(!clickState)
    console.log("I was clicked!")
  }
  return (
    <header>
      <h2 className="mgh-small">Jason Wisniewski, Nav</h2>
      <button onClick={onClick}>NAV</button>
      <nav> 

        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={onClick}>
              About me
            </a>
          </li>

          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={onClick}>
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Nav