import React, { Component } from 'react';
import '../../../Cluster/Algorithms/Algorithms.css'
import Form from 'react-bootstrap/Form';

class TheForm extends Component {
    state = {
        showForm: false
    }

    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 39) {
            this.props.parentCallback(this.props.percentage + 30);
        }
    }
    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                Parameter for features column name." />
                    <br />
                    
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                Parameter for label column name" />
                    
                    <Form.Control type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                Parameter for prediction column name" />
                    <br />
                    <Form.Control type="text" id="rawPredictionColID" name="rawPredictionCol" placeholder="rawPredictionCol ->
                                Parameter for raw prediction (a.k.a. confidence) column name." />
                    <br />
                    <Form.Control type="text" id="weightColID" name="weightCol" placeholder="weightCol ->
                                Parameter for weight column name." />

                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => { this.setState({ showForm: !this.state.showForm }, this.myfun()) }}>
                    choose your own parameters
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default TheForm