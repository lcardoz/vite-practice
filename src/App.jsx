import './App.css';
import Pic from '../public/flexboxvsgrid.png';

function App() {
  return (
    <div>
      <div id="app">
        <h1>Flexbox vs. Grid</h1>
        <img id="pic" src={Pic} alt="flexbox vs grid"/>
      </div>
      <div>
        <h2>Flexbox</h2>
          <div className="flexbox-container">
            <div className="flexbox-item flexbox-item-1"></div>
            <div className="flexbox-item flexbox-item-2"></div>
            <div className="flexbox-item flexbox-item-3"></div>
          </div>
        <h2>Grid</h2>
          <div className="grid-container">
            <div className="grid-item grid-item-1">asdf</div>
            <div className="grid-item grid-item-2">asdfasdf</div>
          </div>
      </div>
    </div>
  )
}

export default App
