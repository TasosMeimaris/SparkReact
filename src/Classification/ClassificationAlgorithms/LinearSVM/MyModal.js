import React, { Component } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

/*
const customStyles = {
    content : {
        position: 'absolute',
        padding: '50px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zInden: 1000,
        backgroundColor: "rgb(20,20,20)",
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
        zIndex: 1000
    }
};
*/
Modal.setAppElement('#portal');
var subtitle;
//function MyModal(props) {
class MyModal extends Component {
    
    //const [open,setIsOpen] = useState(false);
    state = { 
        setIsOpen: false}
    
    openModal = () => { 
        //setIsOpen(true);
        this.setState({setIsOpen: true});
    }
 

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    closeModal = () => {
        //setIsOpen(false);
        this.setState({setIsOpen: false});
        if (this.props.percentage <= 39) {
            this.props.parentCallback(this.props.percentage + 10);
        }
    }
    customStyles = {
        content : {
            position: 'absolute',
            padding: '50px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zInden: 1000,
            backgroundColor: "rgb(20,20,20)",
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,.7)',
            zIndex: 1000
        }
    };

    

   
    render () {
        
        return (
            <div>
                <div className = "myword" onClick={this.openModal}>choose your own</div>
                <Modal
                    isOpen={this.state.setIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.customStyles}
                    contentLabel="LinearSVM Modal"
                >
            
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Please choose your own parameters</h2>
                            
                    {/*<div>I am a modal</div>*/}
                    <form className="theForm">
                        <br />
                        <input className = "trainForms" type="text" id="featuresColID" name="featuresCol" placeholder="featuresCol -> 
                                                                                    Parameter for features column name." />
                        <br />
                        <input className = "trainForms" type="text" id="fitInterceptID" name="fitIntercept" placeholder="fitIntercept ->
                                                                                Parameter for whether to fit an intercept term (True or False)." />
                        <br />
                        <input className = "trainForms" type="text" id="labelColID" name="labelCol" placeholder="labelCol ->
                                                                                Parameter for label column name" />
                        <br />
                        <input className = "trainForms" type="number" id="maxIterID" name="maxIter" placeholder="maxIter ->
                                                                                Parameter for maximum number of iterations (>= 0)." />
                        <br />
                        <input className = "trainForms" type="text" id="predictionColID" name="predictionCol" placeholder="predictionCol ->
                                                                                Parameter for prediction column name" />
                        <br />
                        <input className = "trainForms" type="text" id="rawPredictionColID" name="rawPredictionCol" placeholder="rawPredictionCol ->
                                                                                Parameter for raw prediction (a.k.a. confidence) column name." />
                        <br />
                        <input className = "trainForms" type="number" id="regParamID" name="regParam" placeholder="regParam ->
                                                                                Parameter for regularization parameter (>= 0)" />   
                        <br />
                        <input className = "trainForms" type="text" id="standardizationID" name="standardization" placeholder="standardization ->
                                                                                Parameter for whether to standardize the training features before fitting the model" />   
                        <br />
                        <input className = "trainForms"  title = "For LinearSVC, this threshold is applied to the rawPrediction, rather than a probability. This threshold can be any real number" type="number" id="thresholdID" name="threshold" placeholder="threshold ->
                                                                                Parameter for threshold in binary classification prediction. Default: 0.0" /> 
                        <br />
                        <input className = "trainForms" type="number" id="tolID" name="tol" placeholder="tol ->
                                                                                Parameter for the convergence tolerance for iterative algorithms (>= 0)." /> 
                        <br />
                        <input className = "trainForms" type="text" id="weightColID" name="weightCol" placeholder="weightCol ->
                                                                                Parameter for weight column name (not set or empty is 1.0)" />   
                                                                                                                                                                            
                    </form>
                    <button className="mybutton" onClick={this.closeModal}>Save parameters</button>
                </Modal>
            </div>
        );
    }
}

export default MyModal
//ReactDOM.render(<MyModal {...props} />, document.getElementById('portal'))
