import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class GradientForm extends Component {
    state = {
        showForm: false
    }

    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 41) {
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
                    <Form.Control as="select" type="text" id="featureSubsetStrategyID" name="featureSubsetStrategy" >
                        <option value="" disabled selected>featureSubsetStrategy (The number of features to consider for splits at each tree node)</option>
                        <option value="auto">auto</option>
                        <option value="all">all</option>
                        <option value="onethird">onethird</option>
                        <option value="sqrt">sqrt</option>
                        <option value="log2">log2</option>
                        <option value="n">n</option>
                    </Form.Control>
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
                    <Form.Control as="select" type="text" id="lossTypeID" name="lossType" >
                        <option value="" disabled selected>lossType (Loss function which GBT tries to minimize.)</option>
                        <option value="squared">squared (Default)</option>
                        <option value="absolute">absolute</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="number" id="maxBinsID" name="maxBins" placeholder="maxBins -> 
                                                                            Maximum number of bins used for discretizing continuous features and for choosing how to split on features at each node." />
                    <br />
                    <Form.Control type="number" id="maxDepthID" name="maxDepth" placeholder="maxDepth -> 
                                                                            Maximum depth of the tree (nonnegative)" />
                    <br />
                    <Form.Control type="number" id="maxIterID" name="maxIter" placeholder="maxIter -> 
                                                                            Parameter for maximum number of iterations" />
                    <br />
                    <Form.Control type="number" id="minInfoGainID" name="minInfoGain" placeholder="minInfoGain ->
                                                                        Minimum information gain for a split to be considered at a tree node"/>
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
                    <Form.Control type="text" id="seedID" name="seed" placeholder="seed ->
                                                                        Parameter for random seed." />
                    <br />
                    <Form.Control type="number" id="stepSizeID" name="stepSize" placeholder="stepSize ->
                                                                        Parameter for Step size (a.k.a. learning rate) in interval (0, 1] for shrinking the contribution of each estimator" />
                    <br />
                    <Form.Control type="number" id="subsamplingRateID" name="subsamplingRate" placeholder="subsamplingRate ->
                                                                        Fraction of the training data used for learning each decision tree, in range (0, 1]" />
                    <br />
                    <Form.Control type="text" id="validationIndicatorColID" name="validationIndicatorCol" placeholder="validationIndicatorCol ->
                                                                        Parameter for name of the column that indicates whether each row is for training or for validation" />
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

export default GradientForm