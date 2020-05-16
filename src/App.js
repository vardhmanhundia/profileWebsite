import React, { Component } from 'react';
import './App.css';
import Home from './Containers/home';
import Experience from './Containers/Experience';
import NavBar from './Components/NavBar/navbar';
import Projects from './Containers/projects';
import ContactMe from './Containers/contactMe';
import AboutMe from './Containers/aboutMe';
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

  render(props){
    return (
      <div className="App">
        <MuiThemeProvider theme = {theme} >
          <NavBar onRouteChange= {this.onRouteChange} />
          { this.state.route === "Home" ? <Home />
            :
            this.state.route === "About Me"? <AboutMe/>
            :
            this.state.route === "My Carrier" ? <Experience />
            :
            this.state.route === "Projects" ?<Projects />
            :
            <ContactMe/>
            
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
