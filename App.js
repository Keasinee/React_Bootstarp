import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider';
import Data1 from './components/Data1'
import Data2 from './components/Data2'
import Block from './components/Block'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import { SliderData } from './components/SliderData';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />

          <ImageSlider slides={SliderData} />

        <Data1 />
        <Data2 />
        <Block />
       </div>
     </Router>
  );
}

export default App;
