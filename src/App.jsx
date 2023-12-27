import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Stocks from './components/Stocks';
import Buisness from './components/Buisness';
import Tech from './components/Tech';
import Popular from './components/Popular';
function App() {

  return (
    <div>
      <nav>
        <Link to='/Popular'><button>Popular</button></Link>
        <Link to='/Buisness'><button>Buisness</button></Link>
        <Link to='/Stocks'><button>Stocks</button></Link>
        <Link to='/Tech'><button>Tech News</button></Link> 
      </nav>

      <Routes>
        <Route path='/Stocks' element = {<Stocks/>}></Route>
        <Route path='/Buisness' element = {<Buisness/>}></Route>
        <Route path='/Tech' element = {<Tech/>}></Route>
        <Route path='/Popular' element = {<Popular/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
