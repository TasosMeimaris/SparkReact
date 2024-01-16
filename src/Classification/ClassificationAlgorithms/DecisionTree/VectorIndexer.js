import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class VectorIndexer extends Component {
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
                    <Form.Control as="select" type="text" id="handleInvalidVectorID" name="handleInvalid" >
                        <option value="" disabled selected>handleInvalid (only applies to categorical features)</option>
                        <option value="skip">skip</option>
                        <option value="error">error (Default)</option>
                        <option value="keep">keep</option>
                    </Form.Control>
                    <br />
                    <Form.Control  type="text" id="inputColVectorID" name="inputCol" placeholder="inputCol -> 
                                        Parameter for input column name." />
                    <br />
                    <Form.Control  type="number" id="maxCategoriesVectorID" name="maxCategories" placeholder="maxCategories ->
                                        Parameter threshold for the number of values a categorical feature can take." />
                    <br />
                    <Form.Control  type="text" id="outputColVectorID" name="outputCol" placeholder="outputCol ->
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

export default VectorIndexer