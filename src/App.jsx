import {Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Login/>}/>
    </Routes>
  );
}

export default App;
