import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from 'axios';
import styled from 'styled-components';

// Styled Components

const StyledApp = styled.div`

      width: 40%;
      border: 20%;
      margin: auto;
      background-color: ${pr => pr.theme.tertiaryColor};

  h1{
      font-size: 2.8rem;
      color: ${pr => pr.theme.randomColor};;
      font-family: sans-serif;
  }
  h2{
      font-size: 2.0rem;
      color: ${pr => pr.theme.white};
    }
`
const StyledProfile = styled.div`

      display: flex;
      justify-content: space-between;
      width: 80%;
      border-radius: 2%;
      align-items: center;
      margin: auto;
      margin-bottom: 0.5%;
      padding: 0.2%;
      background-color: ${pr => pr.theme.tertiaryColor};

    h2{
        font-size: 2.0rem;
        color: ${pr => pr.theme.white}; 
      }
    button{
        background-color: ${pr => pr.theme.primaryColor};
        color: ${pr => pr.theme.secondaryColor};
        font-family: sans-serif;
        font-size: 1.0rem;
        padding: 1% 3%;
        border-radius: 10%;
        font-weight: bold;

            &:hover {
            background-color: ${pr => pr.theme.dangerColor};
            color: ${pr => pr.theme.white};
            transition: all 1s ease-in-out;
            }
    }
`
// End of Styled Components

const App = () => {

  const [charactersList, setCharactersList] = useState([]);
  const [charactersProfile, setCharactersProfile] = useState(null);

  //  Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const openDetails = (created) => {
    setCharactersProfile(created);
    };

    const closeDetails = () => {
    setCharactersProfile(null);
     };

//useEffect

useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people/`)
    .then(res => {
      setCharactersList(res.data)
      console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
}, [])

const CharacterNames = (props) => (
    <StyledProfile>
     <h2>{props.info.name}</h2> 
      <button onClick={() => openDetails(props.info.created)}>See Profiles Below</button>
    </StyledProfile>
);

//Components

return (
    <StyledApp>
      <h1>Star Wars Characters >></h1>
      {
        charactersList.map((list) => {
          return <CharacterNames key={list.created} info={list} />;
        })
      }
      {
        charactersProfile && (
           <Character profile={charactersProfile} close={closeDetails} />
      )}
    </StyledApp>
);
}
export default App;