import { Form, Button, Modal } from 'react-bootstrap'
import './Cluster/Algorithms/Algorithms.css'
import React from 'react'

const FormSbt = (props) => {

    const myhadler = () => {
       localStorage.setItem('SparkVersion', document.getElementById('SparkVersionID').value); 
       localStorage.setItem('ScalaVersion', document.getElementById('ScalaVersionID').value); 
       localStorage.setItem('Name', document.getElementById('nameID').value); 
       localStorage.setItem('Version', document.getElementById('VersionID').value);       
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleModalOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Fill this form to continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="nameID">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required={true} type="text" placeholder="Enter the name of jar file" />
                        </Form.Group>
                        <Form.Group controlId="VersionID">
                            <Form.Label>Version</Form.Label>
                            <Form.Control required={true} type="text" placeholder="Enter your Version" />
                        </Form.Group>
                        <Form.Group controlId="SparkVersionID">
                            <Form.Label>Spark Version</Form.Label>
                            <Form.Control required={true} type="text" placeholder="Enter your Spark Version" />
                        </Form.Group>
                        <Form.Group controlId="ScalaVersionID">
                            <Form.Label>Scala Version</Form.Label>
                            <Form.Control required={true} type="text" placeholder="Enter your Scala Version " />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleModalOpen}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        myhadler();
                        props.handleModalOpen();
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default FormSbt;
