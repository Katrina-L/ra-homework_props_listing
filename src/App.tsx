import './App.css';
import { DATA } from './constDATA/DATA';
import { Listing } from './components/Listing';

function App() {

    return (
        <Listing items={DATA}/>
    )
}

export default App
