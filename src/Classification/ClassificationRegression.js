import React from 'react'
import { Link } from 'react-router-dom';
import Myclassification from './Myclassification'
//
const ClassificationRegression = () => (
    <div className="d-flex">
        <div class="container-fluid p-0">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <h1>Choices</h1>
                </div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action bg-light" to='/classification'>Classification Algorithms</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to='/regression'>Regression Algorithms</Link>
                </div>
            </div>
        </div>
        <Myclassification />        
    </div>
)

export default ClassificationRegression