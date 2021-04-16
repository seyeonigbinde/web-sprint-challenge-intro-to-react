// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`

    display: flex ;
    justify-content: space-between;
    width: 60%;
    border: 3%;
    border-radius: 10%;
    border-color: red;
    align-items: center;
    margin: auto;

`

export default function Character (props) {

  const { info } = props;

  return (
    <StyledCharacter>
        <h1>{info.name}</h1>
        {info.birth_year}
    </StyledCharacter>
  )
}
