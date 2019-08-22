import React from 'react';
import { Navbar, NavbarBrand, Label } from 'reactstrap';
import { InputGroup, Input, Button } from 'reactstrap';
import { StateContext } from './state';

class Navigation extends React.Component {

  static contextType = StateContext;

  componentDidMount() {
  }

  componentDidUpdate(){
  }

  render() {
    const [{ user }, dispatch] = this.context;
    const logoutText = "Logout " + user["username"];
    const isSampleHome = window.location.pathname === "/samples-home";

    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Inviron PWA</NavbarBrand>
            { isSampleHome &&  <div style={{textAlign: "right", width: "100%"}}>
            <Button color="secondary">Sync</Button>{' '}
            <Button color="secondary" onClick={()=>{ window.location.pathname = "/"; }}>{logoutText}</Button>{' '}
            </div>}
        </Navbar>
      </div>
    );
  }
  }
  
export default Navigation;