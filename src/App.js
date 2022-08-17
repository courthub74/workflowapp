import './App.css';
// import Sidebar from './components/sidebar';
import Loginsidebar from './components/loginsidebar';
import Courdevelops from './images/courdevelops.png';


function App() {
  return (
    <div className="App">

      <div className='body'>
        <Loginsidebar/>
        {/* <Sidebar/> */}


        <div className='pagepart'>
        
        
          <div className='mainheader'>


            <img className='Courdevelops' src={Courdevelops} alt="Logo"/>
            <p className='headliner'>This is the Workflow Machine</p>


            <div className='loginfield'>

                <div className='inputs'>
                  <p className='login'>Login</p>
                  <input className='user' placeholder='username'></input>
                  <input className='password' placeholder='password'></input>
                </div>

                <div className='submitbutton'>
                  <button className='submit'>Submit</button>
                </div>

            </div>


          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
