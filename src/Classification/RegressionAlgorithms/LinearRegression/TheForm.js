import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class TheForm extends Component {
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
                    <Form.Control type="number" id="elasticNetParamID" name="elasticNetParam" placeholder="elasticNetParam -> 
                                                                        Parameter for the ElasticNet mixing parameter, in range [0, 1]." />
                    <br />
                    <Form.Control  type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                        Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="fitInterceptID" name="fitIntercept" >
                            <option value="" disabled selected> fitIntercept </option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </Form.Control>
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
                    <Form.Control as="select" type="text" id="solverID" name="solver" >
                            <option value="" disabled selected> solver </option>
                            <option value="l-bfgs">l-bfgs</option>
                            <option value="normal">normal</option>
                            <option value="auto">auto (Default)</option>
                    </Form.Control>
                    <br/>
                    <Form.Control  type="number" id="regParamID" name="regParam" placeholder="regParam ->
                                                                    Parameter for regularization parameter (>= 0)" />   
                    <br />
                    <Form.Control as="select" type="text" id="standardizationID" name="standardization" >
                            <option value="" disabled selected> standardization </option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </Form.Control>
                    <br />
                    <Form.Control as="select" type="text" id="lossID" name="loss" >
                            <option value="" disabled selected>loss </option>
                            <option value="squaredError">squaredError (Default)</option>
                            <option value="hube">hube</option>
                    </Form.Control>
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

export default TheForm