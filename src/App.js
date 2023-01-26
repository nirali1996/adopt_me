import logo from './logo.svg';
import './App.css';
import Test from "./test"
import Page from "./page"
import Posts from './posts';
import Comments from './comments';
import Albums from './albums';
import Count from './count';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test1 from "./test1"
function App() {
return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts />} />
     
    </Routes>
    </BrowserRouter>


  //   <div className="App"/>
  //  <Test name = "Nirali" ></Test>
  //   <Page /> 
  //   <Posts /> 
  //   <Comments /> 
  //   <Albums />
  //   <Count />
   
  );
}
  



export default App;
