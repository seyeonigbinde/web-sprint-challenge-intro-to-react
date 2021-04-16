// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';

// Styled Components
const StyledCharacter = styled.div`

        width: 95%;
        border: 20%;
        border-radius: 2%;
        border-color: red;
        align-items: center;
        margin: auto;
        margin-bottom: 0.5%;
        padding: 0.2%;
        background-color: ${pr => pr.theme.tertiaryColor};
   

    button{
        background-color: ${pr => pr.theme.primaryColor};
        color: ${pr => pr.theme.secondaryColor};
        font-family: sans-serif;
        font-size: 1.2rem;
        padding: 1% 3%;
        border-radius: 10%;
        font-weight: bold;

            &:hover {
            background-color: ${pr => pr.theme.dangerColor};
            color: ${pr => pr.theme.white};
            transition: all 1s ease-in-out;
            }
        }   

    h3{
        font-size: 1.3rem;
        color: ${pr => pr.theme.white};
        }

    p{
        color: ${pr => pr.theme.white};
        }
`
// End of Styled Components

export default function Character (props) {
    const {profile, close } = props;
    const [characterDetails, setCharacterDetails] = useState([]);
  
//useEffect

useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people/`)
    .then(res => {
      setCharacterDetails(res.data)
      console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
}, [profile])

//Components

return (
    <StyledCharacter>
        <h3>Profiles:</h3>
        {characterDetails && (
          <>
            {
            characterDetails.map((list) => {
                return <p key={list.created}> 
                {list.name}, ({list.gender}), was born {list.birth_year}. He has a {list.hair_color} hair and {list.skin_color} in complexion. He has a {list.eye_color} eyes, height of {list.height}meters and body mass of {list.mass}kg. He has featured in {list.films.length} Star War movies.
                </p>    
             }) 
            } 
            <button onClick={close}>Close</button>
          </>    
        )}  
      </StyledCharacter>
    );
  }