import './App.css';
import Sidebar from './components/sidebar';
import Courdevelops from './images/courdevelops.png';


function App() {
  return (
    <div className="App">

      <div className='body'>
        <Sidebar/>
        
        
        <div className='mainheader'>


          <img className='Courdevelops' src={Courdevelops} alt="Logo"/>
          <h1>This is the Workflow Machine</h1>

          <div className='inputs'>
            <input className='user' placeholder='username'></input>
            <input className='password' placeholder='password'></input>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
