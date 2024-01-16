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
                <Form.Control as="select" type="text" id="familyID" name="family" >
                            <option value="" disabled selected> family </option>
                            <option value="gaussian">gaussian</option>
                            <option value="binomial">binomial</option>
                            <option value="poisson">poisson</option>
                            <option value="gamma">gamma</option>
                            <option value="tweedie">tweedie</option>
                    </Form.Control>
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
                    <Form.Control  type="text" id="linkID" name="link" placeholder="link ->
                                                                    Parameter for the name of link function which provides the relationship between the linear predictor and the mean of the distribution function." />
                    <br />
                    <Form.Control  type="text" id="linkPowerID" name="linkPower" placeholder="linkPower ->
                                                                    Parameter for the index in the power link function." />
                    <br />
                    <Form.Control  type="text" id="linkPredictionColID" name="linkPredictionCol" placeholder="linkPredictionCol ->
                                                                    Parameter for link prediction (linear predictor) column name." />
                    <br />
                    <Form.Control  type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                                                    Parameter for maximum number of iterations (>= 0)." />
                    <br />
                    <Form.Control  type="number" id="offsetColID" name="offsetCol" placeholder="offsetCol ->
                                                                    Parameter for offset column name." />
                    <br />
                    <Form.Control  type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                    Parameter for prediction column name" />
                    <br />
                    <Form.Control  type="number" id="regParamID" name="regParam" placeholder="regParam ->
                                                                    Parameter for regularization parameter (>= 0)" />   
                    <br />
                    <Form.Control as="select" type="text" id="solverID" name="solver" >
                            <option value="" disabled selected> solver </option>
                            <option value="l-bfgs">l-bfgs</option>
                            <option value="normal">normal</option>
                            <option value="auto">auto (Default)</option>
                    </Form.Control>
                    <br/>
                    <Form.Control  type="number" id="tolID" name="tol" placeholder="tol ->
                                                                    Parameter for the convergence tolerance for iterative algorithms (>= 0)." /> 
                    <br />
                    <Form.Control  type="number" id="variancePowerID" name="variancePower" placeholder="variancePower ->
                                                                    Parameter for the power in the variance function of the Tweedie distribution which provides the relationship between the variance and mean of the distribution." /> 
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