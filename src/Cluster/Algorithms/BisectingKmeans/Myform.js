import React, { Component } from 'react'; 
import '../Algorithms.css'
import { Form } from 'react-bootstrap'

class Myform extends Component {
    state = { 
        showForm: false}

    
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
                    <Form.Control type="number" id="kname" name="K" placeholder="Κ -> 
                                The number of clusters to create (k).
                                                                        Must be > 1. (default: 2)" />
                    <br />
                    <Form.Control type="number" id="maxname" name="maxIter" placeholder="maxIter ->
                                Parameter for maximum number of iterations. 
                                Must be >= 0 (default: 20)" />
                    <br />
                    <Form.Control type="number" id="seedname" name="seed" placeholder="seed ->
                                Parameter for random seed 
                                (default: -1689246527)" />
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
                    <Form.Control type="number" id="minDivisibleClusterSizeID" name="minDivisibleClusterSize" placeholder="minDivisibleClusterSize ->
                                The minimum number of points (Default: 1.0)" />
                    <br />
                    <Form.Control type="text" id="weightColname" name="weightCol" placeholder="weightCol ->
                                Parameter for weight column name" 
                    />                                                                                                                           
                </Form>
            </div>
            
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => {this.setState({showForm: !this.state.showForm}, this.myfun())}}>
                    choose your parameters
                </button>                                                                                                      
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default Myform