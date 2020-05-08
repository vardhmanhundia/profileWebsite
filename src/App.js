import React, { Component } from 'react';
import './App.css';
import Home from './Containers/home';
import Experience from './Containers/Experience';
import NavBar from './Components/NavBar/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};


class App extends Component{
  constructor(props){
    super(props);
    this.onRouteChange = this.onRouteChange.bind(this);

    this.state = {
      route: 'Home'
    }
  }

  onRouteChange (page) {
    this.setState({route: page});
  }

  render(){
    return (
      <div className="App">
        <MuiThemeProvider theme = {theme} >
          <NavBar onRouteChange= {this.onRouteChange} />
          { this.state.route === "Home" ? <Home />
            :
            <Experience />
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
