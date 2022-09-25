import {Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login';
import Home from './views/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
