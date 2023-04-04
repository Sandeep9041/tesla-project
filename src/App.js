import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Home from "./home"


const App = ()=> 
  (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
   
    </BrowserRouter>
    // <Home />
     );


export default App;
