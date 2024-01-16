import React, { Component } from 'react';
import '../../../Cluster/Algorithms/Algorithms.css'
import Form from 'react-bootstrap/Form';

class TheForm extends Component {
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
                    <Form.Control type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                        Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="modelTypeID" name="modelType" >
                        <option value="" disabled selected>modelType</option>
                        <option value="multinomial">multinomial</option>
                        <option value="complement">complement</option>
                        <option value="bernoulli">bernoulli</option>
                        <option value="gaussian">gaussian</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                        Parameter for label column name" />
                    <br />
                    <Form.Control type="number" id="probabilityColID" name="probabilityCol" placeholder="probabilityCol ->
                                        Parameter for column name predicted class conditional probabilities "/>
                    <br />
                    <Form.Control type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                        Parameter for prediction column name" />
                    <br />
                    <Form.Control type="text" id="rawPredictionColID" name="rawPredictionCol" placeholder="rawPredictionCol ->
                                        Parameter for raw prediction (a.k.a. confidence) column name." />
                    <br />
                    <Form.Control type="number" id="smoothingID" name="smoothing" placeholder="smoothing ->
                                        Parameter for smoothing, default = 1.0" />
                    <br />
                    <Form.Control title="For LinearSVC, this threshold is applied to the rawPrediction, rather than a probability. This threshold can be any real number" type="number" id="thresholdID" name="threshold" placeholder="threshold ->
                                        Parameter for threshold in binary classification prediction. Default: 0.0" />
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

export default TheForm
