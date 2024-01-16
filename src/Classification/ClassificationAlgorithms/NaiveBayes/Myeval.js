import React, { Component } from 'react';
import '../../../Cluster/Algorithms/Algorithms.css'
import Form from 'react-bootstrap/Form';

class Myeval extends Component {
    state = {
        showForm: false,
        mycolor: 'darkgoldenrod',
    }

    myfun = () => {
        if (this.props.percentage <= 69) {
            this.props.parentCallback(this.props.percentage + 40);
        }
    }

    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control className="trainForms" type="number" id="betaEvalID" name="beta" placeholder="beta -> 
                                                                                Parameter which controls precision vs recall weighting." />
                    <br />
                    <Form.Control as="select" type="text" id="metricNameEvalID" name="metricName" >
                        <option value="" disabled selected>metricName</option>
                        <option value="f1">f1</option>
                        <option value="accuracy">accuracy</option>
                        <option value="weightedPrecision">weightedPrecision</option>
                        <option value="weightedRecall">weightedRecall</option>
                        <option value="weightedTruePositiveRate">weightedTruePositiveRate</option>
                        <option value="weightedFalsePositiveRate">weightedFalsePositiveRate</option>
                        <option value="weightedFMeasure">weightedFMeasure</option>
                        <option value="truePositiveRateByLabel">truePositiveRateByLabel</option>
                        <option value="falsePositiveRateByLabel">falsePositiveRateByLabel</option>
                        <option value="precisionByLabel">precisionByLabel</option>
                        <option value="recallByLabel">recallByLabel</option>
                        <option value="fMeasureByLabel">fMeasureByLabel</option>
                        <option value="logLoss">logLoss</option>
                        <option value="hammingLoss">hammingLoss</option>
                    </Form.Control>
                    <br />
                    <Form.Control className="trainForms" type="text" id="labelColEvalID" name="labelCol" placeholder="labelCol ->
                                                                            Parameter for label column name" />
                    <br />
                    <Form.Control className="trainForms" type="text" id="probabilityColEvalID" name="probabilityCol" placeholder="probabilityCol ->
                                                                            Parameter for column name predicted class conditional probabilities "/>
                    <br />
                    <Form.Control className="trainForms" type="text" id="predictionColEvalID" name="predictionCol" placeholder="predictionCol ->
                                                                            Parameter for prediction column name" />
                    <br />
                    <Form.Control className="trainForms" type="number" id="epsEvalID" name="eps" placeholder="eps ->
                                                                            Parameter for eps." />
                    <br />
                    <Form.Control className="trainForms" type="number" id="metricLabelEvalID" name="metricLabel" placeholder="metricLabel ->
                                                                            Must be greater than or equal to 0" />
                    <br />
                    <Form.Control className="trainForms" type="text" id="weightColEvalID" name="weightCol" placeholder="weightCol ->
                                                                            Parameter for weight column name (not set or empty is 1.0)" />

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

export default Myeval