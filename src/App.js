import './App.css';
import AreaCharts from './Components/AreaChart/AreaChart';
import BarCharts from './Components/BarChart/BarChart';
import Cell from './Components/Cell/Cell';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <section>
      <Chart></Chart>
      <AreaCharts></AreaCharts>
      <Cell></Cell>
      <BarCharts></BarCharts>
    </section>
  );
}

export default App;
