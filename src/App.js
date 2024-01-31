import './App.css';
import { Header } from './Components/header';
import { Work } from './Components/work';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/banner';
import { Services } from './Components/services';
import { Clients } from './Components/Clients';
import { Touch } from './Components/Touch';
import { Footer } from './Components/footer';

function App() {
  return <>
  <div className="main-content">
  <Header />
      <Banner />
      <Work />
      <Services />
      <Clients />
      <Touch />
      <Footer />
  </div>
  </>;
}

export default App;
