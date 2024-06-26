
import './App.css';
import NavBar from './components/NavBar';
import FetchData from './hooks/useEffect/FetchData';
import BgChange from './hooks/useState/BgChange';
import ButtonTrigger from './hooks/useState/ButtonTrigger';
import Management from './hooks/useState/CheckboxesManagement';
import Counter from './hooks/useState/Couter';
import Toggle from './hooks/useState/ToggleVisibility';

function App() {
  return (
    <div className="App">
     <h1>Hooks Examples</h1>
     <NavBar />
     {/* <h2>useState</h2>
     <h3>1. Counter Application</h3>
     <Counter />
     <h3>2. Background color changer</h3>
     <BgChange />
     <h3>3. Toggle Visibility</h3>
     <Toggle />
     <h3>4. Button Trigger</h3>
     <ButtonTrigger />
     <h3>5. Checkbox Management</h3>
     <Management />

     <h2>useEffect</h2>
     <h3>1. FetchData</h3>
     <FetchData /> */}
     
    </div>
  );
}

export default App;
