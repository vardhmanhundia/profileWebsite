import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Front_display from './Components/FrontDisplay/front_display';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme = {theme} >
        <Front_display  />
        <Header />
      </MuiThemeProvider>
      
    </div>
  );
}

export default App;
