import React from 'react';
import { ListGroup, ListGroupItem, Badge, InputGroup, Input, Button } from 'reactstrap';
import { StateContext } from './state';
import { SampleService } from './SampleService';

class SamplesHome extends React.Component {
  static contextType = StateContext;

  listView = () => {
    const [{ data }, dispatch] = this.context;

    const items = data.samples;
    return (
      <ListGroup style={{textAlign: "left"}}>
        {items.map((item, index) => 
          <ListGroupItem key={index} onClick={e => this.goToDetails(item.id)}>
            {item.name}
          </ListGroupItem> ) }
      </ListGroup>
    )
  }

  goToDetails = id => {
    this.props.history.push(`samples-details/${id}`)
  }

  componentDidMount() {
    const [{ data }, dispatch] = this.context;
    SampleService.getAll(data)
    .then(function(json) {
      dispatch({ type: 'getAll', payload: json })
    });
  }

  render() {
    return (
      <div className="Samples">
        <div className="row" style={{padding: "20px"}}>
          <div className="col-8"  style={{textAlign: "left"}}>
            <Button color="primary" 
            onClick={()=> this.props.history.push("samples-details") }>Add</Button>
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