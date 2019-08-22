import React from 'react';
import { ListGroup, ListGroupItem, Badge, InputGroup, Input, Button } from 'reactstrap';
import { StateContext } from './state';

class SamplesHome extends React.Component {
  static contextType = StateContext;

  listView = () => {

    const [{ data }, dispatch] = this.context;

    const items = data.samples;
    return (
      <ListGroup style={{textAlign: "left"}}>
        {items.map((item, index) => <ListGroupItem>{item.name}</ListGroupItem> ) }
      </ListGroup>
    )
  }

  render() {
    return (
      <div className="Samples">
        <div className="row" style={{padding: "20px"}}>
          <div className="col-8"  style={{textAlign: "left"}}>
            <Button color="primary" onClick={()=> { window.location.pathname = "/samples-details" }}>Add</Button>
          </div>
          <div className="col-4">
              <Input placeholder="Search"/>
          </div>
        </div> 
        {this.listView()}
      </div>
    );
    }
  }
  
  export default SamplesHome;