import axios from "axios";

export  function loginApi(email, password) {
const response =  axios.post("http://challenge-react.alkemy.org", {email,password})
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  })

return response;
}
