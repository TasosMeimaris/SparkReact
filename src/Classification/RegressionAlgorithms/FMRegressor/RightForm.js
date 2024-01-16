import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class RightForm extends Component {
    state = {
        showForm: false
    }

    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 51) {
            this.props.parentCallback(this.props.percentage + 10);
        }
    }
    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="number" id="factorSizeID" name="factorSize" placeholder="factorSize ->
                                                                        Parameter for dimensionality of the factors (>= 0)" />
                    <br />
                    <Form.Control type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                            Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="fitInterceptID" name="fitIntercept" >
                            <option value="" disabled selected> fitIntercept </option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </Form.Control>
                    <br />
                    <Form.Control as="select" type="text" id="fitLinearID" name="fitLinear" >
                            <option value="" disabled selected> fitLinear </option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="number" id="initStdID" name="initStd" placeholder="initStd -> 
                                                                            Parameter for standard deviation of initial coefficients." />
                    <br />
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol -> 
                                                                            Param for label column name." />
                    <br />
                    <Form.Control type="number" id="maxIterID" name="maxIter" placeholder="maxIter -> 
                                                                           Parameter for maximum number of iterations (>= 0)." />
                    <br />
                    <Form.Control type="number" id="minBatchFractionID" name="minBatchFraction" placeholder="minBatchFraction -> 
                                                                            Parameter for mini-batch fraction, must be in range (0, 1]" />
                    <br />
                    <Form.Control type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                        Parameter for prediction column name" />
                    <br />
                    <Form.Control type="number" id="regParamID" name="regParam" placeholder="regParam ->
                                                                        Param for regularization parameter (>= 0).." />
                    <br />
                    <Form.Control type="number" id="seedID" name="seed" placeholder="seed ->
                                                                        Parameter for random seed." />
                    <br />
                    <Form.Control as="select" type="text" id="solverID" name="solver" >
                            <option value="" disabled selected> solver </option>
                            <option value="l-bfgs">l-bfgs</option>
                            <option value="normal">normal</option>
                            <option value="auto">auto (Default)</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="number" id="stepSizeID" name="stepSize" placeholder="stepSize ->
                                                                       Parameter for Step size to be used for each iteration of optimization (> 0)." />
                    <br />
                    <Form.Control type="number" id="tolID" name="tol" placeholder="tol ->
                                                                       Parameter for the convergence tolerance for iterative algorithms (>= 0)." />
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

export default RightForm