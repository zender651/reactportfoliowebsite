import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills} from './components/Skills';
import { Projects } from './components/Projects';
import {Contact} from './components/Contact';
import MyMap from './components/MyMap';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <MyMap/>
      <Footer/>
     </div>
     
  );
}

export default App;
