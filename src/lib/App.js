import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import "./lib/font-awesome/css/all.min.css"; 
import Header from '../component/Header';
import WatchList from '../component/watchlist';
import  Watched  from '../component/Watched';
import Add from '../component/Add';
import { GlobalProvider } from '../context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
      <Header />
      <Routes>
       <Route path='/' element={<WatchList />} /> 
       <Route path='/watched' element={<Watched />} /> 
       <Route path='/add' element={<Add />} />
      </Routes>
   </Router>
    </GlobalProvider>
  );
}

export default App;
