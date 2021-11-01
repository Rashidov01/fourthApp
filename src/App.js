import CountryHeader from './components/header/header';
import Filter from './components/filter/filter';
// import ListItem from './components/list/list';
import ItemList from './components/item/item-list';
import "./css/bootstrap.min.css";
import "./css/styles.css";
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState([]);
                                                                                                            
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
  }, [])

  return (
    <body className="h-100 d-flex flex-column bg-white">
      <main className="site-content flex-grow-1 py-4 container">
        <CountryHeader />

        <Filter />

       <ItemList country={country} />
      </main>
    </body>
  );
}

export default App;
