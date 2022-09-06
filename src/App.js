
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import PuppyPage from './components/PuppyPage';
import Searchpage from './components/Searchpage';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/puppy" element={<PuppyPage/>}></Route>
        <Route path="/login" element={<Searchpage/>}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
