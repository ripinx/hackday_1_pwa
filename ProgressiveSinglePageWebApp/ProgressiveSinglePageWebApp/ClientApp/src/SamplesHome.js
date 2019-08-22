import React from 'react';
import { ListGroup, ListGroupItem, Badge, InputGroup, Input, Button } from 'reactstrap';

function SamplesHome() {
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
        <ListGroup style={{textAlign: "left"}}>
          <ListGroupItem>Cras justo odio <Badge pill>14</Badge></ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem>Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
  
  export default SamplesHome;