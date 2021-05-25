// import logo from './logo.svg';
import React from 'react';
import './css/App.css';
import Game from './Game';
import Tutorial from './Tutorial';
import StartScreen from './StartScreen';
import {VIEW} from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: VIEW.START};
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({view: newView});
  }

  render() {
    const currentView = this.state.view;
    let viewComponent
    switch (currentView) {
      case VIEW.START:
        viewComponent = <StartScreen changeView={this.changeView}></StartScreen>
        break;
      case VIEW.GAME:
        viewComponent = <Game changeView={this.changeView}></Game>;
        break;
      case VIEW.TUTORIAL:
        viewComponent = <Tutorial changeView={this.changeView}></Tutorial>
        break;
      default:
        console.log(`Invalid view: ${currentView}`);
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

