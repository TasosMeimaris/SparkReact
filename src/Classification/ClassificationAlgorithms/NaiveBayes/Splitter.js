import React, { Component } from 'react';
import '../../../Cluster/Algorithms/Algorithms.css'
import '../../../Cluster/Algorithms/Algorithms.css'
import { Form } from 'react-bootstrap'

class Splitter extends Component {
    state = {
        showForm: false
    }

    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 39) {
            this.props.parentCallback(this.props.percentage + 10);
            //this.props.parentCallback(this.props.showbutton)
        }
    }

    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="number" id="weightsSplitID" name="weights" placeholder="weights -> 
                                    Parameter declare the weights for splits." />
                    <br />
                    <Form.Control type="number" id="seedSplitID" name="seed" placeholder="seed ->
                                    Parameter for sampling" />
                    <br />
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => { this.setState({ showForm: !this.state.showForm }, this.myfun()) }}>
                    Click for parameters
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }

}

export default Splitter