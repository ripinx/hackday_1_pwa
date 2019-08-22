import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SamplesHome from './SamplesHome';
import { StateContext } from './state';
import { SampleService } from './SampleService';

class SampleDetail extends React.Component {
  static contextType = StateContext;

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      latitude: 0,
      longitude: 0,
      temperature: 0,
      observations: ''
    }
  }
    
  setLocation = (latitude, longitude) => {
      this.setState({ latitude, longitude });
  }

  getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        this.setState({ latitude, longitude });
      });
    } else {
      alert("Sorry, geolocation is not available in your browser.");
    }
  }

  componentDidMount() { 
    const [{ data }] = this.context;
    const { id } = this.props.match.params;    
    var sampleItem = data.samples.find(e => e.id == id)
    this.setState(
      sampleItem
    )
  }

  render() {
    let sampleItem = this.state;    
    return (
      <div style={{textAlign: "left", padding: "10px"}}>
        <Form>
          <FormGroup>
            <Label for="sampleName">Sample Name</Label>
            <Input type="text" name="sampleName" id="sampleName"
              value={sampleItem.name}
              onChange={e => {
                let item = this.state;
                item.name = e.target.value;
                this.setState(item)
              }}/>
          </FormGroup>
          <FormGroup>
            <Label for="sampleLatitude">Latitude</Label>
            <Input type="text" name="sampleLatitude" id="sampleLatitude"
              value={sampleItem.latitude}
              onChange={e => {
                let item = this.state;
                item.latitude = e.target.value;
                this.setState(item)
              }}/>
          </FormGroup>
          <FormGroup>
            <Label for="sampleLongitude">Longitude</Label>
            <Input type="text" name="sampleLongitude" id="sampleLongitude"
            value={sampleItem.longitude}
            onChange={e => {
              let item = this.state;
              item.longitude = e.target.value;
              this.setState(item)
            }} />
            <Button style={{ marginTop: "5px" }}
              onClick={this.getLocation}>
              Use Current Location
            </Button>
          </FormGroup>
          {/*<FormGroup>
            <Label for="sampleWeather">Weather</Label>
            <Input type="select" name="sampleWeather" id="sampleWeather">
              <option>Clear day</option>
              <option>Cloudy day</option>
              <option>Snow day</option>
              <option>Rainy day</option>
            </Input>
          </FormGroup>*/}
          <FormGroup>
            <Label for="sampleTemp">Temperature</Label>
            <Input type="number" name="sampleTemp" id="sampleTemp"
            value={sampleItem.temperature}
            onChange={e => {
              let item = this.state;
              item.temperature = e.target.value;
              this.setState(item)
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="sampleObservation">Observations</Label>
            <Input type="textarea" name="sampleObservation" id="sampleObservation" 
            value={sampleItem.observations}
            onChange={e => {
              let item = this.state;
              item.observations = e.target.value;
              this.setState(item)
            }}/>
          </FormGroup>
          <FormGroup>
          </FormGroup>
          <Button color="primary" onClick={this.submit}>Submit</Button>
        </Form>
      </div>
    );
  }

  submit = (e) => {
    const [{ }, dispatch] = this.context;
    SampleService.save(this.state, dispatch)
    //.then(() => 
    this.props.history.push("/samples-home")//)
  }
}

export default withRouter(SampleDetail);