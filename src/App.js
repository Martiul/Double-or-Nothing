// import logo from './logo.svg';
import React from 'react';
import './css/App.css';
import Game from './Game'
import Tutorial from './Tutorial'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'game'};
    this.showGameView = this.showGameView.bind(this);
    this.showHelpView = this.showHelpView.bind(this);
  }

  showGameView() {
    // TODO: use enum
    this.setState({view: 'game'});
  }

  showHelpView() {
    this.setState({view: 'help'})
  }

  render() {
    const currentView = this.state.view;
    let viewComponent
    if (currentView === 'game') {
      viewComponent = <Game></Game>;
    } else {
      viewComponent = <Tutorial></Tutorial>
    }
    return (
      <div className="App">
      <header className="App-header">
        {viewComponent}
      </header>
      </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

