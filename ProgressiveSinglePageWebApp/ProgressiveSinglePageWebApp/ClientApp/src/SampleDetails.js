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
          <Label for="exampleText">Sample Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        </FormGroup>
        <Button onClick={()=> { window.location.pathname = "/samples-home" }}>Submit</Button>
      </Form>
      </div>
    );
  }
  
  export default SampleDetail;