import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../../Cluster/Algorithms/Algorithms.css'


class StringIndexer extends Component {
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
                    <Form.Control as="select" type="text" id="handleInvalidStringID" name="handleInvalid" >
                        <option value="" disabled selected>handleInvalid</option>
                        <option value="skip">skip</option>
                        <option value="error">error (Default)</option>
                        <option value="keep">keep</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="inputColStringID" name="inputCol" placeholder="inputCol -> 
                                    Parameter for input column name." />
                    <br />
                    <Form.Control type="text" id="inputColsStringID" name="inputCols" placeholder="inputCols ->
                                    Parameter for input column names" />
                    <br />
                    <Form.Control type="text" id="outputColStringID" name="outputCol" placeholder="outputCol ->
                                    Parameter for output column name" />
                    <br />
                    <Form.Control type="text" id="outputColsStringID" name="outputCols" placeholder="outputCols ->
                                    Parameter for output column names"/>
                    <br />
                    <Form.Control as="select" title="Parameter for how to order labels of string column." type="text" id="stringOrderTypeStringID" name="stringOrderType" >
                        <option value="" disabled selected>stringOrderType</option>
                        <option value="frequencyDesc">frequencyDesc</option>
                        <option value="frequencyAsc">frequencyAsc</option>
                        <option value="alphabetDesc">alphabetDesc</option>
                        <option value="alphabetAsc">alphabetAsc</option>
                    </Form.Control>
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

export default StringIndexer