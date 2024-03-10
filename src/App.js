
import './App.css';
import CatFact from './CatFact';
import CountryData from './CountryData';
import NewsComponent from './NewsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatFact />
        <NewsComponent />
        <CountryData />
      </header>
     
    </div>
  );
}

export default App;
