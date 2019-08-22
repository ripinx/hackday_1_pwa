import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SamplesHome from './SamplesHome';

class SampleDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        latitude: null,
        longitude: null
    }
  }

  setLocation = (lat, long) => {
    this.setState({ latitude: lat, longitude: long});
  }

  getLocation = () => {
    if ("geolocation" in navigator) {

      const setLocation = this.setLocation;

      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Sorry, geolocation is not available in your browser.");
    }
  }

  // getMap = () => {
  //   this.props.history.push("map");
  // }

  render() {
    return (
        <div style={{textAlign: "left", padding: "10px"}}>
        <Form>
        <FormGroup>
          <Label for="sampleName">Sample Name</Label>
          <Input type="text" name="sampleName" id="sampleName"/>
        </FormGroup>
        <FormGroup>
          <Label for="sampleLatitude">Latitude</Label>
          <Input type="text" name="sampleLatitude" id="sampleLatitude" value={this.state.latitude}/>
        </FormGroup>
        <FormGroup>
          <Label for="sampleLongitude">Longitude</Label>
          <Input type="text" name="sampleLongitude" id="sampleLongitude" value={this.state.longitude}/>
          <Button style={{marginTop: "5px"}} color="primary"
            onClick={this.getLocation}>
            Use Current Location</Button>
          {/* { navigator.onLine && <Button style={{marginTop: "5px", marginLeft: "5px"}} color="primary"
            onClick={this.getMap}>
            Get Location From Map</Button>} */}
        </FormGroup>
        <FormGroup>
          <Label for="sampleWeather">Weather</Label>
          <Input type="select" name="sampleWeather" id="sampleWeather">
            <option>Clear day</option>
            <option>Cloudy day</option>
            <option>Snow day</option>
            <option>Rainy day</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="sampleTemp">Temperature (C)</Label>
          <Input type="number" name="sampleTemp" id="sampleTemp"/>
        </FormGroup>
        <FormGroup>
          <Label for="sampleObservation">Observations</Label>
          <Input type="textarea" name="sampleObservation" id="sampleObservation" />
        </FormGroup>
        <FormGroup>
        </FormGroup>
        <Button onClick={()=> { window.location.pathname = "/samples-home" }}>Submit</Button>
      </Form>
      </div>
    );
  }
}
  
export default SampleDetail;