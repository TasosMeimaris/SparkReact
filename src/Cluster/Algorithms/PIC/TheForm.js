import React,{Component} from 'react';
import '../Algorithms.css'
import { Form } from 'react-bootstrap'

class TheForm extends Component {
    state = { 
        showForm: false}

    
    myfun = () => { //this is for progress bar
        if (this.props.percentage <= 39) {
            this.props.parentCallback(this.props.percentage + 70);
        }        
    } 

    showForm = () => {  //this is for form
        console.log(this.props.percentage);
        return (
            <div>
                <Form>
                    <br />
                    <Form.Control type="text" id="dstColID" name="dstCol" placeholder="dstCol -> 
                                Name of the Form.Control column for destination vertex IDs. Default: dst" />
                    <br />
                    <Form.Control type="number" id="kID" name=" k" placeholder=" k: ->
                                The number of clusters to create. Must be > 1. Default: 2." />
                    <br />
                    <Form.Control type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                Parameter for maximum number of iterations. Must be >= 0." />
                    <br />
                    <Form.Control type="text" id="srcColID" name="srcCol" placeholder=" srcCol ->
                                Parameter for the name of the form column for source vertex IDs. Default: src" />
                    <br />
                    <Form.Control type="text" id="weightColID" name="weightCol" placeholder="weightCol ->
                                Parameter for weight column name." />
                    <br />
                    <Form.Control type="text" id="initModeID" name="initMode" placeholder="initMode ->
                                Parameter for the initialization algorithm. Possible options random(default) or degree 
                                                                        " />
                    <br />
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={() => {this.setState({showForm: !this.state.showForm}, this.myfun())}}>
                    choose your own parameters
                </button>                                                                                                      
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default TheForm
