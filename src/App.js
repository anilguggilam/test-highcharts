import './App.css';

import LiveRandomData from './LiveRandomData.js';
import AreaRangeLine from './AreaRangeLine.js';
import MapChart from './MapChart.js';

function App() {
  return (
    <div className="App">
      <LiveRandomData />
      <AreaRangeLine />
      <MapChart />
    </div>
  );
}

export default App;
