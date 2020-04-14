import React,  { Component } from "react";
import {Form, FormGroup, Label, Input, Col, Button, FormText} from 'reactstrap'
import AbsoluteWrapper from './AbsoluteWrapper'



class Contact extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            EmailAdd: '',
            comment: '',
            phoneNum: '',
            agree: false,
            contactType: 'Tel.'
        }

    }

    render(){
        return(
            <AbsoluteWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h4 className="text-center"> Give Us Feedback</h4>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
     
     
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
                    </div>
                </div>
            </div>
            </AbsoluteWrapper>         
        )
    }
}


export default Contact;