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
                    <Form.Control type="number" id="checkpointIntervalID" name="checkpointInterval" placeholder="checkpointInterval ->
                                                                        Parameter for set checkpoint interval (>= 1) or disable checkpoint (-1)" />
                    <br />
                    <Form.Control type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                            Parameter for features column name." />
                    <br />
                    <Form.Control as="select" type="text" id="impurityID" name="impurity" >
                        <option value="" disabled selected>impurity (Criterion for information gain)</option>
                        <option value="entropy">entropy</option>
                        <option value="gini">gini (Default)</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                                                        Parameter for label column name" />
                    <br />
                    <Form.Control type="text" id="leafColID" name="leafCol" placeholder="leafCol -> 
                                                                            Leaf indices column name." />
                    <br />
                    <Form.Control type="number" id="maxBinsID" name="maxBins" placeholder="maxBins -> 
                                                                            Maximum number of bins used for discretizing continuous features and for choosing how to split on features at each node." />
                    <br />
                    <Form.Control type="number" id="maxDepthID" name="maxDepth" placeholder="maxDepth -> 
                                                                            Maximum depth of the tree (nonnegative)" />
                    <br />
                    <Form.Control type="number" id="minInstancesPerNodeID" name="minInstancesPerNode" placeholder="minInstancesPerNode -> 
                                                                            Minimum number of instances each child must have after split" />
                    <br />
                    <Form.Control type="number" id="minWeightFractionPerNodeID" name="minWeightFractionPerNode" placeholder="minWeightFractionPerNode -> 
                                                                            Minimum fraction of the weighted sample count that each child must have after split" />
                    <br />
                    <Form.Control type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                        Parameter for prediction column name" />
                    <br />
                    <Form.Control type="number" id="probabilityColID" name="probabilityCol" placeholder="probabilityCol ->
                                                                        Parameter for column name predicted class conditional probabilities "/>
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
                    Choose your own
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default RightForm