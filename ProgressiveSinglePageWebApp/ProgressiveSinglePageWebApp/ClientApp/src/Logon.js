import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import SamplesHome from './SamplesHome';
import { useStateValue } from './state';
import { StateContext } from './state';

class Logon extends React.Component {
  static contextType = StateContext;
  static style = {
    paddingTop: "100px", 
    paddingLeft: "400px",
    paddingRight: "400px"
  }

  render(){
    const [{ user }, dispatch] = this.context;

    return (
          <div className="Logon" style={Logon.style} >
            <InputGroup>
                <Input id="userinput" placeholder="Username"/>
            </InputGroup>
            <Button
              style={{marginTop: "20px", width: "100%"}}
              color="primary"
              onClick={() => this.click(dispatch)}>Login</Button>{' '}
          </div>
    );
  }

  click = dispatch => {
    const user = document.getElementById("userinput");
    dispatch({
      type: 'changeUser',
      payload: { username: user.value}
    });
    this.props.history.push("samples-home");
  }
}
  
export default Logon;