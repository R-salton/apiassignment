
import './App.css';
import Cards from './components/Cards';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';


function App() {
  return (
    <div className="App" >
    <Routes>
<Route exact path='/' element={<Cards />} />
    <Route path='/search' element={<Search />} />
    </Routes>
    </div>
  );
}

export default App;
