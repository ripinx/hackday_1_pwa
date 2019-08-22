import React from 'react';
import { StateProvider } from './state';

import logo from './logo.svg';
import './App.css';
import SamplesHome from './SamplesHome';
import Navigation from './Navigation';
import { SampleService } from './SampleService';


const initialState = {
  user: { username: '' },
  data: { 
    samples: []
  },
  updates: [],
  online: { online: window.navigator.onLine }
};

const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'changeUser':
        return {
          ...state,
          user: action.payload
        };
    case 'getAll':
        return {
          ...state,
          data: { samples: action.payload }
        };
    case 'online':
        return {
          ...state,
          online: { online: action.payload }
        };
    case 'save':
        SampleService.save()
        return {
          ...state,
          online: { online: action.payload }
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
