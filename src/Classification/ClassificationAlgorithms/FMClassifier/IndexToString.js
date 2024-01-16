import React, { Component } from 'react';
import '../../../Cluster/Algorithms/Algorithms.css'
import { Form } from 'react-bootstrap';

class IndexToString extends Component {
    state = {
        showForm: false
    }

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
                    <Form.Control type="text" id="inputColIndexID" name="inputCol" placeholder="inputCol -> 
                                    Parameter for input column name." />
                    <br />
                    <Form.Control type="text" id="labelsIndexID" name="labels" placeholder="maxCategories ->
                                    Optional parameter for array of labels specifying index-string mapping." />
                    <br />
                    <Form.Control type="text" id="outputColIndexID" name="outputCol" placeholder="outputCol ->
                                    Parameter for output column name" />
                    <br />
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

export default IndexToString