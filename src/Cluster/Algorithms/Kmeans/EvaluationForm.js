import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap';
import '../Algorithms.css'

class EvalForm extends Component {
    state = { 
        showForm: false,
    }

        myfun = () => {
            if (this.props.percentage <= 69) {
                this.props.parentCallback(this.props.percentage + 30);
            }            
        } 

        showForm = () => {
            return (
                <Form>
                    <br />
                    <Form.Control type="text" id="predictionColName" name="predictionCol" placeholder="predictionCol -> 
                                Parameter for prediction column name." />
                    <br />
                    <Form.Control type="text" id="mymetricName" name="metricName" placeholder="metricName ->
                                Parameter for metric name in evaluation (supports silhouette (default))" />
                    <br />
                    <Form.Control as="select" type="text" id="distanceMeasureName" name="distanceMeasure" >
                            <option value="" disabled selected>distanceMeasure (Parameter for distance measure to be used in evaluation)</option>
                            <option value="squaredEuclcontrolIdean">squaredEuclcontrolIdean</option>
                            <option value="cosine">cosine</option>
                    </Form.Control>
                    <br />
                    <Form.Control type="text" id="featuresColName" name="featuresCol" placeholder="featuresCol ->
                                Parameter for features column name" />
                </Form>
            );
        }

        render() {
            return (
                <div>
                    <button type="submit" class="btn btn-primary" onClick={() => {this.setState({showForm: !this.state.showForm},this.myfun);}} > 
                        Choose your own parameters
                    </button>
                    {this.state.showForm ? this.showForm() : null}
                </div>
            )
        }
    }
    
export default EvalForm