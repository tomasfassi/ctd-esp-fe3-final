
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Home from "./Routes/Home.jsx";
import Contact from "./Routes/Contact.jsx";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContextGlobal } from "./Components/utils/global.context";
import './App.css'


function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className={themeState.theme? 'App': 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color }}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.favorites} element={<Favs/>}/>
            <Route path={routes.contact} element = {<Contact/>}/>
            <Route path={routes.detailDentista} element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;