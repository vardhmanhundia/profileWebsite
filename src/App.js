import React, { Component } from 'react';
import './App.css';
import Home from './Containers/home.container';
import ExperiencesContainer from './Containers/experiences.container';
import NavBar from './Components/NavBar/navbar.component';
import Projects from './Containers/projects.container';
import ContactMe from './Containers/contactMe.container';
import AboutMe from './Containers/aboutMe.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = {
  spacing: 2,
  palette: {
    primary: '#007bff',
  },
};


class App extends Component {
  constructor(props) {
    super(props);
    this.onRouteChange = this.onRouteChange.bind(this);

    this.state = {
      route: 'Home'
    }
  }

  onRouteChange(page) {
    this.setState({ route: page });
  }

  render(props) {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme} >
          <NavBar onRouteChange={this.onRouteChange} />
          {this.state.route === "Home" ? <Home />
            :
            this.state.route === "About Me" ? <AboutMe />
              :
              this.state.route === "My Carrier" ? <ExperiencesContainer />
                :
                this.state.route === "Projects" ? <Projects />
                  :
                  <ContactMe />

          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
