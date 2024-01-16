import React,{Component} from 'react';
import '../Algorithms.css'
import { Form } from 'react-bootstrap'

class Myforms extends Component {
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
                    <Form.Control title = "E.g. 10 means that the cache will get checkpointed every 10 iterations." type="number" id="checkpointIntervalID" name="checkpointInterval" placeholder="checkpointInterval -> 
                                Parameter for set checkpoint interval (>= 1) or disable checkpoint (-1)." 
                    />
                    <br />
                    <Form.Control type="number" id="docConcentrationID" name="docConcentration" placeholder="docConcentration: ->
                                        Larger values mean more smoothing (more regularization)"
                    />
                    <br />
                    <Form.Control type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol ->
                                        Parameter for features column name." 
                    />
                    <br />
                    <Form.Control type="number" id="kID" name="k" placeholder=" k ->
                                        Parameter for  the number of topics (clusters) to infer. 
                                        Must be > 1. Default: 10." 
                    />
                    <br />
                    <Form.Control type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                        Parameter for maximum number of iterations 
                                        Must be (>= 0)." 
                    />
                    <br />
                    <Form.Control type="text" id="optimizerID" name="optimizer" placeholder="optimizer ->
                                        Optimizer or inference algorithm used to estimate the LDA model." 
                    />
                    <br />
                    <Form.Control type="number" id="seedID" name="seed" placeholder="seed ->
                                        Parameter for random seed." />
                    <br />
                    <Form.Control title="Default: 0.05, i.e., 5% of total documents" type="number" id="subsamplingRateID" name="subsamplingRate" placeholder="subsamplingRate ->
                                        Fraction of the corpus to be sampled and used in each iteration."
                    />
                    <br />
                    <Form.Control type="number" id="topicConcentrationID" name="topicConcentration" placeholder="topicConcentration ->
                                        Parameter for the prior placed on topics' distributions.)
                                                                    (EM>1,Online>=0)" 
                    />
                    <br />
                    <Form.Control title="Returns a vector of zeros for an empty document" type="number" id="topicDistributionColID" name="topicDistributionCol" placeholder="topicDistributionCol ->
                                        Estimates the topic mixture distribution for each document" 
                    />
                                                                                                                                                    
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button id = "thebuttons" type="submit" class="btn btn-primary" onClick={() => {this.setState({showForm: !this.state.showForm}, this.myfun())}}>
                    choose your own parameters
                </button>                                                                                                      
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default Myforms
