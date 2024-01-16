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
                    <Form.Control type="number" id="censorColID" name="censorCol" placeholder="censorCol -> 
                                                                        Parameter for censor column name." />
                    <br />
                    <Form.Control  type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                        Parameter for features column name." />
                    <br />
                    <Form.Control  type="number" id="fitInterceptID" name="fitIntercept" placeholder="fitIntercept ->
                                                                    Parameter for whether to fit an intercept term." />
                    <br />
                    <Form.Control  type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                                                    Parameter for label column name" />
                    <br />
                    <Form.Control  type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                                                    Parameter for maximum number of iterations (>= 0)." />
                    <br />
                    <Form.Control  type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                    Parameter for prediction column name" />
                    <br />
                    <Form.Control  type="text" id="quantilesColID" name="quantilesCol" placeholder="quantilesCol ->
                                                                    Parameter for quantiles column name." />
                    <br />
                    <Form.Control  type="number" id="tolID" name="tol" placeholder="tol ->
                                                                    Parameter for the convergence tolerance for iterative algorithms (>= 0)." />   
                                                                                                                                                                
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