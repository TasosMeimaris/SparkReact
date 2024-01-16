import React, { Component } from 'react'; 
import '../Algorithms.css'
import { Form } from 'react-bootstrap'

class Myform extends Component {
    state = { 
        showForm: false}

    
    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 39) {
            this.props.parentCallback(this.props.percentage + 50);
        }        
    } 
    
    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <form className="theForm">
                    <br />
                    <Form.Control type="number" id="kname" name="K" placeholder="Κ -> 
                                Number of independent Gaussians in the mixture model. Must be greater than 1. Default: 2." 
                    />
                    <br />
                    <Form.Control type="number" id="maxname" name="maxIter" placeholder="maxIter ->
                                Parameter for maximum number of iterations. 
                                Must be >= 0 ,default: 20" 
                    />
                    <br />
                    <Form.Control type="number" id="seedname" name="seed" placeholder="seed ->
                                Parameter for random seed "
                    />
                    <br />
                    <Form.Control type="number" id="tolname" name="tol" placeholder="tol ->
                                Parameter for the convergence tolerance 
                                for iterative algorithms. 
                                Must be >= 0" 
                    />
                    <br />
                    <Form.Control type="text" id="predictionColname" name="predictionCol" placeholder="predictionCol ->
                                Parameter for prediction column name" 
                    />
                    <br />
                    <Form.Control type="text" id="featuresColname" name="featuresCol" placeholder="featuresCol ->
                                Parameter for features column name." 
                    />
                    <br />
                    <Form.Control type="text" id="probabilityColID" name="probabilityCol" placeholder="probabilityCol ->
                                Parameter for Column name for predicted class conditional probabilities."
                    />   
                    <br />
                    <Form.Control type="text" id="weightColname" name="weightCol" placeholder="weightCol ->
                                Parameter for weight column name" 
                    />
                    <br />
                    <Form.Control type="number" id="aggregationDepthID" name="aggregationDepth" placeholder="aggregationDepth ->
                                Parameter for suggested depth for treeAggregate. Must be >= 2." 
                    />                                                   
                    <br />
                                                                                                                                                                    
                </form>
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

