import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'

class RegressionEval extends Component {
    state = {
        showForm: false,
        mycolor: 'darkgoldenrod',
    }

    myfun = () => {
        if (this.props.percentage <= 69) {
            this.props.parentCallback(this.props.percentage + 30);
        }
    }

    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                                                            Parameter for label column name" />
                    <br />
                    <Form.Control as="select" type="text" id="metricNameID" name="metricName" >
                        <option value="" disabled selected>metricName</option>
                        <option value="rmse">rmse</option>
                        <option value="mse">mse</option>
                        <option value="r2">r2</option>
                        <option value="mae">mae</option>
                        <option value="var">var</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                            Parameter for prediction column name" />
                    <br />
                    <Form.Control type="text" id="weightColID" name="weightCol" placeholder="weightCol ->
                                                                            Parameter for weight column name (not set or empty is 1.0)" />

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

export default RegressionEval