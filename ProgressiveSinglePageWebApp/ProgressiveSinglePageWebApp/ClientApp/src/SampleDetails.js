import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SamplesHome from './SamplesHome';

function SampleDetail() {

    return (
        <div style={{textAlign: "left", padding: "10px"}}>
        <Form>
        <FormGroup>
          <Label for="sampleName">Sample Name</Label>
          <Input type="text" name="sampleName" id="sampleName"/>
        </FormGroup>
        <FormGroup>
          <Label for="sampleLatitude">Latitude</Label>
          <Input type="text" name="sampleLatitude" id="sampleLatitude"/>
        </FormGroup>
        <FormGroup>
          <Label for="sampleLongitude">Longitude</Label>
          <Input type="text" name="sampleLongitude" id="sampleLongitude"/>
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
          <Label for="sampleTemp">Temperature</Label>
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
  
  export default SampleDetail;