import React from 'react'
import { Link } from 'react-router-dom';

const RegressionToolbar = () => (
    
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <h1>Regression</h1>
            </div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to='/regression/LinearRegression'>Linear regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to = '/regression/RandomForestRegression'>Random forest regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to = '/regression/GradientBoostedTreeRegressor'>Gradient-boosted tree regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/regression/IsotonicRegression'>Isotonic regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/regression/FMRegressor'>Factorization Machines Regressor</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/regression/GeneralizedLinearRegression'>Generalized Linear regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to = '/regression/DecisionTreeRegression'>Decision tree regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to = '/regression/SurvivalRegression'>Survival regression</Link>
            </div>
            <br/>
        </div>
    
)

export default RegressionToolbar