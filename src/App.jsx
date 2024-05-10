import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Slide from './components/Slide';


function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" fixed='top'>
        <Navbar.Brand><img src={process.env.PUBLIC_URL +"img/MNZY.png"} alt="logo" /></Navbar.Brand>
        <p>본 페이지는 화면 해상도 1920 x 1080에 최적화되어 있습니다.</p>
    </Navbar>
    <Slide/>
    </div>
  );
}

export default App;
