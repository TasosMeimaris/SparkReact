import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class MinMaxScaler extends Component {
    state = {
        showForm: false
    }

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
                    <Form.Control  type="text" id="inputColScalerID" name="inputCol" placeholder="inputCol -> 
                                        Parameter for input column name." />
                    <br />
                    <Form.Control  type="number" id="maxScalerID" name="max" placeholder="max ->
                                        upper bound after transformation, shared by all features Default: 1.0" />
                    <br />
                    <Form.Control  type="number" id="minScalerID" name="min" placeholder="min ->
                                        lower bound after transformation, shared by all features Default: 0.0" />
                    <br />
                    <Form.Control  type="text" id="outputColScalerID" name="outputCol" placeholder="outputCol ->
                                        Parameter for output column name" />
                    <br />
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => { this.setState({ showForm: !this.state.showForm }, this.myfun()) }}>
                    Choose your own parameters
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default MinMaxScaler