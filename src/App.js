import './App.css';
import Header from './components/Header';
import Leftbar from './components/Leftbar';
import Slider from './components/Slider';
import News from './components/News';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <Leftbar />
      <Slider />
      <News />
      <Sidebar />
    </div>
  );
}

export default App;
