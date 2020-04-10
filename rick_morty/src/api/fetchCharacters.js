import axios from 'axios';

const fetchCharacters = () => {
  return axios
    .get('https://rickandmortyapi.com/api/')
    .then(res => {return res})
    .catch(err => {return err});    
};

export default fetchCharacters;