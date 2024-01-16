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
                    <Form.Control type="number" id="layesID" name="layers" placeholder="layers -> 
                                Parameter for form size and output size." />
                    <br />
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                Parameter for label column name" />
                    <br />
                    <Form.Control type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                Parameter for maximum number of iterations (>= 0)." />
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
                    <Form.Control type="number" id="seedID" name="seed" placeholder="seed ->
                                Parameter for random seed." />
                    <br />
                    <Form.Control title="For LinearSVC, this threshold is applied to the rawPrediction, rather than a probability. This threshold can be any real number" type="number" id="thresholdID" name="threshold" placeholder="threshold ->
                                Parameter for threshold in binary classification prediction. Default: 0.0" />
                    <br />
                    <Form.Control type="number" id="tolID" name="tol" placeholder="tol ->
                                Parameter for the convergence tolerance for iterative algorithms (>= 0)." />
                    <br />
                    <Form.Control type="number" id="stepSizeID" name="stepSize" placeholder="stepSize ->
                                Parameter for Step size to be used for each iteration of optimization (> 0)" />

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