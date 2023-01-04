
//Container file
import { Account,Feed, Navbar } from './Container';

//CSS Style
import "../../frontend/src/Assets/Style/css/main.min.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Account/>
      <Feed/>
    </div>
  );
}

export default App;
