
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Lastsec from './Components/Lastsection/Lastsec';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AppMains">
      <Sidebar/>
      <Main/>
      <div className='third_main'>
      <Lastsec/>
      </div>
     
      </div>
     
       </div>
  );
}

export default App;
