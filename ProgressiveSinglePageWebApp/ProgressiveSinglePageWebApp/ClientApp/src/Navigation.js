import React from 'react';
import { Navbar, NavbarBrand, Label } from 'reactstrap';
import { InputGroup, Input, Button } from 'reactstrap';
import { StateContext } from './state';
import { SampleService } from './SampleService'

class Navigation extends React.Component {

  static contextType = StateContext;

  constructor(props) {
    super(props);
    window.addEventListener('online',  this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }
  
  updateOnlineStatus = event => {
    const [{ user }, dispatch] = this.context;
    dispatch({
      type: 'online',
      payload: event.type == 'online'
    });
  }  

  componentDidMount() {
  }

  componentDidUpdate(){
  }

  render() {
    const [{ user, online, updates }, dispatch] = this.context;
    const logoutText = `Logout ${user["username"]}`;
    const isSampleHome = window.location.pathname === "/samples-home";
    const disabled = !online.online;
    const color = updates.length ? 'warning' : 'success';

    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Inviron PWA</NavbarBrand>
            { isSampleHome &&  <div style={{textAlign: "right", width: "100%"}}>
            <Button color="secondary" disabled={disabled} color={color}
              onClick={() => 
                SampleService.sync()
                .then(() =>
                 dispatch({
                    action: 'sync',
                    payload: null
                  }))}
              >Sync</Button>{' '}
            <Button color="secondary" onClick={()=>{ window.location.pathname = "/"; }}>{logoutText}</Button>{' '}
            </div>}
        </Navbar>
      </div>
    );
  }
}
  
export default Navigation;