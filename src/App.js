import './App.css';

import UserGrid from "./UserGrid.jsx";
import LiveRandomData from './LiveRandomData.js';
import AreaRangeLine from './AreaRangeLine.js';
import MapChart from './MapChart.js';

function App() {
  return (
    <div className="App">
      <UserGrid />
      <LiveRandomData />
      <AreaRangeLine />
      <MapChart />
    </div>
  );
}

export default App;
