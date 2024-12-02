import Hero from './hero';
import './App.css';
import Nav from './navbar';
import Timeline from './timeline';
import Stagger from './stagger';
import ScrollEffect from './scrollTrigger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path={"/"} element={<Hero/>} />
      <Route exact path={"/timeline"} element={<Timeline/>} />
      <Route exact path={"/stagger"} element={<Stagger/>} />
      <Route exact path={"/scroll-trigger"} element={<ScrollEffect/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
