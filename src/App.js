import NavBar from  './component/navbar'
import Home from './component/home'
import About from './component/about'
import Skills from './component/skills'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
