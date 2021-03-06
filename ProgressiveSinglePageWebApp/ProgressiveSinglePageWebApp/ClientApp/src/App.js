import React from 'react';
import { StateProvider } from './state';

import logo from './logo.svg';
import './App.css';
import SamplesHome from './SamplesHome';
import Navigation from './Navigation';

const initialState = {
  user: { username: '' },
  data: { samples: [{name: "Item 1"}, {name: "Item 2"}] }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeUser':
      return {
        ...state,
        user: action.newUser
      };
      
    default:
      return state;
  }
};

class App extends React.PureComponent {

  render() {

    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App">
          <Navigation/>
          <div id="content" className="content" style={{width: "100%"}}>
            {this.props.children}
          </div>
        </div>
      </StateProvider>
    );
  }
}

export default App;
