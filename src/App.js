import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from 'axios';
import styled from 'styled-components';

const StyledApp = styled.div`

    width: 40%;
    border: 20%;
    margin: auto;
    background-color: ${pr => pr.theme.tertiaryColor};

  h1{
    font-size: 2.8rem;
    color: #f9e0ae;
    
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
      border: 20%;
      border-radius: 2%;
      border-color: red;
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

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [starsId, setStarsId] = useState(null);

  //  Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const openDetails = (created) => {
    setStarsId(created);
    };

    const closeDetails = () => {
    setStarsId(null);
     };

//useEffect
useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacters(res.data)
      // setTitle(res.data.title)
      console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
}, [])

const StarList = (props) => (
    <StyledProfile>
     <h2>{props.info.name}</h2> 
      <button onClick={() => openDetails(props.info.created)}>See Profile</button>
    </StyledProfile>
);

return (
    <StyledApp>
      <h1>Star Wars Characters >></h1>
      {
        characters.map((list) => {
          return <StarList key={list.created} info={list} />;
        })
      }
      {starsId && (
        <Character stars={starsId} close={closeDetails} />
      )}
    </StyledApp>
);
}
export default App;