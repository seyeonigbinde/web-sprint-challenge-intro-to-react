// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`

`

export default function Navigation(props) {



  return (
   
    <StyledCharacter >
        <nav>
            <a href = '#home'> Home</a>
            <a href = '#about'>About</a>
            <a href = '#photo'>Photo of the Day</a>
            <a href = '#contact'>Contact</a>
        </nav>
    </StyledCharacter>
  )
}
