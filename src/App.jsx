import DataAmerica from './components/data/DataAmerica';

import PaisesAmerica from './components/PaisesAmerica/PaisesAmerica';

function App() {
  return (
    <div className="App">
      <PaisesAmerica DataAmerica ={DataAmerica()} />
    </div>
  );
}

export default App;

