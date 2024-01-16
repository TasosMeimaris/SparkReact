import React, { useState } from 'react'
// import './toolbar.css'
import './toolbar.css'
import { Link } from 'react-router-dom';
import FormSbt from './FormSbt';
import { Container, Row, Col } from 'react-bootstrap';
//import { ReactComponent } from '*.svg';

function Toolbar() {
    const [show, setShow] = useState(false);

    const handleModalOpen = () => { //this is for default params in train
        setShow(!show);
    };

    return (

        <div className="bg-light border-right" id="sidebar-wrapper">

            <div className="sidebar-heading"><h1>SparkReact</h1></div>
            <div className="list-group list-group-flush">
                <Link onClick={handleModalOpen} className="list-group-item list-group-item-action bg-light" to="/cluster">Clustering</Link>
                <Link onClick={handleModalOpen} className="list-group-item list-group-item-action bg-light" to="/classification">Classification</Link>
                <Link onClick={handleModalOpen} className="list-group-item list-group-item-action bg-light" to="/regression">Regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/about">About this project</Link>
            </div>
            <FormSbt
                show={show}
                handleModalOpen={handleModalOpen}
            />

        </div>


    )

}


export default Toolbar; 
