// https://animate.style/

import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar> 
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
export default App;
