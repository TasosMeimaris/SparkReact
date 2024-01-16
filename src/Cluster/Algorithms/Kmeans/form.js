
import React, { Component } from 'react';
import '../Algorithms.css'
import Form from 'react-bootstrap/Form';

class Myforms extends Component {
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
                    <Form.Control id="kname" type="number" name="K" placeholder="Κ -> 
                                    The number of clusters to create (k).
                                    Must be > 1. (default: 2)" />
                    <br />
                    <Form.Control type="number" id="maxname" name="maxIter" placeholder="maxIter ->
                                    Parameter for maximum number of iterations. 
                                    Must be >= 0 (default: 20)" />
                    <br />
                    <Form.Control type="number" id="seedname" name="seed" placeholder="seed ->
                                    Parameter for random seed 
                                    default: -1689246527)" />
                    <br />
                    <Form.Control type="number" id="tolname" name="tol" placeholder="tol ->
                                    Parameter for the convergence tolerance 
                                    for iterative algorithms 
                                    (Must be >= 0)" />
                    <br />
                    <Form.Control type="text" id="predictionColname" name="predictionCol" placeholder="predictionCol ->
                                    Parameter for prediction column name" />
                    <br />
                    <Form.Control type="text" id="featuresColname" name="featuresCol" placeholder="featuresCol ->
                                    Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="distanceMeasurename" name="distanceMeasure" >
                            <option value="" disabled selected>distanceMeasure (Parameter for The distance measure.)</option>
                            <option value="euclidean">euclidean</option>
                            <option value="cosine">cosine</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="weightColname" name="weightCol" placeholder="weightCol ->
                                    Parameter for weight column name." />
                    <br />
                    <Form.Control as="select" type="text" id="initModename" name="initMode" >
                            <option value="" disabled selected>initmode (Parameter for initial cluster center.)</option>
                            <option value="random">random</option>
                            <option value="k-means">k-means</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="number" id="initStepsname" name="initSteps" placeholder="initSteps ->
                                    Parameter for the number of steps for the k-means. Must be > 0. Default: 2.'" />
                </Form>
            </div>

        );
    }

    render() {
        return (
            <div>
                <button id = "thebuttons" type="submit" class="btn btn-primary" onClick={() => { this.setState({ showForm: !this.state.showForm }, this.myfun()) }}>
                    Choose your own parameters
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default Myforms

