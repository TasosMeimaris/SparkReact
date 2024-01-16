import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class IrForm extends Component {
        state = { 
            showForm: false}
    
        myfun = () => { //this is for progress bar
            if (this.props.percentage <= 39) {
                this.props.parentCallback(this.props.percentage + 10);
            }        
        }

    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="number" id="featureIndexID" name="featureIndex" placeholder="featureIndex -> 
                                                                        Parameter for the index of the feature if featuresCol is a vector column (default: 0), no effect otherwise." />
                    <br />
                    <Form.Control  type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                        Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="isotonicID" name="isotonic" >
                            <option value="" disabled selected> isotonic </option>
                            <option value="true">isotonic/true</option>
                            <option value="false">antitonic/false</option>
                    </Form.Control>
                    <br />
                    <Form.Control  type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                                                    Parameter for label column name" />
                    <br />
                    <Form.Control  type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                    Parameter for prediction column name" />
                    <br />
                    <Form.Control  type="text" id="weightColID" name="weightCol" placeholder="weightCol ->
                                                                    Parameter for weight column name (not set or empty is 1.0)" />   
                                                                                                                                                                
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => {this.setState({showForm: !this.state.showForm}, this.myfun())}}>
                    Choose your own parameters
                </button>                                                                                                      
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }  
}

export default IrForm