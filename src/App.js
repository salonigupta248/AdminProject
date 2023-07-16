import Home from "./components/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route element={<SideMenu/>}/>
        <Route path="users"/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
