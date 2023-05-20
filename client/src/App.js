import './App.css';
import Banner from './components/Banner/Banner';
import GridContainer from './components/Grid-container/Grid-container';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <GridContainer/>
    </div>
  );
}

export default App;
