import './App.css';
import { getData } from './redux/thunks/getData';
import { useDispatch } from 'react-redux';
import Panel from './components/Panel/Panel';
import Weather from './components/Weather/Weather';
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {

  const dispatch = useDispatch()

  dispatch(getData())

  return (
    <div className="App">
      <div className='App_panels'>
        <SearchPanel />
        <Panel />
      </div>
      <Weather />
    </div>
  );
}

export default App;
