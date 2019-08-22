import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import SamplesHome from './SamplesHome';
import { useStateValue } from './state';
import { StateContext } from './state';

class Logon extends React.Component {
  static contextType = StateContext;

  render(){
    const [{ user }, dispatch] = this.context;

    return (
          <div className="Logon" style={{paddingTop: "100px", 
            paddingLeft: "500px", paddingRight: "500px"}} >
            <InputGroup>
                <Input id="userinput" placeholder="Username"/>
            </InputGroup>
            <Button style={{marginTop: "20px", width: "100%"}} color="primary"
                onClick={(e) => {
                  const user = document.getElementById("userinput");
                  dispatch({
                    type: 'changeUser',
                    newUser: { username: user.value}
                  });
                  this.props.history.push("samples-home");

                }} >Login</Button>{' '}
          </div>
    );
  }
  }
  
  export default Logon;