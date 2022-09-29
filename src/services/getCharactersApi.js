import axios from "axios";

export  function getCharactersApi(input) {
const response =  axios.get(`https://www.superheroapi.com/api.php/5460349840713622/search/${input}`)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  })

return response;
}
