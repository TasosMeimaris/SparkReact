import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'

class MyForm extends Component {
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
                    <Form.Control  type="text" id="elasticParamID" name="elasticParam" placeholder="elasticParam -> 
                                    Parameter for the ElasticNet mixing parameter, in range [0, 1]." />
                    <br />
                    <Form.Control  type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                    Parameter for features column name." />
                    <br />
                    <Form.Control  type="text" id="fitInterceptID" name="fitIntercept" placeholder="fitIntercept ->
                                    Parameter for whether to fit an intercept term (True or False)." />
                    <br />
                    <Form.Control   type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                    Parameter for label column name" />
                    <br />
                    <Form.Control  type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                    Parameter for maximum number of iterations (>= 0)." />
                    <br />
                    <Form.Control  type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                    Parameter for prediction column name" />
                    <br />
                    <Form.Control type="text" id="probabilityColID" name="probabilityCol" placeholder="probabilityCol ->
                                                                        Paramater for Column name for predicted class conditional probabilities." />
                    <br />
                    <Form.Control  type="text" id="rawPredictionColID" name="rawPredictionCol" placeholder="rawPredictionCol ->
                                    Parameter for raw prediction (a.k.a. confidence) column name." />
                    <br />
                    <Form.Control  type="number" id="regParamID" name="regParam" placeholder="regParam ->
                                    Parameter for regularization parameter (>= 0)" />   
                    <br />
                    <Form.Control  type="text" id="standardizationID" name="standardization" placeholder="standardization ->
                                    Parameter for whether to standardize the training features before fitting the model" />   
                    <br />
                    <Form.Control  type="number" id="thresholdID" name="threshold" placeholder="threshold ->
                                    Parameter for threshold in binary classification prediction, in range [0, 1]." /> 
                    <br />
                    <Form.Control  type="number" id="tolID" name="tol" placeholder="tol ->
                                    Parameter for the convergence tolerance for iterative algorithms (>= 0)." /> 
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

export default MyForm