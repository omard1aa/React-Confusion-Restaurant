import React, {Component} from 'react';
import logo from './logo.svg';
import NavbarComponent from "./components/NavbarComponent";
import './App.css';
import Menu from "./components/MenuComponent";
import Footer from "./components/Footer";
import DISHES from "./data/dishes";

class App extends Component {
    constructor(props){
        super (props);
        this.state = {
            dishes: DISHES
        }
    }
  render() {
      return (
          <div>
              <NavbarComponent/>
              <br></br>
              <Menu dishes={DISHES}/>
          </div>
      );
  }
}

export default App;
